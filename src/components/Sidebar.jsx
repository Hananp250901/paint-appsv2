// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // 👈 1. Impor komponen Link
import './Sidebar.css'; // 👈 2. Impor file CSS untuk sidebar

function Sidebar() {
  const handleLogout = () => {
    // Nanti kita akan isi dengan logika logout Supabase
    console.log("Logout clicked");
  };

  return (
    <nav className="sidebar">
      <header>
        <div className="profile-container">
          <img id="profileImage" alt="Profile" />
          <h4 className="name" id="profileName">Nama Pengguna</h4>
          <p className="email" id="profileEmail">email@pengguna.com</p>
          <label htmlFor="avatarInput" className="upload-btn">Ganti Foto</label>
          <input type="file" id="avatarInput" accept="image/png, image/jpeg" hidden />
        </div>
      </header>

      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li className="nav-link">
              {/* 👇 3. Ganti <a> dengan <Link> */}
              <Link to="/overview-dashboard">
                <i className='bx bxs-grid-alt icon'></i>
                <span className="text nav-text">Dashboard</span>
              </Link>
            </li>
            <li className="nav-link dropdown">
              <div className="dropdown-toggle">
                <i className='bx bxs-paint-roll icon'></i>
                <span className="text nav-text">CAT</span>
                <i className='bx bxs-chevron-down arrow'></i>
              </div>
              <ul className="submenu">
                <li><Link to="/dashboard-cat">Dashboard</Link></li>
                <li><Link to="/master-cat">Master Cat</Link></li>
                <li><Link to="/tambah-data">Add Cat</Link></li>
                <li><Link to="/cat-by-name-dashboard">Laporan Cat</Link></li>
                <li><Link to="/laporan-cat-detail">Laporan Harian</Link></li>
              </ul>
            </li>
            {/* 👇 4. Perbaiki class menjadi className */}
            <li className="nav-link dropdown">
              <div className="dropdown-toggle">
                <i className='bx bxs-color-fill icon'></i>
                <span className="text nav-text">THINNER</span>
                <i className='bx bxs-chevron-down arrow'></i>
              </div>
              <ul className="submenu">
                <li><Link to="/dashboard-thinner">Dashboard</Link></li>
                <li><Link to="/master-thinner">Master Thinner</Link></li>
                <li><Link to="/tambah-thinner">Add Thinner</Link></li>
                <li><Link to="/thinner-by-name-dashboard">Laporan Thinner</Link></li>
                <li><Link to="/laporan-thinner-detail">Laporan Harian</Link></li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li className="logout">
            <a href="#" onClick={handleLogout}>
              <i className='bx bx-log-out icon'></i>
              <span className="text nav-text">Logout</span>
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;