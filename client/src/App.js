import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import "./index.css";
export default function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
          <Route path="/" element={ <Home />} />
        </Routes>
      </BrowserRouter>
  );
}
