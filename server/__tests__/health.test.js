jest.mock('../db');

const request = require('supertest');
const app = require('../app');
const db = require('../db');

describe('GET /api/health', () => {
  it('returns ok:true and a timestamp', async () => {
    db.dbQuery.mockResolvedValueOnce({ rows: [{ now: new Date().toISOString() }] });

    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('ok', true);
    expect(res.body).toHaveProperty('now');
  });
});
