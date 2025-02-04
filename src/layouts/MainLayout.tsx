import React from "react";
import { MainLayoutProps } from "../types";
import { Footer, Header } from "../shared";

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex h-svh flex-col font-robotoCondensed text-base">
        <Header />
        <main className="flex flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};
