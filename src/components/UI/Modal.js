import { useContext } from "react";
import Button from "./Button";
import CartContext from "../../store/CartContext";

const Modal = ({ children, onClose }) => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart
    .reduce((sum, item) => sum + item.quantity * item.price, 0)
    .toFixed(2);

  return (
    <div className="cart">
      <dialog open className="modal">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x {item.price} €
              </li>
            ))}
          </ul>
        )}
        <h4 style={{ color: 'chocolate' }} >Total Price : {totalPrice} €</h4>
        <div className="modal-actions">
        <Button textOnly={true} onClick={onClose} className="modal-close-button">
            Close
          </Button>
          <Button textOnly={false} onClick={() => window.location.reload()} className="modal-close-button">
            Checkout
          </Button>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
