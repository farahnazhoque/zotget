import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styling/main.css'

//Google Fonts link
const googleFontsLink = document.createElement('link');
googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0';
googleFontsLink.rel = 'stylesheet';
document.head.appendChild(googleFontsLink);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
