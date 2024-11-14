import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login_Page";
import Register from "./components/Register_Page";
import ResetPassword from "./components/ResetPassword_Page";
import LiveMap from "./components/LiveMap_Page";
import Kendaraan from "./components/Kendaraan_Page";
import Tagihan from "./components/Tagihan_Page";
import Pricing from "./components/Pricing_Page";

// Wrapper component to render the sidebar with the main content
const WithSidebar = ({ children }) => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1">{children}</div>
  </div>
);

// Wrapper component to render only the main content (without the sidebar)
const WithoutSidebar = ({ children }) => (
  <div className="flex-1">{children}</div>
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
        <Route path="/Tagihan" element={<WithSidebar><Tagihan /></WithSidebar>} />
        <Route path="/Pricing" element={<WithSidebar><Pricing /></WithSidebar>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
