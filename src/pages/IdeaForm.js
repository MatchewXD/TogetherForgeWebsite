import React from "react";

function IdeaForm() {
  return (
    <div>
      <h1>Submit your idea</h1>
      <form>
        <label>
          Type of Idea
          <select>
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
          <textarea type="text" placeholder="Describe your idea here" />
        </label>
        <br />
        <button type="submit">Submit Idea</button>
      </form>
    </div>
  );
}

export default IdeaForm;