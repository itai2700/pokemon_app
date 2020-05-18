import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
 
  return (
    <nav className='nav-wrapper red darken-3'>
      <div className='container'>
        <NavLink to='/' className='brand-logo left'>ITAI BIGIAOUI</NavLink>
        <ul className='right'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/About'>About</NavLink>
          </li>
          <li>
            <NavLink to='/Contact'>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
