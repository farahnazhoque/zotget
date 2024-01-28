// Popup.js
import React from 'react';
import '../styling/Popup.css'; // Import the CSS file for the popup styles

const Popup = ({ title, onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <button className="close-button" onClick={onClose}>X</button>
        <h3>{title}</h3>
        <p>
            Hello
        </p>
      </div>
    </div>
  );
};

export default Popup;
