import { createPortal } from "react-dom";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import "./cart.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `Rs. ${Math.max(0, cartCtx.totalAmount).toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return createPortal(
    <div className="backdrop" onClick={props.onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {cartItems}

        <div className="total">
          <h2>Total Amount</h2>
          <h2>{totalAmount}</h2>
        </div>

        <div className="actions">
          <button className="button--alt" onClick={props.onClose}>
            Close
          </button>
          {hasItems && <button className="button--alt">Order</button>}
        </div>
      </div>
    </div>,
    document.getElementById("overlays")
  );
};

export default Cart;