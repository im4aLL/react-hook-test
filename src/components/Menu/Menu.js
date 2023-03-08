import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Menu.scss';
import { NavLink } from "react-router-dom";
import { ThemeContext } from '../../context/Theme.context';

const Menu = () => {
  const { theme } = useContext(ThemeContext);

  return (
  <div className="Menu" data-testid="Menu">
    <nav>
      <ul className="nav">
        <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
        <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
      </ul>
      <div style={{ clear: 'left' }}></div>
    </nav>

    Theme: {theme}
    <br />
  </div>
)};

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
