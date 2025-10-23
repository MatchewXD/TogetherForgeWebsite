jest.mock('../db');

const request = require('supertest');
const app = require('../app');
const db = require('../db');

describe('Ideas API', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/ideas', () => {
    it('200s and returns rows (default limit 50, ordered desc)', async () => {
      const rows = [
        { id: 2, user_id: null, title: 'B', description: 'bb', created_at: '2025-10-22T01:00:00Z' },
        { id: 1, user_id: null, title: 'A', description: 'aa', created_at: '2025-10-22T00:00:00Z' },
      ];
      db.query.mockResolvedValueOnce({ rows });

      const res = await request(app).get('/api/ideas');
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(rows);

      expect(db.query).toHaveBeenCalledTimes(1);
      const [sql, params] = db.query.mock.calls[0];
      expect(sql).toMatch(/ORDER BY created_at DESC/i);
      expect(sql).toMatch(/LIMIT \$1/i);
      expect(params[0]).toBe(50);
    });

    it('respects ?limit=10 but caps at 100', async () => {
      const rows = Array.from({ length: 2 }, (_, i) => ({ id: i + 1, title: `T${i + 1}`, description: 'd', created_at: 'now' }));
      db.query.mockResolvedValueOnce({ rows });

      const res = await request(app).get('/api/ideas?limit=10');
      expect(res.statusCode).toBe(200);
      expect(db.query).toHaveBeenCalledTimes(1);
      expect(db.query.mock.calls[0][1][0]).toBe(10);
    });
  });

  describe('POST /api/ideas', () => {
    it('400s on missing title/description', async () => {
      const res = await request(app).post('/api/ideas').send({ title: '', description: '' });
      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty('error');
      expect(db.query).not.toHaveBeenCalled();
    });

    it('201s on valid payload and returns created row', async () => {
      const payload = { title: 'Test idea', description: 'Hello' };
      const fakeRow = { id: 123, user_id: null, ...payload, created_at: '2025-10-22T00:00:00Z' };
      db.query.mockResolvedValueOnce({ rows: [fakeRow] });

      const res = await request(app).post('/api/ideas').send(payload);
      expect(res.statusCode).toBe(201);
      expect(res.body).toEqual(fakeRow);

      expect(db.query).toHaveBeenCalledTimes(1);
      const [sql, params] = db.query.mock.calls[0];
      expect(sql).toMatch(/INSERT INTO game_ideas/i);
      expect(params).toEqual([null, 'Test idea', 'Hello']);
    });

    it('500s when DB throws', async () => {
      const payload = { title: 'X', description: 'Y' };
      db.query.mockRejectedValueOnce(new Error('boom'));
      const res = await request(app).post('/api/ideas').send(payload);
      expect(res.statusCode).toBe(500);
      expect(res.body).toHaveProperty('error', 'Database error');
    });
  });
});
