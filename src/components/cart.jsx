import { createPortal } from "react-dom";
import "./cart.css";

const Cart = (props) => {
  return createPortal(
    <div className="backdrop">
      <div className="modal">
        <p>Sushi</p>
        <br></br>

        <div className="total">
          <h2>Total Amount</h2>
          <h2>Rs. 500</h2>
        </div>

        <div className="actions">
          <button 
          className="button--alt" onClick = {props.onClose}>
            Close
            </button>
          <button className="button--alt">Order</button>
        </div>
      </div>
    </div>,
    document.getElementById("overlays")
  );
};

export default Cart;