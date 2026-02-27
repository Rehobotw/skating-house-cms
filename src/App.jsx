import { Routes, Route, Navigate } from "react-router-dom";
import Hero from "./pages/Hero";
import Session from "./pages/Session";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Footer from "./pages/Footer";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/hero" element={<Hero/>}/>
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/session" element={<Session/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
    </Routes>
  );
}
