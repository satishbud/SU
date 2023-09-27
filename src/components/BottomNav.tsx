import React from "react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <div className="left">
        <ul>
          <li>
            <Link to={"./tech"}>Tech</Link>
          </li>
          <li>
            <Link to={"./grocery"}>Grocery</Link>
          </li>
          <li>
            <Link to={"./offers"}>Offers</Link>
          </li>
          <li>
            <Link to={"./categories"}>Categories</Link>
          </li>
          <li>
            <Link to={"./about-us"}>About Us</Link>
          </li>
          <li>
            <Link to={"./cart"}>Cart</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <span>
          <Link to={"./login-register"}>Login/Register</Link>
        </span>
      </div>
    </div>
  );
};

export default BottomNav;
