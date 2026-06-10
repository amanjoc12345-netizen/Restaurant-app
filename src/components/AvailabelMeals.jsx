import "./AvailabelMeals.css";
import MealsItem from "./MealsItem";

function AvailableMeals() {
  return (
    <section className="meals">
      <ul>
        <MealsItem
          name="Sushi"
          description="Finest fish and veggies"
          price="Rs.500"
        />

        <MealsItem
          name="Schnitzel"
          description="A german speciality!"
          price="Rs.700"
        />

        <MealsItem
          name="Barbecue Burger"
          description="Healthy...and green..."
          price="Rs.600"
        />

        <MealsItem
          name="Noodles"
          description="Healthy...and tasty..."
          price="Rs.200"
        />

        <MealsItem
          name="Dumplings"
          description="Recommended Taste"
          price="Rs.350"
        />
      </ul>
    </section>
  );
}

export default AvailableMeals;