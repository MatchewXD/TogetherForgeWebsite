jest.mock('../db');
const request = require('supertest');
const app = require('../app');
const db = require('../db');

describe('POST /api/votes', () => {
  afterEach(() => jest.clearAllMocks());

  it('increments vote count for an idea', async () => {
    const payload = { ideaId: 42, direction: 'up' };

    db.query.mockResolvedValueOnce({ rows: [{ idea_id: 42, votes: 7 }] });

    const res = await request(app).post('/api/votes').send(payload);
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual(expect.objectContaining({ idea_id: 42, votes: 7 }));

    expect(db.query).toHaveBeenCalled();
  });

  it('500s on DB failure', async () => {
    const payload = { ideaId: 42, direction: 'up' };
    db.query.mockRejectedValueOnce(new Error('boom'));

    const res = await request(app).post('/api/votes').send(payload);
    expect(res.statusCode).toBeGreaterThanOrEqual(500);
    expect(res.body).toHaveProperty('error');
  });
});
