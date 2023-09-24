import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <>
      <nav id="top-nav" className="top-nav">
        <Link className="logo" to={"/"}>
          &lt;SU /&gt;
        </Link>
        <form action="#" className="lookup" id="lookup">
          <input
            type="text"
            className="search"
            id="search"
            placeholder="LookUp Item"
          />
          <input className="lookup-button" type="button" value="Search" />
        </form>
      </nav>
    </>
  );
};

export default TopNav;
