import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { useContext } from "react";

const Header = ({ onOpenCart }) => {
  const { cart } = useContext(CartContext);
  console.log("logs cart ", cart);

  

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} />
        <h1>React Food Order App</h1>
      </div>
      <nav>
        <Button onClick={onOpenCart} textOnly={true}>
          Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
