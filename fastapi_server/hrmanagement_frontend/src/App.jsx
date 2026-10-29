import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import HrHome from "./pages/HrHome.jsx";
import EmpHome from "./pages/EmpHome.jsx";
import AdminHome from "./pages/AdminHome.jsx";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hrhome" element={<HrHome />} />
        <Route path="/emphome" element={<EmpHome />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;