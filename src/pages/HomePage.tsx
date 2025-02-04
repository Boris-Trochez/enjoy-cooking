import { useNavigate } from "react-router-dom";
import { ROUTES } from "../router";
import { Button } from "../components";
import { ButtonType } from "../types";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/${ROUTES.RECIPE_FORM_PAGE}`, { replace: true });
  };

  return (
    <>
      <div className="font-robotoCondensed flex  flex-col gap-10 text-center p-10 w-full">
        <section>
          <h1 className=" text-2xl">
            Welcome to <span className="text-orange-500">Cooking</span>
            <span className="text-green-500">Healthy</span>
          </h1>
          <p className="mt-4">
            The place where you can get a recipe to enjoy preparing your own
            delicious and healthy food!
          </p>
        </section>
        <section className="flex items-center flex-col">
          <div>
            <img
              className="h-60 rounded shadow-xl"
              src="/assets/images/home-img.png"
              alt="Home img"
            />
          </div>
          <Button
            text="I want my healthy recipe!"
            functionParam=""
            handleButtonClick={handleButtonClick}
            type={{ action: "button", style: ButtonType.Primary }}
            styles="w-60  mt-6"
          />
        </section>
      </div>
    </>
  );
};
