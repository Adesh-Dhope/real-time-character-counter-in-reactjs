import React, { useState } from "react";
import "./CharacterCounter.css";

const TextCounter = () => {
  const [text, setText] = useState("");
  const charLimit = 200; // Set your character limit here

  const handleChange = (e) => {
    const newText = e.target.value;

    // Show alert if the new text exceeds the limit
    if (newText.length > charLimit) {
      alert("You have exceeded the character limit!");
    } else {
      setText(newText); // Update state only if within limit
    }
  };

  const getWarningClass = () => {
    const remaining = charLimit - text.length;
    if (remaining < 0) return "over-limit";
    if (remaining <= 20) return "approaching-limit";
    return "";
  };

  return (
    <div className="app">
      <h1>Real-Time Character Counter</h1>
      <textarea
        className={`text-area ${getWarningClass()}`}
        value={text}
        onChange={handleChange}
        placeholder="Start typing here..."
      />
      <p className={`char-counter ${getWarningClass()}`}>
        {text.length}/{charLimit}
      </p>
    </div>
  );
};

export default TextCounter;
