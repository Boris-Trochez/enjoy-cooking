import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white-500 border-t p-4 flex flex-col items-center font-serif text-xs">
      <span>Copyright © 2025 Boris Trochez. All rights reserved</span>
      <p>
        <span>
          Visit our official website:
          <a className="text-blue-800 ml-1" href="http://www.boristrochez.com">
            boristrochez.com
          </a>
        </span>
      </p>
    </footer>
  );
};
