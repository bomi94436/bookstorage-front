import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Layout, OAuth2RedirectHandler } from '@components/.';
import MyStorage from '@components/Storage/MyStorage';
import SearchBookByBarcode from '@components/Storage/SearchBook/SearchBookByBarcode';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/storage">
            <Route path="" element={<MyStorage />} />
            <Route path="search">
              <Route path="by-barcode" element={<SearchBookByBarcode />} />
            </Route>
          </Route>

          <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />

          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
