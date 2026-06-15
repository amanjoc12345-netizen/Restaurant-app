import { useState } from "react";
import Header from "./components/Header";
import MealsSummary from "./components/MealsSummary";
import AvailabelMeals from "./components/AvailabelMeals";
import Cart from "./components/cart";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />

      <MealsSummary />
      <AvailabelMeals />
    </>
  );
}

export default App;