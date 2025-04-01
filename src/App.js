import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartProvider } from "./store/CartContext";
import Modal from "./components/UI/Modal";
import { useState } from "react";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // muuda pärast falseks!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const openCartHandler = () => {
    setIsModalOpen(true);
  };
  const closeCartHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <CartProvider>
      {isModalOpen && <Modal onClose={closeCartHandler}> {}</Modal>}

      <Header onOpenCart={openCartHandler} />
      <Meals />
    </CartProvider>
  );
};

export default App;
