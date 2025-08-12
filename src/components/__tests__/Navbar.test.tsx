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

describe('Navbar component', () => {
  it('renders navigation links', () => {
    render(<Navbar />);
    expect(
      screen.getByRole('link', { name: /phynnex dev studio logo/i })
    ).toBeInTheDocument();
  });
});
