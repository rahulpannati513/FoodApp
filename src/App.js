import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import ErrorAbout from "./components/ErrorAbout";
import ContactUs from "./components/ContactUs";
import ResturantMenu from "./components/ResturantMenu";
import useResturantMenu from "./utils/useResturantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import Grocery from "./components/Grocery";


//LazyLoading only when we to that when requiredon demand loading

const Grocery = lazy(()=> import("./components/Grocery"));


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
      { path: "/grocery", element:<Suspense fallback={<h1>Loading ....</h1>} ><Grocery /> </Suspense>  },
      { path: "/resturant/:resId", element: <ResturantMenu/> }
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
