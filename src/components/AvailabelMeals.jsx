import "./AvailabelMeals.css";
import MealsItem from "./MealsItem";

function AvailableMeals() {
  return (
    <section className="meals">
      <ul>
        <MealsItem
        id = "m1"
          name="Sushi"
          description="Finest fish and veggies"
          price="500"
        />

        <MealsItem
        id = "m2"
          name="Schnitzel"
          description="A german speciality!"
          price="700"
        />

        <MealsItem
        id = "m3"
          name="Barbecue Burger"
          description="Healthy...and green..."
          price="600"
        />

        <MealsItem
        id = "m4"
          name="Noodles"
          description="Healthy...and tasty..."
          price="200"
        />

        <MealsItem
        id = "m5"
          name="Dumplings"
          description="Recommended Taste"
          price="350"
        />
      </ul>
    </section>
  );
}

export default AvailableMeals;