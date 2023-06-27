"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { MasterClassCard } from "../components/MasterClass";
import { DiscussionCard } from "../components/DiscussionCard";
import { MdArrowForwardIos } from "react-icons/md";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";
import { ManagedUI } from "../hooks/useModalContext";
import { Card, MasterClass, UserRegisterData } from "../types/types";
import { jost, satoshi } from "../fonts/Fonts";
import { cards, discussions, masterClasses } from "../lib/data/data";
import { CarouselComponent } from "../components/carousel/Carousel";
import { useAppDispatch } from "../hooks/react-redux-hooks";
import { signUpUserAction } from "../redux/actions/auth.action";

export default function Home() {
  const router = useRouter();
  const { openModal, setOpenModal } = useContext(ManagedUI);
  const [show, setShow] = useState(3);

  useEffect(() => {
    const checkWidthSize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth > 866) {
          setShow(3);
        } else if (window.innerWidth > 600) {
          setShow(2);
        } else {
          setShow(1);
        }
      }
    };

    checkWidthSize();

    window.addEventListener("resize", checkWidthSize);
    return () => {
      window.removeEventListener("resize", checkWidthSize);
    };
  }, []);

  console.log("show", show);

  // const userRegisterData: UserRegisterData = {
  //   first_name: "Sammy",
  //   last_name: "Kirigha",
  //   email: "sammy@gmail.com",
  //   phone_number: "+254704078652",
  //   password: "password",
  // };

  const dispatch = useAppDispatch();

  const createUserAccount = async () => {
    console.log("registering user");
    const res = await dispatch(signUpUserAction());
    console.log("res", res);
  };

  return (
    <main className="">
      <Navbar />
      <div className="bg-[#FAFAFA] w-full">
        <div className="max-w-[1440px] mx-auto w-full">
          <div
            className={`w-full mt-[100px]  pt-[50px] flex flex-col justify-between  lg:flex-row lg:items-center px-[15px] lg:px-[100px] gap-[50px] lg:gap-[100px]`}
          >
            <div className=" w-full  lg:w-[50%] lg:min-w-[607px] mt-[10px] lg:mt-[58px] min-h-[220px] lg:mb-[75px] ">
              <p
                className={`text-[23px] md:text-[34px] text-[#212121] tracking-[-0.04em] leading-[30px] md:leading-[48px] text-start font-[800] ${jost.className}`}
              >
                Make important connections to improve your{" "}
                <span className="text-[#2F9B4E]">Apple farming</span> experience
              </p>
              <p
                className={`mt-[10px] md:mt-[20px] text-[16px] md:text-[18px] leading-[27px] tracking-[-0.02em] md:leading-[24px] font-[400] text-[#212121]/70 ${satoshi.className}`}
              >
                Every farmer needs a community for a successful farming venture
              </p>
              <button
                onClick={() => {
                  createUserAccount();
                  // setOpenModal(true);
                  // router.push("/signup");
                }}
                className={`bg-[#2F9B4E] rounded-md py-[14px] px-[24px] flex items-center justify-center mt-[40px] text-white text-center text-[16px] tracking-[-0.04em] leading-[22px] font-[700]  ${satoshi.className}`}
              >
                Join Community
              </button>
            </div>
            <div className="w-full  lg:w-[50%] flex items-center justify-center">
              <div className="relative  border-1 flex flex-col md:flex-row  mt-[50px] lg:mt-[50px] mb-[75px] lg:mb-[130px] h-[330px]  lg:h-[476px]  sm:w-[330px] lg:w-[476px] border border-[#DBF3D9] rounded-full">
                <p
                  className={` absolute bottom-4 z-20 lg:bottom-3 max-h-[56px] lg:max-h-[60px]   max-w-[152px] lg:max-w-[222px] right-0 lg:-right-16  text-center lg:mx-auto text-[8px] lg:text-[11px]  leading-[10px] lg:leading-[16px] font-[500] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
                >
                  Monitor and help smallholder farmers increase their resilience
                  and cope with devastating challenges in their crop and animal
                  farms.
                </p>
                <p
                  className={` absolute  top-[220px] lg:top-[325px] max-h-[56px] lg:max-[60px]  max-w-[135px]  lg:max-w-[215px] left-10  text-center lg:mx-auto text-[8px] lg:text-[11px] leading-[10px] lg:leading-[16px] font-[500] text-[#212121]/70 tracking-[-0.04em] lg:tracking-[-0.02em] ${satoshi.className}`}
                >
                  Monitor and help smallholder farmers increase their resilience
                  and cope with devastating challenges in their crop and animal
                  farms.
                </p>
                <div className="m-[42px] lg:m-[61px] relative border border-[#DBF3D9] rounded-full h-[245px] lg:h-[354px] w-[245px] lg:w-[354px] ">
                  <div className="absolute fade-in-image top-32 lg:top-48 -left-3 lg:-left-10 bg-[#DBF3D9] rounded-full w-[48px] lg:w-[70px] h-[48px] lg:h-[70px] flex items-center justify-center">
                    <Image
                      src="/Vector.png"
                      alt="Logo"
                      priority
                      width={37}
                      height={44}
                      className="object-contain w-[37px] h-[44px]"
                    />
                  </div>
                  <div className="absolute fade-in-image2 bottom-2 right-16 w-[45px] lg:w-[66px] h-[45px] lg:h-[66px] ">
                    <Image
                      src="/user-3.png"
                      alt="Logo"
                      priority
                      width={66}
                      height={66}
                      className="object-contain w-[45px] lg:w-[66px] h-[45px] lg:h-[66px] bg-[#F8F29F] rounded-full"
                    />
                  </div>

                  <div className="absolute fade-in-image3 right-0 top-0 w-[48px] lg:w-[70px] h-[48px] lg:h-[70px]">
                    <Image
                      src="/user-2.png"
                      alt="Logo"
                      priority
                      width={70}
                      height={70}
                      className="object-contain w-[48px] lg:w-[70px] h-[48px] lg:h-[70px] bg-[#DBF3D9] rounded-full"
                    />
                  </div>
                  <div className="m-[34px] lg:m-[50px] border border-[#DBF3D9] rounded-full h-[175px] lg:h-[254px] w-[175px] lg:w-[254px] ">
                    <div className="m-[33px] lg:m-[49px] bg-[#DBF3D9] rounded-full h-[108px]  lg:h-[150px] w-[108px] lg:w-[150px] flex items-center justify-center ">
                      <Image
                        src="/logo-box-large.png"
                        alt="Logo"
                        priority
                        width={100}
                        height={112}
                        className="object-contain w-[70] lg:w-[100px] h-[77px] lg:h-[112px] "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full   px-[15px] lg:px-[100px] pb-[90px]">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col items-center justify-center lg:px-[70px]">
          <h1
            className={`mt-[90px] mb-[30px] text-[23px] lg:text-[34px] leading-[33px] lg:leading-[43px] tracking-[-0.04em] font-[800] text-[#2F9B4E] ${jost.className}`}
          >
            <span className="text-[#212121] mr-2">Our</span>Communities
          </h1>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] max-w-[1440px] mx-auto">
            {cards.map(({ ...card }, index) => {
              return (
                <SingleCard
                  heading={card.heading}
                  text={card.text}
                  image={card.image}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full bg-[#2F9B4E]">
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px]  min-h-[223px] py-[40px] lg:py-0 justify-center">
          <div className="flex flex-col items-center justify-center w-full">
            <span
              className={`text-[34px]  leading-[40px] font-[800] text-white tracking-[-0.04em] ${jost.className}`}
            >
              20+
            </span>
            <p
              className={`font-[400] text-[18px] w-[100%] text-center leading-[28px] text-white whitespace-nowrap tracking-[-0.04em] ${satoshi.className}`}
            >
              Active Farmers
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <span
              className={`text-[34px] leading-[40px] font-[800] text-white tracking-[-0.04em] ${jost.className}`}
            >
              1,000+
            </span>
            <p
              className={`font-[400] w-[100%] text-center text-[18px] leading-[28px] text-white whitespace-nowrap tracking-[-0.04em] ${satoshi.className}`}
            >
              Vibrant Communities
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <span
              className={`text-[34px]  leading-[40px] font-[800] text-white tracking-[-0.04em] ${jost.className}`}
            >
              2,100+
            </span>
            <p
              className={`font-[400] w-[100%] text-center text-[18px] leading-[28px] text-white whitespace-nowrap tracking-[-0.04em] ${satoshi.className}`}
            >
              Cumulative years of experience
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <span
              className={`text-[34px] leading-[40px] font-[800] text-white tracking-[-0.04em] ${jost.className}`}
            >
              5,000+
            </span>
            <p
              className={`font-[400] w-[100%] text-center text-[18px] leading-[28px] text-white whitespace-nowrap tracking-[-0.04em] ${satoshi.className}`}
            >
              Discussions to learn from
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] w-full mx-auto">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col items-center justify-center">
          <span
            className={`mt-[45px] lg:mt-[80px] font-[800] text-[23px] lg:text-[34px] leading-[33px] lg:leading-[43px] tracking-[-0.04em] text-[#2F9B4E] ${jost.className}`}
          >
            <span className="text-[#212121]">Popular</span> Community
            Discussions
          </span>
          <div className="mt-[20px] bg-white md:mx-[10px] lg:mx-[150px] ">
            <div className="py-[10px] lg:pt-[30px] px-[12px] md:px-[50px] xl:px-[142px]  max-h-[500px] rounded-md no-scrollbar overflow-auto lg:scrollbar lg:scrollbar-thumb-slate-300 lg:scrollbar-w-3 lg:scrollbar-track-white lg:scrollbar-thumb-rounded-lg flex flex-col gap-[15px] ">
              {discussions.map((discussion, indx) => {
                return (
                  <DiscussionCard
                    key={indx}
                    date={discussion.date}
                    likesCount={discussion.likesCount}
                    resplies={discussion.resplies}
                    image={discussion.image}
                    country={discussion.country}
                    county={discussion.county}
                    countryFlagImage={discussion.countryFlagImage}
                    time={discussion.time}
                    question={discussion.question}
                    authorsImage={discussion.authorsImage}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2F9B4E] w-full   ">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col  mt-[140px] pb-[60px] ">
          <h2
            className={`font-[800] text-[34px] leading-[43px] mt-[60px] text-white tracking-tighter text-center ${jost.className}`}
          >
            Our Impact
          </h2>
          <p
            className={` text-center max-w-[1091px] mx-[15px] lg:mx-auto text-[18px] leading-[32px] font-[400] text-white tracking-[-0.01em] ${satoshi.className}`}
          >
            We are committed to making a positive and lasting impact in the
            world through our work. We believe by aligning our agenda with the
            United Nations 2030 Sustainable Development Goals, we will be able
            to contribute to a more sustainable and equitable future for all.
          </p>
          <div className="">
            <CarouselComponent show={show > 3 ? 5 : 3}>
              <div className="flex flex-col items-center justify-center gap-[19px]  !max-w-[250px]">
                <Image
                  src="/people-two.png"
                  alt=""
                  width={142}
                  height={61}
                  className="w-[142px] h-[61px]"
                />
                <p
                  className={`font-[500] text-[16px] lg:text-[18px] leading-[28px] tracking-[-0.04em] text-white max-w-[130px] text-center ${satoshi.className}`}
                >
                  No Poverty
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-[19px]  !max-w-[250px]">
                <Image
                  src="/coffee.png"
                  alt=""
                  width={70}
                  height={60}
                  className=""
                />
                <p
                  className={`font-[500] text-[16px] lg:text-[18px] leading-[28px] tracking-[-0.04em] text-white max-w-[130px] text-center ${satoshi.className}`}
                >
                  Zero Hunger
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-[19px]  !max-w-[250px]">
                <Image
                  src="/health.png"
                  alt=""
                  width={86}
                  height={60}
                  className=""
                />
                <p
                  className={`font-[500] text-[16px] lg:text-[18px] leading-[28px] tracking-[-0.04em] text-white max-w-[130px] text-center ${satoshi.className}`}
                >
                  Good Health and Well-being
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-[19px]  !max-w-[250px]">
                <Image
                  src="/together.png"
                  alt=""
                  width={61}
                  height={60}
                  className=""
                />
                <p
                  className={`font-[500] text-[16px] lg:text-[18px] leading-[28px] tracking-[-0.04em] text-white max-w-[130px] text-center ${satoshi.className}`}
                >
                  Partnership for the Goals
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-[19px]  !max-w-[250px]">
                <Image
                  src="/education.png"
                  alt=""
                  width={74}
                  height={60}
                  className=""
                />
                <p
                  className={`font-[500] text-[16px] lg:text-[18px] leading-[28px] tracking-[-0.04em] text-white max-w-[130px] text-center ${satoshi.className}`}
                >
                  Partnership for the Goals
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-[19px]  !max-w-[250px]">
                <Image
                  src="/climate.png"
                  alt=""
                  width={117}
                  height={60}
                  className=""
                />
                <p
                  className={`font-[500] text-[16px] lg:text-[18px] leading-[28px] tracking-[-0.04em] text-white max-w-[130px] text-center ${satoshi.className}`}
                >
                  Climate Actions
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-[19px]  !max-w-[250px]">
                <Image
                  src="/life.png"
                  alt=""
                  width={61}
                  height={60}
                  className=""
                />
                <p
                  className={`font-[500] text-[16px] lg:text-[18px] leading-[28px] tracking-[-0.04em] text-white max-w-[130px] text-center ${satoshi.className}`}
                >
                  Life on Land
                </p>
              </div>
            </CarouselComponent>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full py-[35px] lg:py-[80px]">
        <div className=" max-w-[1440px]  mx-auto w-full">
          <h2
            className={`text-center  font-[800] text-[23px] lg:text-[34px] leading-[34px] lg:leading-[43px] tracking-[-0.04em] text-[#2F9b4E] ${jost.className}`}
          >
            <span className="text-[#212121]">Popular</span> Guides & Tutorials
          </h2>
          <CarouselComponent show={show}>
            <div className="flex flex-col bg-white max-w-[347px] lg:min-w-[400px] h-[500] lg:h-[450px] box-content">
              <Image
                src="/guide-images/apples-one.png"
                alt=""
                width={399}
                height={209}
                className="rounded-t-md"
              />
              <div className="py-[15px] lg:py-[20px] px-[16px] lg:px-[20px] ">
                <h3
                  className={`font-[600] text-[16px] lg:text-[20px] leading-[24px] tracking-[-0.04em] ${jost.className}`}
                >
                  Nutritional Program for Wambugu Apples
                </h3>
                <p
                  className={`text-[14px] lg:text-[16px] line-clamp-4 font-[400] leading-[28px] tracking-[-0.03em] lg:tracking-[-0.04em] max-w-[360px] ${satoshi.className}`}
                >
                  Soil test is important to determine and understand fertilizer
                  requirements for your apple farm. Both organic and inorganic
                  fertilizers - foliar and basal are important to supply
                  nutrient needs for the plant. Read on to understand timing and
                  split application of fertilizers.
                </p>
                <div className="flex mt-[25px] lg:my-[20px] items-center gap-[9.17px]">
                  <span
                    className={`text-[16px] leading-[22px] tracking-[-0.03em] font-[700] text-[#2F9B4E] cursor-pointer ${satoshi.className}`}
                  >
                    Read More
                  </span>
                  <MdArrowForwardIos className="text-[#2F9B4E] w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white max-w-[347px] lg:min-w-[400px] h-[500] lg:h-[450px] box-content">
              <Image
                src="/guide-images/apples-two.png"
                alt=""
                width={399}
                height={209}
                className="rounded-t-md"
              />
              <div className="py-[15px] lg:py-[20px] px-[16px] lg:px-[20px] ">
                <h3
                  className={`font-[600] text-[16px] lg:text-[20px] leading-[24px] tracking-[-0.04em] ${jost.className}`}
                >
                  Nutritional Program for Wambugu Apples
                </h3>
                <p
                  className={`text-[14px] lg:text-[16px] line-clamp-4 font-[400] leading-[28px] tracking-[-0.03em] lg:tracking-[-0.04em] max-w-[360px] ${satoshi.className}`}
                >
                  Did you know the propagation story of the now popular Wambugu
                  apple? Learn how this superb and all weather apple triumphs
                  over other varieties and why you should choose it because of
                  its distinctive features.
                </p>
                <div className="flex mt-[25px] lg:my-[20px] items-center gap-[9.17px]">
                  <span
                    className={`text-[16px] leading-[22px] tracking-[-0.03em] font-[700] text-[#2F9B4E] cursor-pointer ${satoshi.className}`}
                  >
                    Read More
                  </span>
                  <MdArrowForwardIos className="text-[#2F9B4E] w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white max-w-[347px] lg:min-w-[400px] h-[500] lg:h-[450px] box-content">
              <Image
                src="/guide-images/apples-three.png"
                alt=""
                width={399}
                height={209}
                className="rounded-t-md"
              />
              <div className="py-[15px] lg:py-[20px] px-[16px] lg:px-[20px] ">
                <h3
                  className={`font-[600] text-[16px] lg:text-[20px] leading-[24px] tracking-[-0.04em] ${jost.className}`}
                >
                  Nutritional Program for Wambugu Apples
                </h3>
                <p
                  className={`text-[14px] lg:text-[16px] line-clamp-4 font-[400] leading-[28px] tracking-[-0.03em] lg:tracking-[-0.04em] max-w-[360px] ${satoshi.className}`}
                >
                  Chinzinga shares how recent floods in Zambia swept away her 2
                  acres of apples barely 2 months after planting. Learn more
                  about how farm insurance helps smallholder farmers and advice
                  from a farm insurance company on why smallholder farmers need
                  to consider insurance.
                </p>
                <div className="flex mt-[25px] lg:my-[20px] items-center gap-[9.17px]">
                  <span
                    className={`text-[16px] leading-[22px] tracking-[-0.03em] font-[700] text-[#2F9B4E] cursor-pointer ${satoshi.className}`}
                  >
                    Read More
                  </span>
                  <MdArrowForwardIos className="text-[#2F9B4E] w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white max-w-[347px] lg:min-w-[400px] h-[500] lg:h-[450px] box-content">
              <Image
                src="/guide-images/apples-one.png"
                alt=""
                width={399}
                height={209}
                className="rounded-t-md"
              />
              <div className="py-[15px] lg:py-[20px] px-[16px] lg:px-[20px] ">
                <h3
                  className={`font-[600] text-[16px] lg:text-[20px] leading-[24px] tracking-[-0.04em] ${jost.className}`}
                >
                  Nutritional Program for Wambugu Apples
                </h3>
                <p
                  className={`text-[14px] lg:text-[16px] line-clamp-4 font-[400] leading-[28px] tracking-[-0.03em] lg:tracking-[-0.04em] max-w-[360px] ${satoshi.className}`}
                >
                  Soil test is important to determine and understand fertilizer
                  requirements for your apple farm. Both organic and inorganic
                  fertilizers - foliar and basal are important to supply
                  nutrient needs for the plant. Read on to understand timing and
                  split application of fertilizers.
                </p>
                <div className="flex mt-[25px] lg:my-[20px] items-center gap-[9.17px]">
                  <span
                    className={`text-[16px] leading-[22px] tracking-[-0.03em] font-[700] text-[#2F9B4E] cursor-pointer ${satoshi.className}`}
                  >
                    Read More
                  </span>
                  <MdArrowForwardIos className="text-[#2F9B4E] w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white max-w-[347px] lg:min-w-[400px] h-[500] lg:h-[450px] box-content">
              <Image
                src="/guide-images/apples-two.png"
                alt=""
                width={399}
                height={209}
                className="rounded-t-md"
              />
              <div className="py-[15px] lg:py-[20px] px-[16px] lg:px-[20px] ">
                <h3
                  className={`font-[600] text-[16px] lg:text-[20px] leading-[24px] tracking-[-0.04em] ${jost.className}`}
                >
                  Nutritional Program for Wambugu Apples
                </h3>
                <p
                  className={`text-[14px] lg:text-[16px] line-clamp-4 font-[400] leading-[28px] tracking-[-0.03em] lg:tracking-[-0.04em] max-w-[360px] ${satoshi.className}`}
                >
                  Did you know the propagation story of the now popular Wambugu
                  apple? Learn how this superb and all weather apple triumphs
                  over other varieties and why you should choose it because of
                  its distinctive features.
                </p>
                <div className="flex mt-[25px] lg:my-[20px] items-center gap-[9.17px]">
                  <span
                    className={`text-[16px] leading-[22px] tracking-[-0.03em] font-[700] text-[#2F9B4E] cursor-pointer ${satoshi.className}`}
                  >
                    Read More
                  </span>
                  <MdArrowForwardIos className="text-[#2F9B4E] w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white max-w-[347px] lg:min-w-[400px] h-[500] lg:h-[450px] box-content">
              <Image
                src="/guide-images/apples-three.png"
                alt=""
                width={399}
                height={209}
                className="rounded-t-md"
              />
              <div className="py-[15px] lg:py-[20px] px-[16px] lg:px-[20px] ">
                <h3
                  className={`font-[600] text-[16px] lg:text-[20px] leading-[24px] tracking-[-0.04em] ${jost.className}`}
                >
                  Nutritional Program for Wambugu Apples
                </h3>
                <p
                  className={`text-[14px] lg:text-[16px] line-clamp-4 font-[400] leading-[28px] tracking-[-0.03em] lg:tracking-[-0.04em] max-w-[360px] ${satoshi.className}`}
                >
                  Chinzinga shares how recent floods in Zambia swept away her 2
                  acres of apples barely 2 months after planting. Learn more
                  about how farm insurance helps smallholder farmers and advice
                  from a farm insurance company on why smallholder farmers need
                  to consider insurance.
                </p>
                <div className="flex mt-[25px] lg:my-[20px] items-center gap-[9.17px]">
                  <span
                    className={`text-[16px] leading-[22px] tracking-[-0.03em] font-[700] text-[#2F9B4E] cursor-pointer ${satoshi.className}`}
                  >
                    Read More
                  </span>
                  <MdArrowForwardIos className="text-[#2F9B4E] w-4 h-4" />
                </div>
              </div>
            </div>
          </CarouselComponent>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-[35px] lg:pt-[80px] lg:pb-[70px] bg-white   w-full">
        <div className="max-w-[1440px]  mx-auto w-full ">
          <h2
            className={`text-center  font-[800] text-[23px] lg:text-[34px] leading-[34px] lg:leading-[43px] tracking-[-0.04em] text-[#2F9b4E] ${jost.className}`}
          >
            <span className="text-[#212121]">Current</span> Masterclasses
            Available
          </h2>
          <CarouselComponent show={show}>
            {masterClasses.map(
              (
                {
                  image,
                  author,
                  username,
                  userProfile,
                  title,
                  description,
                  likes,
                  views,
                  classStatus,
                  date,
                }: MasterClass,
                index
              ) => {
                return (
                  <MasterClassCard
                    image={image}
                    username={username}
                    userProfile={userProfile}
                    title={title}
                    description={description}
                    likes={likes}
                    views={views}
                    classStatus={classStatus}
                    date={date}
                    author={author}
                    key={index}
                  />
                );
              }
            )}
          </CarouselComponent>
        </div>
      </div>

      <Partners />

      <Footer />
    </main>
  );
}

const SingleCard: React.FC<Card> = ({ ...card }: Card) => {
  return (
    <div className="bg-[#FAFAFA] rounded-md pt-[22px] px-[20px]">
      <Image src={card.image!} alt="" width={24} height={24} />
      <h3
        className={`text-[16px] leading-[20px] tracking-tighter text-[#2F9B4E] font-[700] mt-[7px] ${jost.className}`}
      >
        {card.heading}
      </h3>
      <div className="mt-[5px]">
        <p
          className={`font-[400] text-[14px] leading-[28px] tracking-tighter text-[#212121]/70 ${satoshi.className}`}
        >
          {card.text}
        </p>
      </div>
    </div>
  );
};

const Partners = () => {
  return (
    <div className=" bg-[#F5F5F5] w-full">
      <div className="max-w-[1440px]  mx-auto flex flex-col items-start px-[15px] lg:px-[100px] ">
        <h2
          className={`text-start mt-[30px] lg:mt-[90px]  font-[800] text-[23px] lg:text-[34px] leading-[34px] lg:leading-[43px] tracking-[-0.04em] text-[#2F9b4E] ${jost.className}`}
        >
          <span className="text-[#212121]">Our</span> Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[70px] mt-[31px] mb-[91px]  items-center">
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
