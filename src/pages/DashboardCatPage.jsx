// src/pages/DashboardCatPage.jsx
import React from 'react';

function DashboardCatPage() {
  // Nanti kita akan pindahkan semua logika dashboard.js ke sini
  return (
    <> {/* Menggunakan Fragment <>...</> untuk membungkus semuanya */}
      <div className="header-content">
        <h1>Dashboard Dept Painting</h1>
        <div className="filter-wrapper">
          <label htmlFor="monthFilter">Tampilkan Data Bulan:</label>
          <select id="monthFilter"></select>
        </div>
        <a href="/tambah-data" className="action-button">
          <i className='bx bx-plus'></i>
          Tambah Pemakaian Cat
        </a>
      </div>

      <div className="chart-container">
        <div className="chart-header">
          <h4 id="itemChartTitle">Monitoring Pemakaian Cat per Pail</h4>
          <div id="itemChartTotal" style={{ fontWeight: 'bold', fontSize: '1.1em', marginTop: '5px' }}></div>
          <button id="downloadItemChartButton" className="action-button"><i className='bx bx-download'></i>Download Gambar</button>
        </div>
        <div className="chart-wrapper">
          <canvas id="itemUsageChart"></canvas>
        </div>
      </div>

      <div className="chart-container">
        <div className="chart-header">
          <h4 id="dailyChartTitle">Analisis Pemakaian Cat Harian</h4>
          <div id="dailyChartTotal" style={{ fontWeight: 'bold', fontSize: '1.1em', marginTop: '5px' }}></div>
          <button id="downloadDailyChartButton" className="action-button"><i className='bx bx-download'></i>Download Gambar</button>
        </div>
        <div className="chart-wrapper">
          <canvas id="dailyUsageChart"></canvas>
        </div>
      </div>

      <div className="log-container">
        <div className="log-header">
          <h3><i className='bx bx-history'></i> Log Input Terakhir</h3>
          <div className="search-and-actions">
            <button id="downloadCsvButton" className="action-button">
              <i className='bx bx-download'></i>
              Download CSV
            </button>
          </div>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Shift</th>
                <th>Nama Cat</th>
                <th>Qty (Liter)</th>
                <th>Aksi</th>
              </tr>
              <tr>
                <th><input type="text" placeholder="Filter tanggal..." data-filter="tanggal" className="table-filter-input" /></th>
                <th><input type="text" placeholder="Filter shift..." data-filter="shift" className="table-filter-input" /></th>
                <th><input type="text" placeholder="Filter part number..." data-filter="part_number" className="table-filter-input" /></th>
                <th><input type="text" placeholder="Filter nama..." id="logSearchInput" data-filter="nama" className="table-filter-input" /></th>
                <th><input type="text" placeholder="Filter qty..." data-filter="qty" className="table-filter-input" /></th>
                <th></th>
              </tr>
            </thead>
            <tbody id="logTableBody"></tbody>
          </table>
        </div>
        <div className="pagination-controls">
          <button id="togglePaginationButton" className="page-button">Tampilkan Semua</button>
          <button id="prevPageButton" className="page-button" disabled>&laquo; Sebelumnya</button>
          <span id="pageInfo">Halaman 1 dari 1</span>
          <button id="nextPageButton" className="page-button" disabled>Berikutnya &raquo;</button>
        </div>
      </div>

      {/* --- STRUKTUR MODAL YANG BENAR --- */}
      <div id="editModal" className="modal-overlay hidden">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Edit Data Pemakaian Cat</h2>
            <button className="close-button">&times;</button>
          </div>
          <div className="modal-body">
            <form id="editForm">
              <input type="hidden" id="editId" />
              
              <label htmlFor="editTanggal">Tanggal</label>
              <input type="date" id="editTanggal" required />
              
              <label htmlFor="editShift">Shift</label>
              <input type="number" id="editShift" required />

              <label htmlFor="editNamaCat">Nama Cat</label>
              <select id="editNamaCat" required></select>
              
              <label htmlFor="editPartNumber">Part Number</label>
              <input type="text" id="editPartNumber" readOnly />
              
              <label htmlFor="editQty">Qty (Liter)</label>
              <input type="number" id="editQty" required />
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" id="cancelButton" className="btn-cancel">Batal</button>
            <button type="submit" form="editForm" className="btn-save">Simpan Perubahan</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardCatPage;