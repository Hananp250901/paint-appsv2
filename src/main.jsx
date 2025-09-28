// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'

// Impor Halaman dan Layout
import LoginPage from './pages/LoginPage';
import DashboardLayout from './components/DashboardLayout';
import DashboardCatPage from './pages/DashboardCatPage';

// Konfigurasi Rute
const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <DashboardLayout />, // Layout ini punya sidebar
    children: [
      // Halaman-halaman ini akan ditampilkan di dalam <Outlet />
      {
        path: 'dashboard-cat',
        element: <DashboardCatPage />,
      },
      // Anda bisa tambahkan halaman lain di sini, contoh:
      // {
      //   path: 'master-cat',
      //   element: <MasterCatPage />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)