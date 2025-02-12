import React from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { ROUTES } from "./Routes";
import { GenericComponentProps } from "../types";

export const PrivateRoutes: React.FC<GenericComponentProps> = ({
  children,
}) => {
  const { status } = useSelector((state: RootState) => state.auth);

  return status === "authenticated" ? (
    children
  ) : (
    <Navigate to={`/${ROUTES.LOGIN}`} />
  );
};
