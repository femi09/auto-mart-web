import React from "react";
import "./App.css";
import Login from "./pages/login";
import { Route, Routes, Navigate } from "react-router-dom";
import Register from "./pages/register";
import Home from "./pages/home";
import Header from "./components/common/header";

function App() {
  const accessToken = localStorage.getItem("accessToken");
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={!accessToken ? <Navigate replace to="/login" /> : <Home />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;