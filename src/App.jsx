import { useState, useEffect } from 'react'
import './App.css'
import myimg from './assets/work.jpg'
import { QRCodeCanvas } from "qrcode.react";
import { FaTelegramPlane, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


function App() {
  const [open, setopen] = useState(false);

  return (
    <main>
      <div className="container">
        <div className='img-frame'>
          <img src={myimg} width={150} alt="profile" />
        </div>

        <a href="https://iridescent-crumble-341d2b.netlify.app/" className='project-btn' target='_blank' rel="noopener noreferrer">Landing</a>
        <a href="#" className='project-btn'>Online store</a>
        <a href="#" className='project-btn'>API</a>
        <a href="#" className='project-btn'>Landing</a>
        <a href="#" className='project-btn'>Landing</a>

        <button onClick={() => setopen(true)} className='share-btn'>
          Share
        </button>

        {open && <Modal setopen={setopen} />}
      </div>
    </main>
  );
}

export default App;


function Modal({ setopen }) {
  const siteUrl = window.location.href;

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

w
  return (
    <div className="overlay" onClick={() => setopen(false)}>
      <div
        className="Modal-body"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={() => setopen(false)}
        >
          ❌
        </button>

        <div className="Modal-container">
          <h2>Share this site</h2>

          <div className="qr-box">
            <QRCodeCanvas
              value={siteUrl}
              size={160}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
            />
          </div>

          <div className="contact-icons">
            <a
              href="https://t.me/Topilboyev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <FaTelegramPlane />
            </a>

            <a href="tel:+998942049107" aria-label="Phone">
              <FaPhoneAlt />
            </a>

            <a
              href="mailto:azizbektopilboyev7@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
