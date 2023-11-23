import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardPage, HomePage } from "../components/Header";
import { ActiveUsersList } from "../pages/ActiveUsersList";

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
