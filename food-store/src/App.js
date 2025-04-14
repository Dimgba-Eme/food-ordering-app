import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route />
          <Route /> */}
        </Routes>

      </div>
      <Footer />
    </>
  );
}

export default App;
