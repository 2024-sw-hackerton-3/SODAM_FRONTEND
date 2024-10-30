import React from 'react';
import logo from './logo.svg';
import './App.css';
import CameraPage from './components/camera';
import CameraResultScreen from './components/cameraResult';
import RecipeScreen from './components/recipe';
import LoadingScreen from './components/loading';
import SearchScreen from './components/search';
import SearchResultScreen from './components/searchResult';
import 'swiper/css';
import 'swiper/css/pagination';
import RecipePager from './components/recipe/recipePager';
import LikeScreen from './components/like';


function setScreenSize() {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setScreenSize();

function App() {
  return (
    <div className="App">
      <LikeScreen></LikeScreen>
    </div>
  );
}

export default App;
