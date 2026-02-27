import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/',
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
    };
  },
}));

import Navbar from '../Navbar';

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/',
    push: jest.fn(),
    prefetch: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
    },
  }),
}));

describe('Navbar component', () => {
  it('renders navigation links', () => {
    render(<Navbar />);

    expect(screen.getByRole('link', { name: /phynnex dev studio logo/i })).toBeInTheDocument();
  });

  it('shows mobile menu toggle button', () => {
    render(<Navbar />);

    expect(screen.getByRole('button', { name: /toggle mobile menu/i })).toBeInTheDocument();
  });
});
