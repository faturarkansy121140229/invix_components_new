import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login_Page";
import Register from "./components/Register_Page";
import ResetPassword from "./components/ResetPassword_Page";
import LiveMap from "./components/LiveMap_Page";
import Kendaraan from "./components/Kendaraan_Page";
import Tagihan from "./components/Tagihan_Page";
import Pricing from "./components/Pricing_Page";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Reset-Password" element={<ResetPassword />} />
            <Route path="/Live-Map" element={<LiveMap />} />
            <Route path="/Kendaraan" element={<Kendaraan />} />
            <Route path="/Tagihan" element={<Tagihan />} />
            <Route path="/Pricing" element={<Pricing />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
