import Header from "./components/Header";
import MealsSummary from "./components/MealsSummary";
import AvailabelMeals from "./components/AvailabelMeals";
import Cart from "./components/cart";

function App() {
  return (
    <>
    <Cart/>
    <Header />
    <MealsSummary />
    <AvailabelMeals />
    </>
  );
}
export default App;