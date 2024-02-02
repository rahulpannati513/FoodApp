import React from "react";

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

export default Header;
