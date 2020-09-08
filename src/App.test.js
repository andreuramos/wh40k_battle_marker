import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main logo', () => {
  render(<App />);
  const logoElement = screen.getByAltText(/Under construction/i);
  expect(logoElement).toBeInTheDocument();
});
