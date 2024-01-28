// Popup.jsx
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import '../styling/Popup.css';
import { getOpenAIResponse } from './Ai';

const Popup = ({ title, onClose }) => {
  const [gptRes, setGptRes] = useState('Loading...');

  useEffect(() => {
    const fetchGptRes = async () => {
      try {
        const response = await getOpenAIResponse(
          'This product is taking a lot from my budget, the product is ',
          title,
          'Tell me some alternative ideas that I can purchase or do to save money. Keep the answer in bullet points and also add emojis to reflect the product you are giving alternatives as.'
        );
        setGptRes(response);
      } catch (error) {
        console.error('Error getting OpenAI response:', error);
        setGptRes('Failed to load suggestions.');
      }
    };

    fetchGptRes();
  }, [title]);

  return (
    <div className="popup-container">
      <div className="popup">
        <div className="popup-header">
          <h3><span className="accent">{title}</span></h3>
          <button className="close-button" onClick={onClose}>
            <span className="material-symbols-outlined">cancel</span>
          </button>
        </div>
        <hr />
        {/* Apply the right-aligned class to the Markdown content */}
        <div className="markdown-content">
          <ReactMarkdown>{gptRes}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Popup;
