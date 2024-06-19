import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import NotFound from "./pages/notFound/notFound";
import Register from "./pages/register/register";
import Perfil from "./pages/perfil/perfil";
import Espacios_Academicos from "./pages/espacios_academicos/espacios_academicos";
import Navbar from "./components/navbar/navbar";
import CheckAuth from "./components/CheckAuth";

function AppWrapper() {
  const [isLogged, setIsLogged] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [isLogged]);

  return (
    <>
      <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
      <Routes>
        <Route element={<CheckAuth isLogged={isLogged} />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/espacios_academicos" element={<Espacios_Academicos />} />
          <Route path="/perfil" element={<Perfil />} />
        </Route>
        <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
        <Route path="/register" element={<Register setIsLogged={setIsLogged} />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
export default App;
