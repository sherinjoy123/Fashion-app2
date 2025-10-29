import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './context/shopContext.jsx'; // Capitalize here

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ShopContextProvider> {/* Capitalized component name */}
        <App />
      </ShopContextProvider>
    </BrowserRouter>
  </StrictMode>
);
