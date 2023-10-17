import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Nav/Nav";
import Login from "./pages/Login";
import Home from "./pages/Home";

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
    <Menu/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />



      <Route path="*" element={<PageNotFound />} replace />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
