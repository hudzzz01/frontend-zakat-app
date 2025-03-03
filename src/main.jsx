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
import LoginPage from './components/pages/LoginPage.jsx';
import InputPage from './components/pages/InputPage.jsx';
import InputZakat from './components/context/input/InputZakat.jsx';
import InputFidyah from './components/context/input/InputFidyah.jsx';
import InputSodakoh from './components/context/input/InputSodakoh.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Dashboard />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='input' element={<InputPage />} >
              <Route index element={<InputZakat/>}/>
              <Route path='zakat' element={<InputZakat/>}/>
              <Route path='fidyah' element={<InputFidyah/>}/>
              <Route path='sodakoh' element={<InputSodakoh/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>

  </StrictMode>,
)
