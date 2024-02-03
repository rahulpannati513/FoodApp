import { useRouteError } from "react-router-dom";
import React from "react";

const ErrorAbout = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>404 Not Found</h1>
      {err.status}:{err.statusText}
      <h2>please check the url name : about </h2>
    </div>
  );
};

export default ErrorAbout;
