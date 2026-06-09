import "./AvailabelMeals.css";

function AvailabelMeals() {
    return (
        <section className = "meals">
            <ul>
                <li>
                   <h3>Sushi</h3>
                   <p>Finest fish and veggies</p>
                   <div className = "price">Rs.500</div>
                </li>

                <li>
                    <h3>Schnitzel</h3>
                    <p>A german speciality!</p>
                    <div className = "price">Rs.700</div>
                </li>

                <li>
                    <h3>Barbecue Burger</h3>
                    <p>Healthy...and green...</p>
                    <div className = "price">RS.600</div>
                </li>
                 
                  <li>
                    <h3>Noodles</h3>
                    <p>Healthy...and tasty...</p>
                    <div className = "price">RS.200</div>
                </li>

                 <li>
                    <h3>Dumplings</h3>
                    <p>Recommended Taste</p>
                    <div className = "price">RS.350</div>
                </li>

            </ul>
        </section>
    );
}

export default AvailabelMeals;