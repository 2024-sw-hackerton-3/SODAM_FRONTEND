import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import SingUp from "./pages/signup";
import Login from "./pages/login";
import Allergy from "./pages/allergy";
import Camera from "./components/camera";
import CameraResult from "./components/cameraResult";
import Like from "./components/like";
import Loading from "./components/loading";
import Search from "./components/search";
import { RecoilRoot } from "recoil";
import RecipeScreen from "./components/recipe";
import 'swiper/css';
import 'swiper/css/pagination';
import SearchResultScreen from "./components/searchResult";

function setScreenSize() {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setScreenSize();

function App() {
  return (
    <RecoilRoot>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SingUp />} />
          <Route path="/allergy" element={<Allergy />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/cameraResult" element={<CameraResult />} />
          <Route path="/like" element={<Like />} />
          <Route path="/search" element={<Search />} />
          <Route path="/searchResult" element={<SearchResultScreen />} />
          <Route path="/recipe" element={<RecipeScreen/>} />
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
