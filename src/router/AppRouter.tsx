import React from "react";
import { Route, Routes } from "react-router-dom";

import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { CookingHealthyRoutes } from "./CookingHealthyRoutes";
import { Login } from "../auth";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        path="login/*"
        element={
          <PublicRoutes>
            <Routes>
              <Route path="/*" element={<Login />} />
            </Routes>
          </PublicRoutes>
        }
      />
      <Route
        path="/*"
        element={
          <PrivateRoutes>
            <CookingHealthyRoutes />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};
