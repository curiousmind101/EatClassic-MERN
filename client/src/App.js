import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./components/Home";
import Cart from "./pages/Cart";
import Help from "./pages/Help";
import Invite from "./pages/Invite";
import Best from "./pages/Best";
import Orders from "./pages/Orders.jsx";
import Favorites from "./pages/Favorites.jsx";
import Promotions from "./pages/Promotions";
import Wallet from "./pages/Wallet";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

function App() {
  return (
    <div>
      <Navbar className="z-50" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/bestones" element={<Best />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/help" element={<Help />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/help" element={<Help />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </div>
  );
}

export default App;
