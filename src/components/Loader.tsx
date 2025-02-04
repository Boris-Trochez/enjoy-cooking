import React from "react";

export const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-12 h-12 border-4 border-green-500 shadow-xl border-dashed rounded-full animate-spin"></div>
      <span className="mt-2 text-orange-500">Loading...</span>
    </div>
  );
};
