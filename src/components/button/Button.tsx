import React from "react";
import { ButtonProps, ButtonType } from "../../types";

export const Button: React.FC<ButtonProps> = ({
  text,
  handleButtonClick,
  functionParam,
  type,
  styles,
}) => {
  const buttonTypeStyle =
    type.style === ButtonType.Primary
      ? "bg-green-500 text-white hover:bg-green-600 active:bg-green-700"
      : "bg-orange-500 text-white  hover:bg-orange-600 active:bg-orange-700";
  return (
    <>
      <button
        type={`${type.action}`}
        className={`button ${buttonTypeStyle} ${styles}`}
        onClick={() => handleButtonClick(functionParam || "")}
      >
        {text}
      </button>
    </>
  );
};
