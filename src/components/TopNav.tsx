import React from "react";

function TopNav() {
  return (
    <>
      <nav className="Top-nav">
        <h1 className="logo">&lt;SU /&gt;</h1>
        <form action="#" className="check" id="lookup">
          <input type="text" id="search" placeholder="LookUP Item" />
          <input type="button" value="Search" />
        </form>
      </nav>
    </>
  );
}

export default TopNav;
