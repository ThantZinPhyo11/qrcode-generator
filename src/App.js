import './App.css';
import QRCode from "react-qr-code";
import { useState } from 'react'

function App() {

  const [value,setValue ] = useState('');
  const [ qrVisible,setQrVisible] = useState(false);

  const generateQrCodeHandler = () => {
  if (!value) {
    return;
  }
  setQrVisible(true);
  };
  return (
    <div className="container">
      <h2>QR Code Generator</h2>
      <input type='text' placeholder='Type a URL...' value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={generateQrCodeHandler}>Generate QR</button>

      {qrVisible && (
        <div className='qr-code-container'>
          <QRCode value={value} size={300} />
        </div>
      )}
      <div>
        <p className="copyright">Made With ❤️ By Thant Zin Phyo</p>
      </div>
    </div>
  );
}

export default App;
