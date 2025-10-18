import React, { useState } from "react";

function IdeaForm() {
  const [formData, setFormData] = useState({
    type: "Full Game",
    description: "",
  });

  const [status, setStatus] = useState("");

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/ideas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Idea submitted successfully!");
        setFormData({ type: "Full Game", description: "" });
      } else {
        setStatus("❌ Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Error submitting idea:", error);
      setStatus("❌ Network error.");
    }
  };

  return (
    <div>
      <h1>Submit your idea</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Type of Idea
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="Full Game">Full Game</option>
            <option value="Mechanic">Mechanic</option>
            <option value="Art Concept">Art Concept</option>
            <option value="Story Idea">Story Idea</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <br />

        <label>
          Idea Description:
          <textarea
            name="description"
            placeholder="Describe your idea here"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>

        <br />
        <button type="submit">Submit Idea</button>
      </form>

      <p>{status}</p>
    </div>
  );
}

export default IdeaForm;
