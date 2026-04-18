import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Wiki from "./pages/Wiki";
import Trigger from "./pages/Trigger";
import Community from "./pages/Community";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wiki" element={<Wiki />} />
          <Route path="/trigger" element={<Trigger />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
