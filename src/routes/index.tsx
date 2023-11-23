import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ActiveUsersList } from "../pages/ActiveUsersList";
import HomePage from "@/pages/Homepage";
import DashboardPage from "@/pages/Dashboard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={ActiveUsersList} />
        <Route path="/home" Component={HomePage} />
        <Route path="/dashboard" Component={DashboardPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
