import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import LiveMap from "./pages/LiveMap";
import Kendaraan from "./pages/Kendaraan";
import KendaraanDetail from "./pages/KendaraanDetail";
import KendaraanEdit from "./pages/KendaraanEdit";
import Tagihan from "./pages/Tagihan";
import Prices from "./pages/Prices";
import Rute from "./pages/Rute";
import Event from "./pages/Event";
import Trip from "./pages/Trip";
import Replay from "./pages/Replay";
import Settings from "./pages/Settings";

const WithSidebar = ({ children }) => (
  <div className="flex min-h-screen">
    <Sidebar />
    <div className="flex-1">{children}</div>
  </div>
);

const WithoutSidebar = ({ children }) => <div className="flex">{children}</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authenticate Pages */}
        <Route
          path="/Login"
          element={
            <WithoutSidebar>
              <Login />
            </WithoutSidebar>
          }
        />
        <Route
          path="/Register"
          element={
            <WithoutSidebar>
              <Register />
            </WithoutSidebar>
          }
        />
        <Route
          path="/Reset-Password"
          element={
            <WithoutSidebar>
              <ResetPassword />
            </WithoutSidebar>
          }
        />

        {/* user Pages */}
        <Route
          path="/live-map"
          element={
            <WithSidebar>
              <LiveMap />
            </WithSidebar>
          }
        />
        <Route
          path="/kendaraan"
          element={
            <WithSidebar>
              <Kendaraan />
            </WithSidebar>
          }
        />
        <Route
          path="/kendaraan/:id"
          element={
            <WithSidebar>
              <KendaraanDetail />
            </WithSidebar>
          }
        />
        <Route
          path="/kendaraan/:id/edit"
          element={
            <WithSidebar>
              <KendaraanEdit />
            </WithSidebar>
          }
        />
        <Route
          path="/tagihan"
          element={
            <WithSidebar>
              <Tagihan />
            </WithSidebar>
          }
        />
        <Route
          path="/prices"
          element={
            <WithSidebar>
              <Prices />
            </WithSidebar>
          }
        />
        <Route
          path="/rute"
          element={
            <WithSidebar>
              <Rute />
            </WithSidebar>
          }
        />
        <Route
          path="/event"
          element={
            <WithSidebar>
              <Event />
            </WithSidebar>
          }
        />
        <Route
          path="/trip"
          element={
            <WithSidebar>
              <Trip />
            </WithSidebar>
          }
        />
        <Route
          path="/replay"
          element={
            <WithSidebar>
              <Replay />
            </WithSidebar>
          }
        />
        <Route
          path="/settings"
          element={
            <WithSidebar>
              <Settings />
            </WithSidebar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
