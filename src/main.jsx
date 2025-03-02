import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../src/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AppProvider } from './components/context/AppProvider.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './components/pages/header-footer/Layout.jsx';
import Dashboard from './components/pages/DashboardPage.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Dashboard />} />
            {/* <Route path='extract' element={<ExtractPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>

  </StrictMode>,
)
