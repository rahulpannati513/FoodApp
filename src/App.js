import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import ErrorAbout from "./components/ErrorAbout";
import ContactUs from "./components/ContactUs";
import ResturantMenu from "./components/ResturantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body className="body_color" /> },
      { path: "/about", element: <About /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/restuarants/:resId", element: <ResturantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={AppRouter}>
    <AppRouter />
  </RouterProvider>
);
// ReactDOM.render(<AppLayout />, document.getElementById("root"));
