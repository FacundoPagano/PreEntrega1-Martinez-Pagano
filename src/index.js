import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './components/context/cartContext';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAem-4zhg7cG6UYxtcKCl5SwPjncDiffRk",
  authDomain: "coderhouse---ecommerce.firebaseapp.com",
  projectId: "coderhouse---ecommerce",
  storageBucket: "coderhouse---ecommerce.appspot.com",
  messagingSenderId: "449416893452",
  appId: "1:449416893452:web:9d88cdffb879eda88dca29"
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
      <CartContextProvider>
      <App />
      </CartContextProvider>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
