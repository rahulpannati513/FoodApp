import { useRouteError } from "react-router-dom";
import React from "react";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>404 Not Found</h1>
      <h1>
        {err.status}:{err.statusText}
      </h1>
      <h2>The page you are looking doesn't exit </h2>
    </div>
  );
};

export default Error;
