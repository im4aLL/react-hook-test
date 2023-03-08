import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';
import { ThemeContext } from '../../context/Theme.context';

const Todo = () => {
  const [title, setTitle] = useState('');
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTitle('Todo Component Title');
  }, []);

  const changeTheme = () => {
    setTheme('White');
  }

  return (
    <div className="Todo" data-testid="Todo">
      {title}

      <br />
      Theme: {theme}

      <br />

      <button className="button" onClick={changeTheme}>Change theme</button>
    </div>
  );
};

Todo.propTypes = {};
Todo.defaultProps = {};

export default Todo;
