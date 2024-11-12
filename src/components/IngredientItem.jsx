import ItemList from "./ItemList";

const IngredientItem = ({ food }) => {
    return (
        <div>
            <ItemList food={food} />
        </div>
    );
};

export default IngredientItem; // This line is correct for default export
