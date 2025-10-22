import React, { useEffect, useState } from 'react';

const BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000';

export default function LatestIdeas({ refreshKey }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    fetch(`${BASE}/api/ideas?limit=5`)
      .then(r => r.json())
      .then(data => { if (!ignore) setItems(data); })
      .catch(() => { if (!ignore) setItems([]); })
      .finally(() => { if (!ignore) setLoading(false); });
    return () => { ignore = true; };
  }, [refreshKey]);

  if (loading) return <p>Loading recent ideas…</p>;
  if (!items.length) return <p>No ideas yet.</p>;

  return (
    <div style={{ maxWidth: 600, margin: '1rem auto' }}>
      <h3>Latest Ideas</h3>
      <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
        {items.map(it => (
          <li key={it.id} style={{ padding: '0.5rem 0', borderBottom: '1px solid #444' }}>
            <strong>{it.title}</strong>
            <div style={{ opacity: 0.8 }}>{it.description}</div>
            {it.created_at && (
              <small style={{ opacity: 0.6 }}>
                {new Date(it.created_at).toLocaleString()}
              </small>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
