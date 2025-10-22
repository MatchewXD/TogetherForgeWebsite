const BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000';

export async function createIdea(payload) {
  const res = await fetch(`${BASE}/api/ideas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `Request failed: ${res.status}`);
  }
  return res.json();
}
