import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login_Page";
import Register from "./pages/Register_Page";
import ResetPassword from "./pages/ResetPassword_Page";
import LiveMap from "./pages/LiveMap_Page";
import Kendaraan from "./pages/Kendaraan_Page";
import KendaraanDetail from "./pages/KendaraanDetail_Page";
import KendaraanEdit from "./pages/KendaraanEdit_Page";
import Tagihan from "./pages/Tagihan_Page";
import Services from "./pages/Services_Page";
import Cart from "./pages/Cart_Page";
import Payment from "./pages/Payment_Page";
import Settings from "./pages/Settings_Page";

const WithSidebar = ({ children }) => (
  <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 ml-16 overflow-y-auto bg-gray-100">{children}</div>
  </div>
);

const WithoutSidebar = ({ children }) => (
  <div className="flex h-screen justify-center items-center bg-gray-100">
    {children}
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes without Sidebar */}
        <Route path="/Login" element={<WithoutSidebar><Login /></WithoutSidebar>} />
        <Route path="/Register" element={<WithoutSidebar><Register /></WithoutSidebar>} />
        <Route path="/Reset-Password" element={<WithoutSidebar><ResetPassword /></WithoutSidebar>} />

        {/* Routes with Sidebar */}
        <Route path="/Live-Map" element={<WithSidebar><LiveMap /></WithSidebar>} />
        <Route path="/Kendaraan" element={<WithSidebar><Kendaraan /></WithSidebar>} />
        <Route path="/Kendaraan/:id" element={<WithSidebar><KendaraanDetail /></WithSidebar>} />
        <Route path="/Kendaraan/:id/edit" element={<WithSidebar><KendaraanEdit /></WithSidebar>} />
        <Route path="/Tagihan" element={<WithSidebar><Tagihan /></WithSidebar>} />
        <Route path="/Services" element={<WithSidebar><Services /></WithSidebar>} />
        <Route path="/Cart" element={<WithSidebar><Cart /></WithSidebar>} />
        <Route path="/Payment" element={<WithSidebar><Payment /></WithSidebar>} />
        <Route path="/Settings" element={<WithSidebar><Settings /></WithSidebar>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
