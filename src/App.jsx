import { useState } from 'react'
import './App.css'
import myimg from './assets/work.jpg'
function App() {
  const [open,setopen]=useState(false)
  return (
    <main>
    <div className="container">
      <div className='img-frame'>
        <img src={myimg}  width={150}  />
      </div>
      <a href="https://iridescent-crumble-341d2b.netlify.app/" className='project-btn' target='_blank'>Landing</a>
      <a href="#" className='project-btn' target='_blank'>Online store</a>
      <a href="#" className='project-btn' target='_blank'>API</a>
      <a href="#" className='project-btn' target='_blank'>Landing</a>
      <a href="#" className='project-btn' target='_blank'>Landing</a>




      <button onClick={()=>(setopen(true))} className='share-btn'>Share</button>
      {open?<Modal setopen={setopen}/>:null}
    </div>
    </main>
  )
}





export default App
import { QRCodeCanvas } from "qrcode.react";
import { FaTelegramPlane, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Modal({ setopen }) {
  const siteUrl = window.location.href; 

  return (
    <div className="overlay" onClick={() => setopen(false)}>
      <div className="Modal-body" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close-btn" onClick={() => setopen(false)}>
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
            >
              <FaTelegramPlane />
            </a>

            <a href="tel:+998942049107">
              <FaPhoneAlt />
            </a>

            <a href="mailto:azizbektopilboyev7@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
