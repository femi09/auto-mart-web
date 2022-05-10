import React from "react";
import "./App.css";
import Login from "./pages/login";
import { Route, Routes, Navigate } from "react-router-dom";
import Register from "./pages/register";
import Home from "./pages/home";
import Header from "./components/common/header";
import CarDetailsPage from "./pages/car-details";
import MyCars from "./pages/my_cars";

function App() {
  const accessToken = localStorage.getItem("accessToken");
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={!accessToken ? <Navigate replace to="/login" /> : <Home />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/car/details/:id" element={<CarDetailsPage />} />
        <Route path="/my_cars" element={<MyCars />} />
      </Routes>
    </div>
  );
}

export default App;
