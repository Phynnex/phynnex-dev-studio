import handler from '../contact';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

jest.mock('nodemailer');

function createMocks(
  method: string,
  body: Record<string, unknown> = {}
): { req: Partial<NextApiRequest>; res: jest.Mocked<NextApiResponse> } {
  const req = { method, body } as Partial<NextApiRequest>;
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
    setHeader: jest.fn(),
    end: jest.fn(),
  } as unknown as jest.Mocked<NextApiResponse>;
  return { req, res };
}

describe('contact api route', () => {
  it('rejects non-POST methods', async () => {
    const { req, res } = createMocks('GET');
    await handler(req as NextApiRequest, res as NextApiResponse);
    expect(res.status).toHaveBeenCalledWith(405);
    expect(res.end).toHaveBeenCalled();
  });

  it('validates required fields', async () => {
    const { req, res } = createMocks('POST', {});
    await handler(req as NextApiRequest, res as NextApiResponse);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ success: false, error: 'Missing fields' });
  });

  it('handles sendMail errors', async () => {
    const sendMail = jest.fn().mockRejectedValue(new Error('fail'));
    (nodemailer.createTransport as jest.Mock).mockReturnValue({ sendMail });

    const { req, res } = createMocks('POST', { name: 'a', email: 'b', message: 'c' });
    await handler(req as NextApiRequest, res as NextApiResponse);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ success: false, error: 'Failed to send email' });
  });
});
