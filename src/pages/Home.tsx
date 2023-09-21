import React from "react";
import HeroContainer from "../components/HeroContainer";
import Product from "../components/Product";

function Home() {
  return (
    <>
      <HeroContainer />
      <Product
        name="Fuji Flame"
        id="100001"
        price={200}
        imageSrc="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Product
        name="Dunkin Donut"
        id="100002"
        price={7.99}
        imageSrc="https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </>
  );
}

export default Home;
