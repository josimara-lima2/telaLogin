import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./components/Cadastro";
import Home from "./components/Home";
import User from "./components/User";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/home" element={<User />} />
        <Route path="/cadastro" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
