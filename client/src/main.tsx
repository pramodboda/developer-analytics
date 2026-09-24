import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app/App.tsx'

import ReactDOM from "react-dom/client";
import { AppRouter } from "./app/router/AppRouter";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter>
    <App />
    </AppRouter>
  </StrictMode>,
)
