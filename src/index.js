import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Loading from './Loading/Loading';
import { ThemeProvider } from './ThemeContext';
import i18n from "../src/i18n/i18n"
import { I18nextProvider } from 'react-i18next';


const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <React.StrictMode>
       <I18nextProvider i18n={i18n}>
       <ThemeProvider>

      <App />
       </ThemeProvider>
  </I18nextProvider>

    </React.StrictMode>
  );
};
ReactDOM.createRoot(document.getElementById('root')).render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
