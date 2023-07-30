import React, { useState } from "react";
import App from "../App";

function FoodBox({ food, handleDelete }) {
  const { name, calories, image, servings } = food;
  const totalCalories = servings * calories;
  console.log(food);

  return (
    <div>
      <p>{name}</p>

      <img src={image} alt={name} style={{ width: "150px" }} />

      <p>Calories: {calories}</p>
      <p>Servings {servings}</p>

      <p>
        <b>Total Calories: {totalCalories} kcal</b>
      </p>

      <button type="primary" onClick={() => handleDelete(food.id)}>
        Delete
      </button>
    </div>
  );
}
export default FoodBox;
