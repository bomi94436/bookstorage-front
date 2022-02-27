import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  Home,
  Layout,
  Login,
  Storage,
  OAuth2RedirectHandler,
  SearchBookByBarcode,
  SearchBookByQuery,
  Signup,
} from '@components'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/storage">
            <Route index element={<Storage />} />
            <Route path="search">
              <Route path="by-barcode" element={<SearchBookByBarcode />} />
              <Route path="by-query" element={<SearchBookByQuery />} />
            </Route>
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

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
  )
}

export default App
