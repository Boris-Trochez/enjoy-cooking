import React from "react";

interface CardProps {
  bodyText: string;
}

export const Card: React.FC<CardProps> = ({ bodyText }) => {
  return (
    <>
      <div
        className="flex flex-col gap-2  p-2 rounded shadow shadow-gray-200 border md:col-span-1 md:row-span-1 max-h-96
      "
      >
        <h2 className="text-green-500 font-bold">
          This is your delicious and healthy recipe:
        </h2>

        {bodyText ? (
          <p className="overflow-y-auto leading-tight">{bodyText}</p>
        ) : (
          <p className="text-red-600">
            Something went wrong! <br />
            There is not a recipe to show :(
          </p>
        )}
      </div>
    </>
  );
};
