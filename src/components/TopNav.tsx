import React from "react";
import { Link } from "react-router-dom";
import { useLocalization } from "../context/LocalizationContext";

const TopNav = () => {
  const { locale } = useLocalization();
  return (
    <>
      <nav id="top-nav" className="top-nav">
        <Link className="logo" to={"/"}>
          {locale.getText("WEB_NAME")}
        </Link>
        <form action="#" className="lookup" id="lookup">
          <input
            type="text"
            className="search"
            id="search"
            placeholder={locale.getText("LOOK_UP_TEXT")}
          />
          <input
            className="lookup-button"
            type="button"
            value={locale.getText("SEARCH_TEXT")}
          />
        </form>
      </nav>
    </>
  );
};

export default TopNav;
