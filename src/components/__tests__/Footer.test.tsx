import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer component', () => {
  it('renders privacy policy link', () => {
    render(<Footer />);
    expect(screen.getAllByRole('link', { name: /privacy policy/i }).length).toBeGreaterThan(0);
  });
});
