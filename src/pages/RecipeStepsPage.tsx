import { useSelector } from "react-redux";
import { Button, Card } from "../components";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../router";
import { ButtonType } from "../types";

export const RecipeStepsPage = () => {
  const {
    age,
    weight,
    height,
    favoriteIngredient1,
    favoriteIngredient2,
    foodTime,
  } = useSelector((state: RootState) => state.recipeConditions);

  const { response } = useSelector((state: RootState) => state.geminiAI);
  const navigate = useNavigate();

  const handleGoToPageClick = (pageToGo: string) => {
    if (ROUTES.HOME_PAGE === pageToGo) {
      navigate(`/${ROUTES.HOME_PAGE}`);
    } else if (ROUTES.RECIPE_FORM_PAGE === pageToGo) {
      navigate(`/${ROUTES.RECIPE_FORM_PAGE}`);
    }
  };

  return (
    <>
      <div className=" flex justify-center  w-full mt-8 xl2:mt-20 mb-28">
        <div className="flex  flex-col gap-4 w-80 md:w-full text-center md:grid  md:grid-rows-1 md:grid-cols-[1fr_2fr_1fr] xl:max-w-7xl">
          <div>
            <span className=" text-green-500 md:col-span-1 md:row-span-1">
              Based on your conditions:{" "}
            </span>
            <ul>
              <li>Age: {age} years old</li>
              <li>Weight: {weight}kgms</li>
              <li>Height: {height}cms</li>
              <li>Favorite ingredient 1: {favoriteIngredient1}</li>
              <li>Favorite ingredient 2: {favoriteIngredient2}</li>
              <li>Food time: {foodTime}</li>
            </ul>
          </div>

          <Card bodyText={response} />

          <div className="md:col-span-1 md:row-span-1 md:pr-8 md:pl-8">
            <Button
              functionParam={ROUTES.HOME_PAGE}
              text="I want a new recipe!"
              handleButtonClick={handleGoToPageClick}
              type={{ action: "button", style: ButtonType.Primary }}
              styles="hover:bg-green-600 active:bg-green-700"
            />
            <Button
              functionParam={ROUTES.RECIPE_FORM_PAGE}
              text="New recipe conditions"
              handleButtonClick={handleGoToPageClick}
              type={{ action: "button", style: ButtonType.Secondary }}
              styles="mt-3"
            />
            <Button
              functionParam={ROUTES.HOME_PAGE}
              text="Home page"
              handleButtonClick={handleGoToPageClick}
              type={{ action: "button", style: ButtonType.Secondary }}
              styles="mt-6"
            />
          </div>
        </div>
      </div>
    </>
  );
};
