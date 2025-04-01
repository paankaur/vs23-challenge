import MealItem from "./MealItem";
import { useState, useEffect } from "react";

const Meals = () => {
    const [meals, setMeals] = useState([]);
  
    useEffect(() => {
      const getMeals = async () => {
        try {
          const response = await fetch("http://localhost:3001/meals");
          const responseData = await response.json();
          console.log(responseData); // logib meals.json sisu
          setMeals(responseData);
          console.log("logging meals:", meals);
        } catch (error) {
          console.error("Error fetching meals:", error);
        }
      };
  
      getMeals();
    }, []); 

 
  


  return (
    <ul id="meals">
      {
        // list of meals
      }
    </ul>
  );
};

export default Meals;
