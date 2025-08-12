import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero component', () => {
  it('renders heading', () => {
    render(<Hero />);

    expect(
      screen.getByRole('heading', { name: /from vision to impact we build what's next/i })
    ).toBeInTheDocument();

  });
});
