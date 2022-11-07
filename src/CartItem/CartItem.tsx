import { Button } from "@mui/material";
// Types
import { CardItemTypes } from "../App";
// Styles
import { Wrapper } from "./CartItem.syle";

type Props = {
  item: CardItemTypes;
  addFromCart: (checkItem: CardItemTypes) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addFromCart, removeFromCart }) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className="infomations">
        <p>Price : {item.price} $</p>
        <p>Total :${(item.amount * item.price).toFixed(2)} $</p>
      </div>
      <div className="buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >-</Button>
        <p>{item.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addFromCart(item)}
        >+</Button>
      </div>
    </div>
      <img  src={item.image} alt={item.title}/>
  </Wrapper>
);
export default CartItem;
