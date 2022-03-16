import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AccountProvider } from './hooks/useAccount';
import { ThemeProvider } from './hooks/useTheme';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AccountProvider>
        <App />
      </AccountProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);