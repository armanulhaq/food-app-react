import styles from "./foodItem.module.css";

export const FoodItem = ({ food, setFoodID }) => {
    console.log(setFoodID); // Check if this logs a function

    return (
        <div className={styles.foodItemContainer}>
            <div className={styles.foodTitle}>{food.title}</div>
            <img
                className={styles.foodImage}
                src={food.image}
                alt={food.title}
            ></img>
            <button
                onClick={() => {
                    if (typeof setFoodID === "function") {
                        setFoodID(food.id);
                    } else {
                        console.error("setFoodID is not a function");
                    }
                }}
                className={styles.recipeButton}
            >
                View Recipe
            </button>
        </div>
    );
};
