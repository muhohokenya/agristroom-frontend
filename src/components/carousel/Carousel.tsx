"use client";

import "./Carousel.css";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
  children: React.ReactNode[];
  show: number;
};

export const CarouselComponent = ({ children, show }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [touchPosition, setTouchPosition] = useState<React.TouchEvent<HTMLDivElement>>(null!)

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((preState) => preState - 1);
    }
  };

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchDown: any = e.touches[0].clientX
    setTouchPosition(touchDown)
}

const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchDown:any = touchPosition

    if(touchDown === null) {
        return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
        next()
    }

    if (diff < -5) {
        prev()
    }

    setTouchPosition(null!)
}

  return (
    
    <div className="carousel-container bg-[#FAFAFA]max-w-[1440px]  mx-auto w-full mt-[40px]">
      <div className="carousel-wrapper">
        
      {currentIndex > 0 && (
          <button onClick={prev} className="left-arrow flex items-center justify-center !bg-gray-400">
            <FaArrowLeft className="text-white" />
          </button>
        )}
        <div 
        className="carousel-content-wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        >
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {children}
          </div>
        </div>

        {currentIndex < length - show && (
          <button onClick={next} className="right-arrow flex items-center justify-center !bg-gray-400">
            <FaArrowRight className="text-white" />
          </button>
        )}
      </div>
      
    </div>
  );
};
