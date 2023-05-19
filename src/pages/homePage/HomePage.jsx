import React from "react";
import HomeBanner from "../../components/home/HomeBanner";
import GallerySection from "../../components/home/GallerySection";
import ShopByCategorySection from "../../components/home/ShopByCategorySection";

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <GallerySection />
      <ShopByCategorySection />
    </>
  );
};

export default HomePage;
