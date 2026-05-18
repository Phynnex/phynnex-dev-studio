import { fireEvent, render, screen } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact component', () => {
  it('renders heading', () => {
    render(<Contact />);
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument();
  });

  it('opens WhatsApp with the contact form details', () => {
    const openSpy = jest.spyOn(window, 'open').mockImplementation(() => null);

    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Ada Lovelace' } });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'ada@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: '+234 800 000 0000' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'I need a website for my business.' },
    });

    fireEvent.click(screen.getByRole('button', { name: /send via whatsapp/i }));

    expect(openSpy).toHaveBeenCalledWith(
      expect.stringContaining('https://wa.me/2347034390904?text='),
      '_blank',
      'noopener,noreferrer'
    );

    const [whatsappUrl] = openSpy.mock.calls[0];
    const text = new URL(whatsappUrl as string).searchParams.get('text');

    expect(text).toContain('Name: Ada Lovelace');
    expect(text).toContain('Email: ada@example.com');
    expect(text).toContain('Phone: +234 800 000 0000');
    expect(text).toContain('I need a website for my business.');

    openSpy.mockRestore();
  });
});
