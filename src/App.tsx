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

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/allergy" element={<Allergy />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/cameraResult" element={<CameraResult />} />
        <Route path="like" element={<Like />} />
        <Route path="Lading" element={<Loading />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
