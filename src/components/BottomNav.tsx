import React from "react";
import { Link } from "react-router-dom";
import { useLocalization } from "../context/LocalizationContext";

const BottomNav = () => {
  const { locale } = useLocalization();

  return (
    <div className="bottom-nav">
      <div className="left">
        <ul>
          <li>
            <Link to={"./tech"}>{locale.getText("MENU_TECH")}</Link>
          </li>
          <li>
            <Link to={"./grocery"}>{locale.getText("MENU_GROCERY")}</Link>
          </li>
          <li>
            <Link to={"./offers"}>{locale.getText("MENU_OFFERS")}</Link>
          </li>
          <li>
            <Link to={"./categories"}>{locale.getText("MENU_CATEGORIES")}</Link>
          </li>
          <li>
            <Link to={"./about-us"}>{locale.getText("MENU_ABOUT_US")}</Link>
          </li>
          <li>
            <Link to={"./cart"}>{locale.getText("MENU_CART")}</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <span>
          <Link to={"./login-register"}>
            {locale.getText("MENU_LOGIN_REGISTER")}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default BottomNav;
