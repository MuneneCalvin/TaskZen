import React from 'react'
import ReactDOM from 'react-dom/client';
import { ContextProvider } from './context/userContext/Context.jsx';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
)
