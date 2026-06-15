import { useState } from "react";
import Header from "./components/Header";
import MealsSummary from "./components/MealsSummary";
import AvailabelMeals from "./components/AvailabelMeals";
import Cart from "./components/cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    console.log("Cart button clicked");
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />

      <MealsSummary />
      <AvailabelMeals />
    </CartProvider>
  );
}

export default App;