import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/App.css';
import Main from '@components/Main';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { SearchProvider } from '@/SearchContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SearchProvider>
      <Header />
      <Main />
      <Footer />
    </SearchProvider>
  </React.StrictMode>
);
