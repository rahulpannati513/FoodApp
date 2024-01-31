import React from "react";
import ReactDOM from "react-dom";

//ReactDOM.render(<h1>Swiggy App</h1>, document.getElementById("root"));

/*
Header
- Logo
- Nav Items
Body
- search
- ResturentContainer
- ResturentCard
- Img
- Name of Res , Star Rating , Cuisione, Delevery time, Cost for two
Footer
- Links
- address
- contact
*/

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://w7.pngwing.com/pngs/126/52/png-transparent-logo-brand-font-food-product-restaurant-logo-design-food-label-text-thumbnail.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const styleCard = {
//   backgroundColor: "red",
// }; //in line style for react is also allowed but not used

const ResturentCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-img"
        style={{ width: "100%", height: "200px" }}
        alt="food-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
      ></img>
      <h3 className="res-name">Burger King</h3>
      <h4>Burger,American</h4>
      <h4>Madhapur</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResturentCard />
        <ResturentCard />
        <ResturentCard />
        <ResturentCard />
        <ResturentCard />
        <ResturentCard />
        <ResturentCard />
        <ResturentCard />
        <ResturentCard />
        <ResturentCard />
        <ResturentCard />
        <ResturentCard />
        <ResturentCard />
        <ResturentCard />
        <ResturentCard />
        <ResturentCard />
        <ResturentCard />
        <ResturentCard />
        <ResturentCard />
        <ResturentCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

ReactDOM.render(<AppLayout />, document.getElementById("root"));
