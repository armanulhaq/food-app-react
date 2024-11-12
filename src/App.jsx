import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
    // Initialize foodData as an empty array
    const [foodData, setFoodData] = useState([]);
    const [foodID, setFoodID] = useState("655698");

    return (
        <>
            <Navbar />
            <Search foodData={foodData} setFoodData={setFoodData} />
            <Container>
                <InnerContainer>
                    <FoodList setFoodID={setFoodID} foodData={foodData} />
                </InnerContainer>
                <InnerContainer>
                    <FoodDetails foodID={foodID} />
                </InnerContainer>
            </Container>
        </>
    );
}

export default App;
