import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";

const MealItem = (props) => {
    const {addItem} = useContext(CartContext);
    const AddMealToCart = () => {
        addItem(props.meal);
        console.log("add to cart clicked: ",props.meal);
    }

  return (
    <li className="meal-item">
      <article>
        <img
          src={require(`../assets/${props.meal.image}`)}
          alt={props.meal.name}
        />
        <div>
          <h3>{props.meal.name}</h3>
          <p className="meal-item-price">{`${props.meal.price} €`}</p>
          <p className="meal-item-description">{props.meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={AddMealToCart} textOnly={false}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
