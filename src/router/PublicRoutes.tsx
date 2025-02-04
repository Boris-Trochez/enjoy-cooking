import React from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { ROUTES } from "./Routes";
import { GenericComponentProps } from "../types";

export const PublicRoutes: React.FC<GenericComponentProps> = ({ children }) => {
  const { isLogin } = useSelector((state: RootState) => state.auth);
  return !isLogin ? children : <Navigate to={`/${ROUTES.HOME_PAGE}`} />;
};
