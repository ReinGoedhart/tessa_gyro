import Contact from "./pages/contact";
import Home from "./pages/home";
import Calender from "./pages/calender";
import Galery from "./pages/galery";
import { Navbar } from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";

export function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/galery" element={<Galery />} />
        </Routes>
      </div>
    </>
  );
}
