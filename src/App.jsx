import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Login from "./pages/Login_Page";
import Register from "./pages/Register_Page";
import ResetPassword from "./pages/ResetPassword_Page";
import LiveMap from "./pages/LiveMap_Page";
import Kendaraan from "./pages/Kendaraan_Page";
import Tagihan from "./pages/Tagihan_Page";
import Pricing from "./pages/Pricing_Page";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            {/* Authentication Pages */}
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Reset-Password" element={<ResetPassword />} />

            {/* User Pages */}
            <Route path="/Live-Map" element={<LiveMap />} />
            <Route path="/Kendaraan" element={<Kendaraan />} />
            <Route path="/Tagihan" element={<Tagihan />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
