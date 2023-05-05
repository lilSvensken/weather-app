import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';
import { Provider } from 'react-redux';
import { store } from 'app/providers/store';
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <Provider store={ store }>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </Provider>
  </BrowserRouter>,
);
