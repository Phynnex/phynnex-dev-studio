import { render, screen } from '@testing-library/react';
import Team from '../Team';

describe('Team component', () => {
  it('renders section heading', () => {
    render(<Team />);
    expect(screen.getByText(/meet the brilliant/i)).toBeInTheDocument();
  });
});
