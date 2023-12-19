import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import LandingPage from "./pages/LandingPage";
import SobreNos from "./pages/SobreNos";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home/";
import Login from "./pages/Login";
import Senha from "./pages/Senha";
import Hoje from "./pages/Hoje";
//import Compras from './pages/Compras'
import Perfil from "./pages/Perfil";
import PageNotFound from "./pages/PageNotFound";

function MyRoutes() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/senha" element={<Senha />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hoje" element={<Hoje />} />
          {/*<Route path='/compras' element={<Compras/>} />*/}
          <Route path="/perfil" element={<Perfil />} />
          <Route path="*" element={<PageNotFound />} />
          
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default MyRoutes;
