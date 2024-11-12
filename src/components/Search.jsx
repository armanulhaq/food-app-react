import { useState, useEffect } from "react";
import styles from "./search.module.css";

export default function Search({ setFoodData }) {
    const [query, setQuery] = useState("pizza");

    useEffect(() => {
        async function fetchFood() {
            const URL = "https://api.spoonacular.com/recipes/complexSearch";
            const API_KEY = "5db51b0d7dda45e5a1b94ffe525e2b2b";
            let res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            let data = await res.json();
            setFoodData(data.results);
        }
        fetchFood();
    }, [query, setFoodData]);
    return (
        <div className={styles.searchContainer}>
            <div className={styles.searchBoxContainer}>
                Search:
                <input
                    className={styles.searchInput}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                />
            </div>

            <hr className={styles.hr} />
        </div>
    );
}
