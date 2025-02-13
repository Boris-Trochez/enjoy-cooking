import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, Loader } from "../../../components";
import { ButtonType } from "../../../types";
import { useReducerAuthForm } from "../../../hooks";
import { AppDispatch, RootState } from "../../../store";

import { ROUTES } from "../../../router";

import { checkingAuthentication } from "../../../store/slices/auth";

export const Login = () => {
  const { formState, dispatchReducer } = useReducerAuthForm();
  const dispatch = useDispatch<AppDispatch>();
  const { status, errorMessage } = useSelector(
    (state: RootState) => state.auth,
  );
  const [submitExecuted, setSubmitExecuted] = useState(false);
  const [hasNavigated, setHasNavigated] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatchReducer({ type: name, payload: value });
  };

  const isAuthenticating = useMemo(() => status === "checking", [status]);
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    dispatch(
      checkingAuthentication({
        ...formState,
        status: "not-authenticated",
        attempts: 0,
        errorMessage: null,
        maxAttempts: 0,
      }),
    );

    setSubmitExecuted(true);
  };

  useEffect(() => {
    if (status === "authenticated" && !hasNavigated) {
      setHasNavigated(true);
      navigate(`/${ROUTES.HOME_PAGE}`);
    }
  }, [status, navigate, hasNavigated]);

  return (
    <div className="flex flex-col justify-center items-center text-center gap-4 w-full">
      {status === "not-authenticated" && (
        <>
          <div>
            <h1 className=" text-2xl">
              Welcome to <span className="text-orange-500">Cooking</span>
              <span className="text-green-500">Healthy</span>
            </h1>
            <span className="text-sm">(with Gemini AI)</span>
          </div>
          <form
            className="flex flex-col gap-6 text-center w-80 border border-gray-200 p-4 rounded"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <input
                  className="input"
                  id="username"
                  type="text"
                  name="username"
                  onChange={handleInputChange}
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="flex flex-col">
                <input
                  className="input"
                  id="login-token"
                  type="text"
                  name="tokenApp"
                  onChange={handleInputChange}
                />
                <label htmlFor="login-token">Token app</label>
              </div>
            </div>
            <Button
              handleButtonClick={() => handleSubmit}
              type={{ action: "submit", style: ButtonType.Primary }}
              text="Login"
            />
            {status === "not-authenticated" && submitExecuted && (
              <span className="text-red-500">{errorMessage}</span>
            )}
          </form>
        </>
      )}
      {isAuthenticating && <Loader />}
    </div>
  );
};
