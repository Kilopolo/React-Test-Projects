import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/login">LogIn</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/notas">Notas</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
