import MealItem from "./MealItem";
import { useState, useEffect } from "react";

const Meals = (props) => {
    const [meals, setMeals] = useState([]);
  
    useEffect(() => {
      const getMeals = async () => {
        try {
          const response = await fetch("http://localhost:3001/meals");
          const responseData = await response.json();
          console.log("logs responseData", responseData); // logib meals.json sisu
          setMeals(responseData);
        } catch (error) {
          console.error("Error fetching meals:", error);
        }
      };
  
      getMeals();
    }, []); 

 
  


  return (
    <ul id="meals">
      {
        meals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
        ))
      }
    </ul>
  );
};

export default Meals;
