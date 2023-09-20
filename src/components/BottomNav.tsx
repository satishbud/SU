import React from "react";

function BottomNav() {
  return (
    <div className="bottom-nav">
      <div className="left">
        <ul>
          <li>
            <a href="#">Tech</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Grocery</a>
          </li>
          <li>
            <a href="#">Offers</a>
          </li>
          <li>
            <a href="#">Collection</a>
          </li>
          <li>
            <a href="#">About us </a>
          </li>
        </ul>
      </div>
      <div className="right">
        <span>
          <a href="#">Login/Register</a>
        </span>
      </div>
    </div>
  );
}

export default BottomNav;
