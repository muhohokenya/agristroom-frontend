"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { jost } from "../fonts/Fonts";
import "./Partners.css";

export const Partners = () => {
  const ref = useRef(null);
  const [containerWidth, setWidth] = useState(100 + "%");
  const [animationState, setPlay] = useState("paused");

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth + "px");
      setPlay("running");
    }
  }, []);

  return (
    <div className=" bg-[#F5F5F5] w-full px-[20px] lg:px-0">
      <div className="max-w-[1440px]  mx-auto flex flex-col items-start px-[15px] lg:px-[100px] ">
        <h2
          className={`text-start mt-[20px] lg:mt-[90px]  font-[800] text-[23px] lg:text-[34px] leading-[34px] lg:leading-[43px] tracking-[-0.04em] text-[#2F9b4E] ${jost.className}`}
        >
          <span className="text-[#212121]">Our</span> Partners
        </h2>

        <div
          className="d-flex mt-[31px] mb-[91px] px-[30px] items-center"
          ref={ref}
          style={{
            width: `${containerWidth}`,
            animationPlayState: animationState,
          }}
        >
          <div className=" max-w-[200px] flex items-center justify-center">
            <Image
              src="/partners/wefarm.png"
              alt=""
              width={164}
              height={38}
              className=""
            />
          </div>
          <div className=" max-w-[200px] flex items-center justify-center">
            <Image
              src="/partners/equity.png"
              alt=""
              width={56}
              height={40}
              className=""
            />
          </div>
          <div className=" max-w-[200px] flex items-center justify-center">
            <Image
              src="/partners/kcb.png"
              alt=""
              width={106}
              height={38}
              className=""
            />
          </div>
          <div className=" max-w-[200px] flex items-center justify-center">
            <Image
              src="/partners/tridge.png"
              alt=""
              width={140}
              height={22}
              className=""
            />
          </div>
          <div className=" max-w-[200px] flex items-center justify-center">
            <Image
              src="/partners/google.png"
              alt=""
              width={116}
              height={40}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
