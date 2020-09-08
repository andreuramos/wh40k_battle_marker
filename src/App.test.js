import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main logo', () => {
  render(<App />);
  const logoElement = screen.getByAltText(/Under construction/i);
  expect(logoElement).toBeInTheDocument();
});

describe('App', () => {
  it('inits with empty battle', () => {
    const app = new App();

    expect(app.state.ongoingBattle).toBe(null);
  });

  it('shows start battle button when created', () => {
    render(<App />);
    const startBattleButton = screen.getByText(/Start Battle/i);

    expect(startBattleButton).toBeInTheDocument();
  });
});
