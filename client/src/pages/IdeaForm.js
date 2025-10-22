import React, { useState } from 'react';
import { createIdea } from '../api';
import LatestIdeas from '../components/LatestIdeas';

function IdeaForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const created = await createIdea({ title: title.trim(), description: description.trim() });
      setSuccessMsg(`Idea submitted! (id: ${created.id})`);
      setTitle('');
      setDescription('');
      setRefreshKey(k => k + 1); // <— trigger LatestIdeas refresh
    } catch (err) {
      setErrorMsg(err.message || 'Failed to submit idea.');
    } finally {
      setSubmitting(false);
    }
  }

  const disabled = submitting || !title.trim() || !description.trim();

  return (
    <>
      <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: '2rem auto', display: 'grid', gap: '0.75rem' }}>
        <h2>Submit an Idea</h2>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Short title"
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </label>

        <label>
          Description
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Describe your idea…"
            required
            rows={6}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </label>

        <button type="submit" disabled={disabled} style={{ padding: '0.75rem', cursor: disabled ? 'not-allowed' : 'pointer' }}>
          {submitting ? 'Submitting…' : 'Submit'}
        </button>

        {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
        {errorMsg && <p style={{ color: 'crimson' }}>{errorMsg}</p>}
      </form>

      <LatestIdeas refreshKey={refreshKey} />
    </>
  );
}

export default IdeaForm;
