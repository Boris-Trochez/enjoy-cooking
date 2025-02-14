import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addRecipeConditions } from "../store/slices/recipeConditions";
import { AppDispatch, RootState, setGeminiResponse } from "../store";
import { useCustomForm } from "../hooks";
import { fetchGeminiResponse } from "../api";
import { ButtonType, RecipeConditions } from "../types";
import { Loader } from "./Loader";
import { ROUTES } from "../router";
import { Button } from "./button/Button";
import { setMaxAttempt, updateTokenAppState } from "../store/slices/auth";

export const HealthyFoodForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { username, tokenApp, attempts, maxAttempts } = useSelector(
    (state: RootState) => state.auth,
  );
  const {
    age,
    weight,
    height,
    favoriteIngredient1,
    favoriteIngredient2,
    foodTime,
    formSate,
    onInputChange,
  } = useCustomForm({
    age: "",
    weight: "",
    height: "",
    favoriteIngredient1: "",
    favoriteIngredient2: "",
    foodTime: "",
  });
  const [useSubmitted, setSubmitted] = useState(false);
  const [useLoading, setLoading] = useState(false);
  const [useIsFormValid, setIsFormValid] = useState(false);
  const [useShowErrorMessage, setShowErrorMessage] = useState(false);

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (isNotFormValid()) {
      setShowErrorMessage(true);
      return;
    }

    setLoading(true);
    const recipeState: RecipeConditions = {
      age,
      weight,
      height,
      favoriteIngredient1,
      favoriteIngredient2,
      foodTime,
    };
    dispatch(addRecipeConditions(recipeState));
    dispatch(setMaxAttempt({ newAttempt: attempts }));
    setSubmitted(true);
    setIsFormValid(true);
  };

  const onHandleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    onInputChange(event);
  };

  const isNotFormValid = () => {
    const emptyFieldsFound = [];

    Object.values(formSate).forEach((formField) => {
      if (formField === "") {
        emptyFieldsFound.push(formField);
      }
    });

    return emptyFieldsFound.length > 0;
  };

  const handleGoToPageClick = (pageToGo: string) => {
    console.log(pageToGo);
    if (ROUTES.HOME_PAGE === pageToGo) {
      navigate(`/${ROUTES.HOME_PAGE}`);
    }
  };

  useEffect(() => {
    if (useSubmitted) {
      fetchGeminiResponse({ ...formSate, username }).then((response) => {
        dispatch(
          setGeminiResponse({
            response,
            isResponseAvailable: true,
          }),
        );

        updateTokenAppState({
          attempts,
          maxAttempts,
          id: tokenApp,
          isTokenValid: true,
        });
        setSubmitted(false);
        setLoading(false);
        navigate(`/${ROUTES.RECIPE_STEPS_PAGE}`, { replace: true });
      });
    }
  }, [
    useSubmitted,
    navigate,
    formSate,
    dispatch,
    username,
    attempts,
    tokenApp,
    maxAttempts,
  ]);

  return (
    <>
      {!useLoading ? (
        <div className="flex flex-col w-full items-center p-8 text-center gap-8">
          <h1 className="font-bold text-lg text-green-500">
            Let's get a recipe special for you, please fill the following form:
          </h1>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-4 w-60 md:gap-2"
            action=""
          >
            <div className="flex flex-col">
              <input
                className="input"
                type="number"
                name="age"
                id=""
                value={age}
                onChange={onHandleInputChange}
              />
              <label htmlFor="">Age</label>
            </div>
            <div className="flex flex-col">
              <input
                className="input"
                type="number"
                name="weight"
                id=""
                onChange={onHandleInputChange}
                value={weight}
              />
              <label htmlFor="">Weight (kgs)</label>
            </div>
            <div className="flex flex-col">
              <input
                className="input"
                type="number"
                name="height"
                id=""
                onChange={onHandleInputChange}
                value={height}
              />
              <label htmlFor="">Height (cms)</label>
            </div>
            <div className="flex flex-col">
              <input
                name="favoriteIngredient1"
                className="input"
                type="text"
                onChange={onHandleInputChange}
                value={favoriteIngredient1}
              />
              <label htmlFor="">Favorite ingredient 1</label>
            </div>
            <div className="flex flex-col">
              <input
                name="favoriteIngredient2"
                className="input"
                type="text"
                onChange={onHandleInputChange}
                value={favoriteIngredient2}
              />
              <label htmlFor="">Favorite ingredient 2</label>
            </div>
            <div>
              <select
                onChange={onHandleInputChange}
                value={foodTime}
                name="foodTime"
                id=""
                className="w-full input hover:cursor-pointer"
              >
                <option value="" disabled hidden>
                  Choose a meal time
                </option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>
            </div>
            {!useSubmitted && (
              <Button
                text="Let's cook!"
                type={{ action: "submit", style: ButtonType.Primary }}
                handleButtonClick={() => handleFormSubmit}
                styles="mt-4"
              />
            )}
            {!useIsFormValid && useShowErrorMessage && (
              <span className="text-red-500">
                Invalid Form! Please check that no fields are empty
              </span>
            )}
            <Button
              functionParam={ROUTES.HOME_PAGE}
              text="Home page"
              handleButtonClick={handleGoToPageClick}
              type={{ action: "button", style: ButtonType.Secondary }}
              styles="mt-6"
            />
          </form>
        </div>
      ) : (
        <div className="flex justify-center content-center w-full">
          <Loader />
        </div>
      )}
    </>
  );
};
