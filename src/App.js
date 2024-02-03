import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import ErrorAbout from "./components/ErrorAbout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./components/ContactUs";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  { path: "/", element: <AppLayout />, errorElement: <Error /> },
  { path: "/about", element: <About />, errorElement: <Error /> },
  { path: "/contactus", element: <ContactUs />, errorElement: <Error /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={AppRouter}>
    <AppRouter />
  </RouterProvider>
);
// ReactDOM.render(<AppLayout />, document.getElementById("root"));
