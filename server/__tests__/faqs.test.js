jest.mock('../db');
const request = require('supertest');
const app = require('../app');
const db = require('../db');

describe('GET /api/faqs', () => {
  afterEach(() => jest.clearAllMocks());

  it('returns a list of FAQs', async () => {
    const rows = [
      { id: 1, question: 'What is Together Forge?', answer: 'By the community…' },
      { id: 2, question: 'How do I submit an idea?', answer: 'Use the form…' },
    ];
    db.query.mockResolvedValueOnce({ rows });

    const res = await request(app).get('/api/faqs');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(rows);
  });

  it('500s on DB error', async () => {
    db.query.mockRejectedValueOnce(new Error('boom'));
    const res = await request(app).get('/api/faqs');
    expect(res.statusCode).toBeGreaterThanOrEqual(500);
    expect(res.body).toHaveProperty('error');
  });
});
