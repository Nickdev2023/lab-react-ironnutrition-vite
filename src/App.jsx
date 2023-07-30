import "./App.css";
import React, { useState } from "react";
import foodsJson from "./foods.json";
import AddFood from "./components/AddFoodForm";
import FoodBox from "./components/FoodBox";

const foodList = foodsJson;

function App() {
  const [foods, setFoods] = useState(foodList);

  function handleDelete(id) {
    setFoods(foods.filter((food) => food.id !== id));
  }
  return (
    <div>
      {foodList.map((food) => (
        <FoodBox key={food.id} food={food} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default App;
