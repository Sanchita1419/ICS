import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddDriverPage from "./pages/AddDriverPage";
import AddVehiclePage from "./pages/AddVehiclePage";
import DashboardPage from "./pages/DashboardPage";
import EditDriverPage from "./pages/EditDriverPage";
import EditVehiclePage from "./pages/EditVehiclePage";
import LoginPage from "./pages/LoginPage";
import ManagementPage from "./pages/ManagementPage";
import ReportsPage from "./pages/ReportsPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import VisualizePage from "./pages/VisualizePage";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <DashboardPage /> : <LoginPage />}
        />
        <Route path="/visualize" element={<VisualizePage />} />
        <Route path="/manage" element={<ManagementPage />} />
        <Route path="/manage/driver" element={<AddDriverPage />} />
        <Route exact path="/manage/driver/:id" element={<EditDriverPage />} />
        <Route path="/manage/vehicle" element={<AddVehiclePage />} />
        <Route path="/manage/vehicle/:id" element={<EditVehiclePage />} />

        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
