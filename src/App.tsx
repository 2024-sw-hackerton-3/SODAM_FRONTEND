import React from 'react';
import logo from './logo.svg';
import './App.css';
import CameraPage from './components/camera';

function setScreenSize() {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setScreenSize();

function App() {
  return (
    <div className="App">
      <CameraPage/>
    </div>
  );
}

export default App;
