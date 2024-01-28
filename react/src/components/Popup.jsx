// Popup.js
import React from 'react';
import '../styling/Popup.css'; // Import the CSS file for the popup styles

const Popup = ({ title, onClose }) => {
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
        <p>Hello</p>
      </div>
    </div>
  );
};

export default Popup;
