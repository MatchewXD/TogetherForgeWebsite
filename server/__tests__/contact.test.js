jest.mock('../db');
jest.mock('nodemailer');

const request = require('supertest');
const app = require('../app');
const nodemailer = require('nodemailer');

describe('POST /api/contact', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('400s on missing fields', async () => {
    const res = await request(app).post('/api/contact').send({});
    expect(res.statusCode).toBeGreaterThanOrEqual(400);
    expect(res.body).toHaveProperty('error');
  });

  it('200s and sends an email with expected fields', async () => {
    const payload = { name: 'Test User', email: 't@e.com', message: 'Hello!' };

    const res = await request(app).post('/api/contact').send(payload);
    expect(res.statusCode).toBe(200);

    expect(res.body).toEqual({ message: 'Message sent successfully' });

    const sendMail = nodemailer.__mocks__.sendMailMock;
    expect(sendMail).toHaveBeenCalledTimes(1);
    const args = sendMail.mock.calls[0][0];
    expect(args).toEqual(
      expect.objectContaining({
        from: 'contacttogetherforge@gmail.com',
        to: 'contacttogetherforge@gmail.com',
        replyTo: 't@e.com',
        subject: expect.stringMatching(/Contact Form/i),
        text: expect.stringContaining('Test User'),
      })
    );
  });
});
