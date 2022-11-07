import CartItem from "../CartItem/CartItem";
// Types
import { CardItemTypes } from "../App";
// Styles
import { Wrapper } from "./Cart.style";

type Props = {
  cartItem: CardItemTypes[];
  addFromCart: (checkItem: CardItemTypes) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItem, addFromCart, removeFromCart }) => {
    const calculateTotal = (item:CardItemTypes[])=>(
        item.reduce((ack:number,item)=> ack + item.amount * item.price , 0)
    )
    return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItem.length === 0 ? <p>No Item in the Cart</p> : null}
      {cartItem.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addFromCart={addFromCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total : ${calculateTotal(cartItem)}</h2>
    </Wrapper>
  );
};

export default Cart;
