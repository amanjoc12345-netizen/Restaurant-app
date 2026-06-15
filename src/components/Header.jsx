import { useContext } from "react";
import CartContext from "../store/cart-context";
import "./Header.css";

function Header(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <>
      <header className="header">
        <h1>ReactMeals</h1>

        <button
          className="cart-button"
          onClick={props.onShowCart}
        >
          🛒 Your Cart
          <span className="badge">{numberOfCartItems}</span>
        </button>
      </header>

      <div className="main-image">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Food"
        />
      </div>
    </>
  );
}

export default Header;