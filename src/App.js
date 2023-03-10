import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddDriverPage from "./pages/AddDriverPage";
import AddVehiclePage from "./pages/AddVehiclePage";
import DashboardPage from "./pages/DashboardPage";
import EditCustomerPage from "./pages/EditCustomerPage";
import EditDriverPage from "./pages/EditDriverPage";
import EditVehiclePage from "./pages/EditVehiclePage";
import LoginPage from "./pages/LoginPage";
import ManagementPage from "./pages/ManagementPage";
import ManageAdminPage from "./pages/ManageAdminPage";

import ReportsPage from "./pages/ReportsPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import VisualizePage from "./pages/VisualizePage";
import VisAdminPage from "./pages/VisAdminPage";
import EditTripPage from "./pages/EditTripPage";

function App() {
  const token = useSelector((state) => state.auth.token);
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={token ? <DashboardPage /> : <LoginPage />} /> */}
        <Route path="/" element={token ? <ManagementPage /> : <LoginPage />} />

        <Route path="/visualize" element={<VisualizePage />} />
        <Route path="/visualize-admin" element={<VisAdminPage />} />
        <Route path="/manage" element={<ManagementPage />} />
        <Route exact path="/manage/driver/:id" element={<EditDriverPage />} />
        <Route path="/manage/vehicle/:id" element={<EditVehiclePage />} />
        <Route path="/manage/trip/:id" element={<EditTripPage />} />
        <Route path="/manage-admin" element={<ManageAdminPage />} />
        <Route
          path="/manage-admin/customer/:id"
          element={<EditCustomerPage />}
        />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
