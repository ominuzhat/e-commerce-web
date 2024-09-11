"use client";
import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss"; // Import gallery styles
// import "./ProductImageInformation.scss"; // Import your custom styless

const images = [
  {
    original: "https://live.themewild.com/goemart/assets/img/product/p1.png",
    thumbnail: "https://live.themewild.com/goemart/assets/img/product/p1.png",
  },
  {
    original: "https://live.themewild.com/goemart/assets/img/product/p2.png",
    thumbnail: "https://live.themewild.com/goemart/assets/img/product/p2.png",
  },
  {
    original: "https://live.themewild.com/goemart/assets/img/product/p1.png",
    thumbnail: "https://live.themewild.com/goemart/assets/img/product/p1.png",
  },
  {
    original: "https://live.themewild.com/goemart/assets/img/product/p1.png",
    thumbnail: "https://live.themewild.com/goemart/assets/img/product/p1.png",
  },
];

const ProductImageInformation = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowNav(window.innerWidth < 1000);
    };

    handleResize(); // Set initial state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      <ImageGallery
        items={images}
        infinite={true}
        showPlayButton={false}
        showFullscreenButton={false}
        lazyLoad={true}
        showNav={showNav}
        slideOnThumbnailOver={true}
        slideDuration={300}
        additionalClass={"additional-class"}
      />
    </div>
  );
};

export default ProductImageInformation;
