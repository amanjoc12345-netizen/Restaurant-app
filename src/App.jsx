import CartContext from "./store/cart-context";
import { useState } from "react";
import Header from "./components/Header";
import MealsSummary from "./components/MealsSummary";
import AvailabelMeals from "./components/AvailabelMeals";
import Cart from "./components/cart";

function App() {
   
  const [cartItems, setCartItems] =useState([]);
  const [cartIsShown, setCartIsShown] = useState(false);

  const addItemHandler = (item) =>{
    setCartItems((prevItems)=>{
      return [...prevItems, item];
    });
  };

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

   
return (
  <CartContext.Provider
    value={{
      items: cartItems,
      addItem: addItemHandler,
    }}
  >
    {cartIsShown && <Cart onClose={hideCartHandler} />}

    <Header onShowCart={showCartHandler} />

    <MealsSummary />
    <AvailabelMeals />
  </CartContext.Provider>

);
};

export default App;