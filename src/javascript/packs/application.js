import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App'; // or the path to your main React component

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
});
