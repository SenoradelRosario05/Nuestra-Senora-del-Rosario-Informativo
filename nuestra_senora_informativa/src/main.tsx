import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import NavbarProvider from '../src/Context/NavbarProvider';
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NavbarProvider>
      <App />
      </NavbarProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
