// src/components/Sidebar.jsx
import React from 'react';
// Anda perlu memindahkan CSS khusus sidebar ke file CSS terpisah
// import './Sidebar.css'; 

function Sidebar() {
  // Di sini kita akan menambahkan fungsi logout nanti
  const handleLogout = () => {
    // Logika logout supabase
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
              <a href="/overview-dashboard"> {/* Ganti ke path */}
                <i className='bx bxs-grid-alt icon'></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-link dropdown">
              <div className="dropdown-toggle">
                <i className='bx bxs-paint-roll icon'></i>
                <span className="text nav-text">CAT</span>
                <i className='bx bxs-chevron-down arrow'></i>
              </div>
              <ul className="submenu">
                <li><a href="/dashboard-cat">Dashboard</a></li>
                <li><a href="/master-cat">Master Cat</a></li>
                <li><a href="/tambah-data">Add Cat</a></li>
                <li><a href="/cat-by-name-dashboard">Laporan Cat</a></li>
                <li><a href="/laporan-cat-detail">Laporan Harian</a></li>
              </ul>
            </li>
            <li class="nav-link dropdown">
                <div class="dropdown-toggle">
                <i class='bx bxs-color-fill icon'></i>
                    <span class="text nav-text">THINNER</span>
                    <i class='bx bxs-chevron-down arrow'></i>
                    </div>
                    <ul class="submenu">
                    <li><a href="/dashboard-thinner">Dashboard</a></li>
                    <li><a href="/master-thinner">Master Thinner</a></li>
                    <li><a href="/tambah-thinner">Add Thinner</a></li>
                    <li><a href="/thinner-by-name-dashboard">Laporan Thinner</a></li>
                    <li><a href="/laporan-thinner-detail">Laporan Harian</a></li>
                    </ul>
                </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li className="logout">
            <a href="#" onClick={handleLogout}> {/* Ganti ke fungsi logout */}
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