import { render, screen } from '@testing-library/react';
import Services from '../Services';

describe('Services component', () => {
  it('renders heading', () => {
    render(<Services />);
    expect(screen.getByRole('heading', { name: /expert digital solutions for your business/i })).toBeInTheDocument();
  });
});
