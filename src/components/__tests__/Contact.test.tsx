import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact component', () => {
  it('renders heading', () => {
    render(<Contact />);
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument();
  });
});
