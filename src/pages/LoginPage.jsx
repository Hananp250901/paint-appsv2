// src/App.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase'; // Impor client supabase

function LoginPage() {
  const navigate = useNavigate();
  // State untuk menyimpan nilai input email dan password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State untuk menampilkan pesan error
  const [errorMessage, setErrorMessage] = useState('');
  
  // State untuk menampilkan modal sukses
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Cek sesi pengguna saat komponen pertama kali dimuat
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate('/dashboard-cat');
      }
    });
  }, []);


  // Fungsi yang dijalankan saat form di-submit
  const handleLogin = async (e) => {
    e.preventDefault(); // Mencegah form me-refresh halaman

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        // Jika ada error dari Supabase, tampilkan pesannya
        throw error;
      }

      console.log('Login berhasil:', data);
      // Jika berhasil, tampilkan modal sukses
      setShowSuccessModal(true);

      // Arahkan ke dashboard setelah 2 detik
      setTimeout(() => {
        navigate('/dashboard-cat');
      }, 2000);

    } catch (error) {
      // Tangkap error dan tampilkan di UI
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <div className="login-container">
        <h1>Login</h1>
        {/* Hubungkan form dengan fungsi handleLogin */}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            {/* Hubungkan input dengan state 'email' */}
            <input 
              type="email" 
              id="email" 
              placeholder="Masukkan email Anda" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            {/* Hubungkan input dengan state 'password' */}
            <input 
              type="password" 
              id="password" 
              placeholder="Masukkan password Anda" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
          {/* Tampilkan pesan error jika ada */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>

      {/* Tampilkan modal jika showSuccessModal bernilai true */}
      <div id="successModal" className={`modal-animated ${showSuccessModal ? 'show' : ''}`}>
        <div className="modal-animated-content">
          <div className="success-icon-wrapper">
            <svg className="success-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="success-icon__circle" cx="26" cy="26" r="25" fill="none" />
              <path className="success-icon__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>
          <h4>Login Berhasil!</h4>
          <p>Anda akan diarahkan...</p>
        </div>
      </div>
    </>
  )
}

export default LoginPage