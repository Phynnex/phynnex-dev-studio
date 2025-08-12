import { render, screen } from '@testing-library/react';
import Team from '../Team';

describe('Team component', () => {
  it('renders section heading', () => {
    render(<Team />);

    expect(
      screen.getByRole('heading', { name: /meet the brilliant minds behind innovation/i })
    ).toBeInTheDocument();

  });
});
