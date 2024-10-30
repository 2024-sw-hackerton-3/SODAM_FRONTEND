import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import SingUp from "./pages/singup";
import Login from "./pages/login";
import Allergy from "./pages/allergy";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="allergy" element={<Allergy />} />
      </Routes>
    </div>
  );
}

export default App;
