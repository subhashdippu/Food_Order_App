import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import router from './router/Router';
import { RouterProvider } from 'react-router-dom'
import AuthProvider from "./context/AuthProvider"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);


reportWebVitals();
