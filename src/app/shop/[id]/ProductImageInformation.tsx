"use client";
import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

const ProductImageInformation = ({ imageData }: any) => {
  const mappedImageData = imageData?.map((item: any) => ({
    original: item?.image,
    thumbnail: item?.image,
  }));
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
    <div>
      <ImageGallery
        items={mappedImageData}
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
