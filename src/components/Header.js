import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

import logo from './../assets/images/logo.png';
import { CartContext } from './../context/CartContext';

export const Header = () => {
  const { cartList } = useContext(CartContext);

  return (
    <header>
      <Link to='/' className='logo'>
        <img src={logo} alt='Shopping cart' />
        <span>Shopping Cart</span>
      </Link>
      <nav className='navigation'>
        <NavLink to='/' className='link' end>
          Home
        </NavLink>
        <NavLink to='/cart' className='link'>
          Cart
        </NavLink>
      </nav>
      <Link to='/cart' className='items'>
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  );
};
