import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { Drawer, Grid } from "@mui/material";
import { LinearProgress } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import Badge from "@mui/material/Badge";

// styles
import { StyleBoutton, Wrapper } from "./App.style";
import { Item } from "./Item/Item";
import Cart from "./Cart/Cart";

// types
export type CardItemTypes = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

// api
const getProducts = async (): Promise<CardItemTypes[]> => {
  return (await fetch("https://fakestoreapi.com/products")).json();
};

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [input, setInput] = useState("");
  const [cartItem, setCartItem] = useState([] as CardItemTypes[]);
  const { data, isLoading, error } = useQuery<CardItemTypes[]>(
    "products",
    getProducts
  );
  console.table(data);

  const getTotalItems = (items: CardItemTypes[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handelAddFromCard = (clickedItem: CardItemTypes) => {
    setCartItem((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? {
                ...item,
                amount: item.amount + 1,
              }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  const handelRemoveFromCart = (id: number) => {
    setCartItem((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CardItemTypes[])
    );
  };

  if (error)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "rgba(255,0,0)",
        }}
      >
        <p style={{ fontSize: "2rem" }}>Somthings error ...</p>
      </div>
    );
  if (isLoading) return <LinearProgress />;

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItem={cartItem}
          addFromCart={handelAddFromCard}
          removeFromCart={handelRemoveFromCart}
        />
      </Drawer>
      <StyleBoutton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItem)} color="error">
          <AddShoppingCart />
        </Badge>
      </StyleBoutton>
      <div className="inputStyle">
        <input
          type="text"
          placeholder="Search ..."
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <Grid container spacing={3}>
        {data
          ?.filter((val) => {
            if (input === "") {
              return val;
            } else if (val.title.toLowerCase().includes(input.toLowerCase())) {
              return val;
            }
          })
          .map((item) => (
            <Grid item key={item.id} xs={12} lg={4} sm={6}>
              <Item item={item} handelAddFromCard={handelAddFromCard} />
            </Grid>
          ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
