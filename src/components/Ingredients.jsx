import IngredientItem from "./IngredientItem";

const Ingredients = ({ food, isLoading }) => {
    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <IngredientItem food={food} isLoading={isLoading} />
            )}
        </div>
    );
};

export default Ingredients;
