import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => (
    <nav>
        <ul>
          <li><NavLink exact activeClassName="current" to='/home'>Home</NavLink></li>
          <li><NavLink exact activeClassName="current" to='/sobre'>Sobre</NavLink></li>
          <li><NavLink exact activeClassName="current" to='/contato'>Contato</NavLink></li>
        </ul>
      </nav>
);
export default Navigation;