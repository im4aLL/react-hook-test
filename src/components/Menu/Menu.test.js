import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Menu from './Menu';
import { BrowserRouter } from "react-router-dom";

describe('<Menu />', () => {
  test('it should mount', () => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    );
    
    const menu = screen.getByTestId('Menu');

    expect(menu).toBeInTheDocument();
  });
});