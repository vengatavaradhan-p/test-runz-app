import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPage from "../pages/my-page";
import Runs from "../pages/runs";
import Procedures from "../pages/procedures";
import Projects from "../pages/projects";
import Assets from "../pages/assets";
import Settings from "../pages/settings";
import BillingSubscriptions from "../pages/billing-subscriptions";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../pages/login";
import Login2 from "../pages/login/Login";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={  <ProtectedRoutes><MyPage /></ProtectedRoutes>} />
        <Route path="/login" element={<Login />} />
        <Route path="/login2" element={<Login2 />} />
        <Route
          path="/mypage"
          element={
            <ProtectedRoutes>
              <MyPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/runs"
          element={
            <ProtectedRoutes>
              <Runs />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/procedures"
          element={
            <ProtectedRoutes>
              <Procedures />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoutes>
              <Projects />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/assets"
          element={
            <ProtectedRoutes>
              <Assets />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoutes>
              <Settings />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/billings"
          element={
            <ProtectedRoutes>
              <BillingSubscriptions />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
