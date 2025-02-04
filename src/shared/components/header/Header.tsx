import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../store";
import { logout } from "../../../store/slices/auth/authSlice";
import React from "react";

export const Header: React.FC = () => {
  const { isLogin, username } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <header className="flex h-14 items-center bg-green-500 text-white">
        <nav className="flex justify-evenly w-full">
          <ul className="flex gap-3">
            {isLogin && (
              <li
                onClick={handleLogout}
                className="hover:cursor-pointer hover:text-orange-200"
              >
                Logout
              </li>
            )}
          </ul>
          {isLogin && <span>{username}</span>}
        </nav>
      </header>
    </>
  );
};
