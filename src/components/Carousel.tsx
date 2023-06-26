"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

export const CarouselComponent = ({ children }: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    showThumbs: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <Carousel {...settings}>
      <div>
        <Image src="/guide-images/image-1.png" alt="" width={200} height={150} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
      <Image src="/guide-images/image-1.png" alt="" width={200} height={150} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
      <Image src="/guide-images/image-1.png" alt="" width={200} height={150} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};
