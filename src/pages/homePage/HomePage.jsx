import React from "react";
import HomeBanner from "../../components/home/HomeBanner";
import GallerySection from "../../components/home/GallerySection";
import ShopByCategorySection from "../../components/home/ShopByCategorySection";
import ToyConquestSection from "../../components/home/ToyConquestSection";
import BattlefieldLegendsSection from "../../components/home/BattlefieldLegendsSection";
import Title from "../../components/title/Title";

const HomePage = () => {
  return (
    <>
      <Title />
      <HomeBanner />
      <GallerySection />
      <ShopByCategorySection />
      <ToyConquestSection />
      <BattlefieldLegendsSection />
    </>
  );
};

export default HomePage;
