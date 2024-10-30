import React from 'react';
import logo from './logo.svg';
import './App.css';
import CameraPage from './components/camera';
import CameraResultScreen from './components/cameraResult';
import RecipeScreen from './components/recipe';
import LoadingScreen from './components/loading';
import SearchScreen from './components/search';

function setScreenSize() {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setScreenSize();

function App() {
  return (
    <div className="App">
      <SearchScreen/>
    </div>
  );
}

export default App;
