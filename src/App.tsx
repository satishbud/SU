import "./App.css";
import NavBar from "./components/NavBar";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Offers from "./pages/Offers";

function App() {
  return (
    <>
      <NavBar />
      <main className="hero-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
