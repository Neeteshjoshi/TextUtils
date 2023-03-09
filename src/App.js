import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from "react";

function App() {

  // togglemode is a function to switch between light and dark mode
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#181D31';
      document.title = "TextUtils - Dark Mode"
      showAlert('Dark mode enabled', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = "TextUtils - Light Mode"
      showAlert('Light mode enabled', 'success');
    }
  }

  //showAlert is a function to show alert according to the actions performed.
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  return (
    <>
    {/* Process for routing */}
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-2">
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Text Utils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />} />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
