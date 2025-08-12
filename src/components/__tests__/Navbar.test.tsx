import { render, screen } from '@testing-library/react';
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
    expect(screen.getAllByRole('link', { name: /home/i }).length).toBeGreaterThan(0);
  });
});
