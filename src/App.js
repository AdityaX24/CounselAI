import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Nav/Nav";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

const PageNotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <h2>404 | Page Not Found</h2>{" "}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<PageNotFound />} replace />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
