import { render, screen } from '@testing-library/react';
import Services from '../Services';

describe('Services component', () => {
  it('renders heading', () => {
    render(<Services />);
    expect(
      screen.getByRole('heading', { name: /from idea to launch with one accountable partner/i })
    ).toBeInTheDocument();
  });
});
