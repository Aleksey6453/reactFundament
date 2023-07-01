import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Quicksand:wght@300;500;700&display=swap');
</style> 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <App />
  </BrowserRouter>
);


