import React, { useState } from "react";
import "./App.css";
import Login from "./pages/login";
import { Route, Routes, useLocation } from "react-router-dom";
import Register from "./pages/register";
import Home from "./pages/home";
import Header from "./components/common/header";
import CarDetailsPage from "./pages/car-details";
import MyCars from "./pages/my_cars";
import DeleteCar from "./pages/deleteCar";
import PostCar from "./pages/post-car";
import ProtectedRoute from "./components/hoc/protected-route";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );

  const location = useLocation();

  const headerless = ["/login", "/register"];

  return (
    <div className="App">
      <ToastContainer/>
      {!headerless.includes(location.pathname) && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute accessToken={accessToken}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/car/details/:id"
          element={
            <ProtectedRoute accessToken={accessToken}>
              <CarDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my_cars"
          element={
            <ProtectedRoute accessToken={accessToken}>
              <MyCars />
            </ProtectedRoute>
          }
        />
        <Route
          path="/delete_car/:id"
          element={
            <ProtectedRoute accessToken={accessToken}>
              <DeleteCar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/post_car"
          element={
            <ProtectedRoute accessToken={accessToken}>
              <PostCar />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
