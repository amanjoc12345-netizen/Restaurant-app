import {useContext} from "react";
import CartContext  from "../store/cart-context";
import MealsItemForm from "./MealsItemForm";

function MealsItem(props) {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () =>{
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price:props.price,
    });
  };
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ccc",
        padding: "1rem 0",
      }}
    >
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <div>{props.price}</div>
      </div>

      <MealsItemForm onAddToCart ={addToCartHandler} />
    </li>
  );
}

export default MealsItem;