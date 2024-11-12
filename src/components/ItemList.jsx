import styles from "./itemList.module.css";

const ItemList = ({ food, isLoading }) => {
    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                food.extendedIngredients?.map((foodItem) => (
                    <div
                        className={styles.ingredientItemContainer}
                        key={foodItem.id}
                    >
                        <img
                            className={styles.imgItem}
                            src={`https://spoonacular.com/cdn/ingredients_100x100/${foodItem.image}`}
                            alt={foodItem.name}
                        />
                        <div>
                            <h3 className={styles.foodName}>{foodItem.name}</h3>
                            <h3 className={styles.foodAmount}>
                                {foodItem.amount} {foodItem.unit}
                            </h3>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ItemList;
