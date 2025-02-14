import React from "react";

export const AboutAppInfo: React.FC = () => {
  return (
    <>
      <p>
        Cooking Healthy is a disruptive app to provide delicious and healthy
        food recipe using AI suggestions, based on user conditions such as: age,
        weight, height, ingredients preferences and meal time.
        <br />
        <br />
      </p>
      <strong>Technologies stack:</strong>
      <ul>
        <li>React + Vite.</li>
        <li>Typescript.</li>
        <li>Google Gemini AI.</li>
        <li>Redux toolkit.</li>
        <li>Tailwind css.</li>
        <li>
          AWS services: S3, Route 53, ACM, Cloudfront, Lambda, DynamoDB and Api
          Gateway.
        </li>
        <li>Shadcn ui.</li>
        <li>Lucide react.</li>
        <li>Github actions for CI/CD.</li>
      </ul>
    </>
  );
};
