import React from 'react';
import logo from './logo.svg';
import './App.css';
import CameraPage from './components/camera';
import CameraResultScreen from './components/cameraResult';

function setScreenSize() {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setScreenSize();

function App() {
  return (
    <div className="App">
      <CameraResultScreen/>
    </div>
  );
}

export default App;
