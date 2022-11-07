import { Button } from "@mui/material";
// types
import { CardItemTypes } from "../App";
//style
import { Wrapper } from "./Item.style";

type Props = {
  item: CardItemTypes;
  handelAddFromCard: (clickedItem: CardItemTypes) => void;
};

export const Item: React.FC<Props> = ({ item, handelAddFromCard }) => (
  <Wrapper>
    <div style={{ overflow: "hidden" }}>
      <img src={item.image} alt={item.title} />
    </div>
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <span>
        <del>{item.price} $</del>
      </span>
      <small>{item.price -2} $</small>
    </div>
    <Button onClick={() => handelAddFromCard(item)}>Add to Cart</Button>
  </Wrapper>
);
