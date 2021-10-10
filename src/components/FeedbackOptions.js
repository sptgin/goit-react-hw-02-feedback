import React from 'react';
import './FeedbackOptions.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="Feedback__controls">
      {options.map(name => (
        <button
          type="button"
          name={name}
          onClick={onLeaveFeedback}
          className="Feedback__button"
        >
          {name}
        </button>
      ))}
    </div>
  );
}
export default FeedbackOptions;
