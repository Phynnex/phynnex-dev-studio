import { render, screen } from '@testing-library/react';
import Process from '../Process';

describe('Process component', () => {
  it('renders heading', () => {
    render(<Process />);
    expect(
      screen.getByRole('heading', { name: /our seamless development process explained/i })
    ).toBeInTheDocument();
  });
});
