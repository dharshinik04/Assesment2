import { Browsing, Login } from "./screens";
import "./App.css";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/products/*" element={<Browsing />} />
    </Routes>
  );
}
