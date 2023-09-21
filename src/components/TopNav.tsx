import React from "react";

function TopNav() {
  return (
    <>
      <nav id="top-nav" className="top-nav">
        <a href="./" className="logo">
          &lt;SU /&gt;
        </a>
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
}

export default TopNav;
