import React, { Component, ReactNode } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Offers from "./pages/Offers";
import Cart from "./pages/Cart";

import { default as CartComponent } from "./components/Cart";

import "./App.css";
import Categories from "./pages/Categories";
import Localization from "./localization/Localization";

const App = () => {
  const local = Localization.getText("WEB_NAME");

  return (
    <>
      <NavBar />
      <main className="main-container">
        <CartComponent />
        <Routes>
          <Route path="/" Component={() => <Home />} />
          <Route path="/about-us" Component={() => <AboutUs />} />
          <Route path="/offers" Component={() => <Offers />} />
          <Route path="/categories" Component={() => <Categories />} />
          <Route path="cart" Component={() => <Cart />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
