import { useContext } from 'react';

import { CartCard } from '../components';
import { CartContext } from './../context/CartContext';

export const Cart = () => {
  const { total, cartList } = useContext(CartContext);
  console.log(cartList);

  return (
    <main>
      <h1>
        Cart Items: {cartList.length} / {total}
      </h1>
      <section className='cart'>
        {cartList.map((product) => {
          return <CartCard key={product.id} product={product} />;
        })}
      </section>
    </main>
  );
};
