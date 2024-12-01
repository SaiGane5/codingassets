import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
// import BlogContent from "./components/Blog/BlogContents"
import "./index.css";
export default function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/blog" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={ <Home />} />
      </Routes>
      </BrowserRouter>
  );
}
