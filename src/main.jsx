import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../src/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Layout from './components/pages/header-footer/Layout';
import DashboardPage from './components/pages/DashboardPage';
import LoginPage from './components/pages/LoginPage';
import InputPage from './components/pages/InputPage';
import InputZakat from './components/input/InputZakat';
import InputFidyah from './components/input/InputFidyah';
import InputSodakoh from './components/input/InputSodakoh';
import { AppProvider } from './components/context/AppProvider';
import { BrowserRouter, Route, Routes } from 'react-router';
import ListPage from './components/pages/ListPage';
import ListZakat from './components/ListZakat';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<DashboardPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='input' element={<InputPage />} >
              <Route index element={<InputZakat />} />
              <Route path='zakat' element={<InputZakat />} />
              <Route path='fidyah' element={<InputFidyah />} />
              <Route path='sodakoh' element={<InputSodakoh />} />
            </Route>
            <Route path='list' element={<ListPage />}>
              <Route index element={<ListZakat />} />
              <Route path='zakat' element={<ListZakat />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>

  </StrictMode>,
)
