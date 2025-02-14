import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white-500 border-t p-4 flex flex-col items-center text-center font-serif text-xs">
      <span>Copyright © 2025 Boris Trochez. All rights reserved</span>
      <span>
        Cooking Healthy is powered by React + Vite, Typescript, Gemini AI,
        Redux, Tailwind css, AWS services: S3, Route 53, ACM, Cloudfront,
        Lambda, DynamoDB and Api Gateway.
      </span>
      <p className=" mt-4">
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
