import Layout from '@components/Layout';
import OAuth2RedirectHandler from '@components/OAuth2RedirectHandler';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home/index';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
