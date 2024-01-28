// Popup.js
import React, { useEffect, useRef, useState } from 'react';
import '../styling/Popup.css'; // Import the CSS file for the popup styles
import {getOpenAIResponse} from "./Ai";

const Popup = ({ title, onClose }) => {
  // AI
  const [popupContent, setPopupContent] = useState('');

  useEffect(() => {
    // Define your prompt or use a dynamic one based on your requirements
    const prompt = `Provide money-saving suggestions for ${title}`;

    // Fetch content from OpenAI API when the component mounts
    const fetchData = async () => {
      const response = await getOpenAIResponse(prompt);
      setPopupContent(response || 'Failed to generate personalized suggestions.');
    };

    fetchData();
  }, [title]); // Run the effect whenever the title changes


  return (
    <div className="popup-container">
      <div className="popup">
        <div className="popup-header">
          <h3><span className="accent">{title}</span></h3>
          <div className="tab"></div> {/*tab between title and close button */}
          <button className="close-button" onClick={onClose}>
            <span className="material-symbols-outlined">cancel</span>
          </button>
        </div>
        <hr></hr>
        <p>Tips:</p>
        {/* where the AI response will show up */}
        <p>{popupContent}</p>
      </div>
    </div>
  );
};

export default Popup;
