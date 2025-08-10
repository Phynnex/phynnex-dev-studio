import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar component', () => {
  it('renders navigation links', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: /home page/i })).toBeInTheDocument();
  });
});
