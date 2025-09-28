// src/components/DashboardLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function DashboardLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <section className="main-content">
        <Outlet /> {/* Konten halaman dinamis akan dirender di sini */}
      </section>
    </div>
  );
}

export default DashboardLayout;