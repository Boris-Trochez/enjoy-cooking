import { Navigate, Route, Routes } from "react-router-dom";

import { ROUTES } from "./Routes";
import { HomePage } from "../pages/HomePage";
import { RecipeFormPage } from "../pages/RecipeFormPage";
import { RecipeStepsPage } from "../pages/RecipeStepsPage";

export const CookingHealthyRoutes = () => {
  return (
    <Routes>
      <Route path={`/${ROUTES.HOME_PAGE}`} element={<HomePage />} />
      <Route
        path={`/${ROUTES.RECIPE_FORM_PAGE}`}
        element={<RecipeFormPage />}
      />
      <Route
        path={`/${ROUTES.RECIPE_STEPS_PAGE}`}
        element={<RecipeStepsPage />}
      />
      <Route path="/" element={<Navigate to={`/${ROUTES.HOME_PAGE}`} />} />
    </Routes>
  );
};
