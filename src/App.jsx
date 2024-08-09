import "./App.css";
import Home from "./pages/Home/Home";
import { Outlet, Route, Routes } from "react-router-dom";
import About from "./pages/Home/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
