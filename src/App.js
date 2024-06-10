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
import Grocery from "./components/Grocery";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

//chucking
//code splitiing
//Dynamic bundling
// //you have to make you appliation in to small chunks 
// to break donwyou app into smller app chunks 
//how yoiu can think about it
//logical separation of bundle a bundle should have enough code  for bundle
// we can make a bundle a for just for homestays train components 
//
//so dont put a load on the single bundle so for the req for the js file doesn't become so heavy so it takes lot of 
//
//time to get into the browser 
//that is why we do chucking 
//logicalically it is different    




const AppLayout = () => {
  return (
    <Provider store={appStore}>  
     <div className="app">
          <Header className="flex flex-wrap" />
      <Outlet />
    </div>
    </Provider>

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
      { path: "/grocery", element: <Grocery /> },
      { path: "/cart", element: <Cart/> },
      { path: "/resturant/:resId", element: <ResturantMenu /> }
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
