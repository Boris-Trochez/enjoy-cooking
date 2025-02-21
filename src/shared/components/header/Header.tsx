import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../store";
import { logout } from "../../../store/slices/auth/authSlice";
import React from "react";

export const Header: React.FC = () => {
  const { status, username, attempts, maxAttempts } = useSelector(
    (state: RootState) => state.auth,
  );
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout({ errorMessage: null }));
  };

  return (
    <>
      <header className="flex h-14 items-center bg-green-500 text-white">
        <img
          src="/assets/images/cooking-healthy-logo-img.png"
          alt="Cooking healthy logo"
          className="h-14 w-14"
        />
        <nav className="flex justify-evenly w-full">
          <ul className="flex justify-evenly w-full items-center">
            {status === "authenticated" && (
              <>
                <li>
                  <span>{username}</span>
                </li>
                <li>
                  <span>
                    Token usage: {attempts}/{maxAttempts}
                  </span>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="border border-green-300 w-20 rounded hover:cursor-pointer  hover:text-orange-200"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};
