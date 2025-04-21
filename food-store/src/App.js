import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPopup from "./components/LoginPopup";
import { useState } from "react";


function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin= {setShowLogin} /> : <></>}
      <Header setShowLogin={setShowLogin} />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>

      </div>
      <Footer />
    </>
  );
}

export default App;
