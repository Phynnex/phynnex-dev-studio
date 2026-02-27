import { render, screen } from '@testing-library/react';
import Process from '../Process';

describe('Process component', () => {
  it('renders heading', () => {
    render(<Process />);
    expect(
      screen.getByRole('heading', { name: /a clear path from brief to launch/i })
    ).toBeInTheDocument();
  });
});
