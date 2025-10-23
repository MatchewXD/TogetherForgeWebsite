jest.mock('../db');
const request = require('supertest');
const app = require('../app');
const db = require('../db');

describe('POST /api/feedback', () => {
  afterEach(() => jest.clearAllMocks());

  it('400s on invalid payload', async () => {
    const res = await request(app).post('/api/feedback').send({});
    expect(res.statusCode).toBeGreaterThanOrEqual(400);
  });

  it('201s on valid payload', async () => {
    const payload = { message: 'Great work!', user_id: null };
    db.query.mockResolvedValueOnce({ rows: [{ id: 2, message: 'Great work!' }] });

    const res = await request(app).post('/api/feedback').send(payload);
    expect(res.statusCode).toBe(201);
    // Your route returns: { message: "Feedback submitted successfully", feedback: {...} }
    expect(res.body).toEqual(expect.objectContaining({
      message: 'Feedback submitted successfully',
      feedback: expect.objectContaining({ id: 2, message: 'Great work!' }),
    }));
  });
});
