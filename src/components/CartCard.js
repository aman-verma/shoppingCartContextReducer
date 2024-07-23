import './CartCard.css';
import { useContext } from 'react';
import { CartContext } from './../context/CartContext';

export const CartCard = ({ product }) => {
  const { name, price, image } = product;

  const { removeFromCart } = useContext(CartContext);
  const handleRemove = () => {
    removeFromCart(product);
  };

  return (
    <div className='cartCard'>
      <img src={image} alt={name} />
      <p className='productName'>{name}</p>
      <p className='productPrice'>${price}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};
