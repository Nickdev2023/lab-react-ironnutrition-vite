import { useState } from "react";

function AddFood() {
  const [foodDetails, setFoodDetails] = useState(foodsJson);
  console.log(foodDetails);
  <FoodBox />;
}

export default AddFood;
