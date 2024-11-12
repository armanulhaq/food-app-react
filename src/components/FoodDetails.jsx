import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import Ingredients from "./Ingredients";

export default function FoodDetails({ foodID }) {
    const [food, setFood] = useState({});
    const [isLoading, setisLoading] = useState(true);
    const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
    const API_KEY = "5db51b0d7dda45e5a1b94ffe525e2b2b";

    useEffect(() => {
        async function getData() {
            const res = await fetch(`${URL}?apiKey=${API_KEY}`);
            const foodData = await res.json();
            setFood(foodData);
            setisLoading(false);
        }
        getData();
    }, [foodID]);

    return (
        <div className={styles.foodDetailsContainer}>
            <h2>{food.title}</h2>
            <img className={styles.foodImg} src={food.image} alt="" />
            <div className={styles.foodInfo}>
                <span>⏳: {food.readyInMinutes} minutes</span>
                <span>👪: Serves {food.servings}</span>
                <span>
                    {food.vegetarian ? "🥕: Vegetarian" : "🍗: Non Vegetarian"}
                </span>
            </div>
            <div className={styles.ingredientsContainer}>
                <h2>Ingredients: </h2>
                <Ingredients food={food} isLoading={isLoading} />
            </div>

            <h2>Instructions:</h2>
            <div className={styles.instructions}>
                <ol>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        food.analyzedInstructions[0].steps.map((step) => (
                            <li key={step.step}>{step.step}</li>
                        ))
                    )}
                </ol>
            </div>
        </div>
    );
}
