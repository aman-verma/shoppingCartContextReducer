import { useContext, useEffect, useState } from 'react';

import './ProductCard.css';
import { CartContext } from './../context/CartContext';

export const ProductCard = ({ product }) => {
  const { cartList, removeFromCart, addToCart } = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(false);

  const { id, image, name, price } = product;

  useEffect(() => {
    const productIsInCart = cartList.find((cartItem) => cartItem.id === id);
    console.log(productIsInCart);

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);

  return (
    <div className='productCard'>
      <img src={image} alt={name} />
      <p className='name'>{name}</p>
      <div className='action'>
        <p>$ {price}</p>
        {isInCart ? (
          <button className='remove' onClick={() => removeFromCart(product)}>
            Remove
          </button>
        ) : (
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
