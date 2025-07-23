import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero component', () => {
  it('renders heading', () => {
    render(<Hero />);
    expect(
      screen.getByRole('heading', { name: /transform your ideas into powerful digital solutions/i })
    ).toBeInTheDocument();
  });
});
