"use client";

import Image from "next/image";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { Card, MasterClass } from "../utils/types";
import { MasterClassCard } from "../components/MasterClass";
import { jost, satoshi } from "../utils/Fonts";
import { cards, discussions, masterClasses } from "../utils/data";
import { DiscussionCard } from "../components/DiscussionCard";

export default function Home() {
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };


  return (
    <main className=" min-h-screen flex flex-col items-start bg-[#FAFAFA] w-full max-w-[1440px] mx-auto ">
      <div className="fixed top-0 bg-[#F5F5F5] z-50 w-full max-w-[1440px] mx-auto h-[100px] flex justify-between items-center border-b-2 border-slate-600/20 pt-[17px] px-[15px] lg:px-[100px] ">
        <div className="flex gap-2 items-center ">
          <Image
            src="/menu.png"
            alt="menu"
            width={18}
            height={14}
            onClick={toggleSideNav}
            className="flex lg:hidden top-[5px] left-[3px] h-[14px] w-[18px] cursor-pointer"
          />
          <Image
            src="/logo-box.png"
            alt="Logo"
            priority
            width={44}
            height={50}
            className="object-contain w-[22.12px] h-[25.13px] md:w-[44px] md:h-[50px]"
          />
          <Image
            src="/logo.png"
            alt="Logo"
            priority
            width={123}
            height={38}
            className="object-contain w-[62.83px] h-[19.1px] md:w-[123px] md:h-[38px]"
          />
        </div>
        <div className="flex gap-5 items-center">
          <ul className="hidden lg:flex justify-between gap-3">
            <li className="text-[14px] leading-[18.9px] font-[500] text-[#212121]">
              About Us
            </li>
            <li className="text-[14px] leading-[18.9px] font-[500] text-[#212121]">
              Blog
            </li>
            <li className="text-[14px] leading-[18.9px] font-[500] text-[#212121]">
              Products
            </li>
            <li className="text-[14px] leading-[18.9px] font-[500] text-[#212121]">
              Events
            </li>
            <li className="text-[14px] leading-[18.9px] font-[500] text-[#212121]">
              Contact us
            </li>
            <li className="text-[14px] leading-[18.9px] font-[500] text-[#2F9B4E]">
              Partner with us
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <button className="flex items-center text-white justify-center py-[10px] px-[20px] gap-[10px] w-[78px] md:w-[88px] h-[33px] md:h-[39px] bg-[#2F9B4E] rounded-[3px] text-[14px] whitespace-nowrap">
              Sing Up
            </button>
            <button className="flex items-center text-[#2F9B4E] justify-center py-[10px] px-[20px] gap-[10px] w-[78px] h-[39px] bg-[#DBF3D9] rounded-[3px] text-[14px] whitespace-nowrap">
              Log In
            </button>
          </div>
        </div>
      </div>

      {/* side nav bar */}
      <div
        className={`${
          showSideNav
            ? "-translate-x-2 transform transition-all duration-700"
            : " -translate-x-[130px] transform transition-all duration-500"
        } w-fit shadow-md lg:hidden sticky top-[100px] z-40 bg-white`}
      >
        <ul className="w-full px-3 py-1 flex flex-col gap-4 h-auto">
          <li
            onClick={() => setShowSideNav(false)}
            className="cursor-pointer text-[14px] leading-[18.9px] font-[500] text-[#212121]"
          >
            About Us
          </li>
          <li
            onClick={() => setShowSideNav(false)}
            className="cursor-pointer text-[14px] leading-[18.9px] font-[500] text-[#212121]"
          >
            Blog
          </li>
          <li
            onClick={() => setShowSideNav(false)}
            className="cursor-pointer text-[14px] leading-[18.9px] font-[500] text-[#212121]"
          >
            Products
          </li>
          <li
            onClick={() => setShowSideNav(false)}
            className="cursor-pointer text-[14px] leading-[18.9px] font-[500] text-[#212121]"
          >
            Events
          </li>
          <li
            onClick={() => setShowSideNav(false)}
            className="cursor-pointer text-[14px] leading-[18.9px] font-[500] text-[#212121]"
          >
            Contact us
          </li>
          <li
            onClick={() => setShowSideNav(false)}
            className="cursor-pointer text-[14px] leading-[18.9px] font-[500] text-[#2F9B4E]"
          >
            Partner with us
          </li>
        </ul>
      </div>

      <div
        className={`bg-[#FAFAFA] -mt-[100px] flex flex-col justify-between  lg:flex-row w-full max-w-[1440px] mx-auto z-10 px-[15px] lg:px-[100px] gap-[150px]`}
      >
        <div className=" w-full lg:min-w-[607px] mt-[60px] lg:mt-[258px] min-h-[220px]  ">
          <p
            className={`text-[23px] md:text-[34px] text-[#212121] tracking-[-0.04em] leading-[30px] md:leading-[48px] text-start font-[800] ${jost.className}`}
          >
            Make important connections to improve your{" "}
            <span className="text-[#2F9B4E]">Apple farming</span> experience
          </p>
          <p
            className={`mt-[10px] md:mt-[20px] text-[16px] md:text-[18px] leading-[27px] tracking-[-0.02em] md:leading-[24px] font-[500] text-[#212121]/70 ${satoshi.className}`}
          >
            Every farmer needs a community for a successful farming venture
          </p>
          <button
            className={`bg-[#2F9B4E] rounded-md py-[14px] px-[24px] flex items-center justify-center mt-[40px] text-white text-center text-[16px] tracking-[-0.04em] leading-[22px] font-[700]  ${satoshi.className}`}
          >
            Join Community
          </button>
        </div>
        <div className="  flex flex-col md:flex-row items-center justify-center mt-[50px] lg:mt-[163px] mb-[75px] lg:mb-[130px] max-h-[330px] lg:max-h-[476px] max-w-[330px] lg:max-w-[476px] border border-slate-500">
          ANimation
        </div>
      </div>

      <div className="bg-white w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center px-[15px] lg:px-[100px] pb-[90px]">
        <h1
          className={`mt-[90px] mb-[30px] text-[23px] lg:text-[34px] leading-[33px] lg:leading-[43px] tracking-[-0.04em] font-[800] text-[#2F9B4E] ${jost.className}`}
        >
          <span className="text-[#212121] mr-2">Our</span>Communities
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
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

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] bg-[#2F9B4E] min-h-[223px] py-[40px] lg:py-0 justify-center lg:px-[160px]">
        <div className="flex flex-col items-center justify-center w-full">
          <span className={`text-[34px]  leading-[40px] font-[800] text-white tracking-[-0.04em] ${jost.className}`}
          >
            20+
          </span>
          <p className={`font-[500] text-[18px] w-[100%] text-center leading-[28px] text-white whitespace-nowrap tracking-[-0.04em] ${satoshi.className}`}
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
            className={`font-[500] w-[100%] text-center text-[18px] leading-[28px] text-white whitespace-nowrap tracking-[-0.04em] ${satoshi.className}`}
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
            className={`font-[500] w-[100%] text-center text-[18px] leading-[28px] text-white whitespace-nowrap tracking-[-0.04em] ${satoshi.className}`}
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
            className={`font-[500] w-[100%] text-center text-[18px] leading-[28px] text-white whitespace-nowrap tracking-[-0.04em] ${satoshi.className}`}
          >
            Discussions to learn from
          </p>
        </div>
      </div>

      <div className="bg-[#FAFAFA] flex flex-col items-center justify-center w-full max-w-[1440px] mx-auto ">
        <span
          className={`mt-[45px] lg:mt-[80px] font-[800] text-[23px] lg:text-[34px] leading-[33px] lg:leading-[43px] tracking-[-0.04em] text-[#2F9B4E] ${jost.className}`}
        >
          <span className="text-[#212121]">Popular</span> Community Discussions
        </span>
        <div className="mt-[20px] bg-white md:mx-[10px] lg:mx-[160px]  max-w-full">
          <div className="pt-[10px] lg:pt-[30px] px-[12px] md:px-[50px] xl:px-[142px]  max-h-[460px] rounded-md no-scrollbar overflow-auto lg:scrollbar lg:scrollbar-thumb-slate-300 lg:scrollbar-w-3 lg:scrollbar-track-white lg:scrollbar-thumb-rounded-lg flex flex-col gap-[15px] ">
            {
              discussions.map((discussion, indx) => {
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
                )
              })
            }
         
          </div>
        </div>
      </div>

      <div className="bg-[#2F9B4E] w-full max-w-[1440px] mx-auto flex flex-col  mt-[140px] pb-[60px] ">
        <h2
          className={`font-[800] text-[34px] leading-[43px] mt-[60px] text-white tracking-tighter text-center ${jost.className}`}
        >
          Our Impact
        </h2>
        <p
          className={` text-center max-w-[1091px] mx-[15px] lg:mx-auto text-[18px] leading-[32px] font-[500] text-white tracking-[-0.02em] ${satoshi.className}`}
        >
          We are committed to making a positive and lasting impact in the world
          through our work.We believe by aligning our agenda with the United
          Nations 2030 Sustainable Development Goals, we will be able to
          contribute to a more sustainable and equitable future for all.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 items-center justify-between gap-[78px] mt-[50px] lg:mt-[92px] mx-[35px] lg:mx-[70px] ">
          <div className="flex flex-col items-center justify-center gap-[19px]">
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
          <div className="flex flex-col items-center justify-center gap-[19px]">
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
          <div className="flex flex-col items-center justify-center gap-[19px]">
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
          <div className="flex flex-col items-center justify-center gap-[19px]">
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
          <div className="flex flex-col items-center justify-center gap-[19px]">
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
          <div className="flex flex-col items-center justify-center gap-[19px]">
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
          <div className="flex flex-col items-center justify-center gap-[19px]">
            <Image src="/life.png" alt="" width={61} height={60} className="" />
            <p
              className={`font-[500] text-[16px] lg:text-[18px] leading-[28px] tracking-[-0.04em] text-white max-w-[130px] text-center ${satoshi.className}`}
            >
              Life on Land
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full py-[35px] lg:py-[80px]">
        <h2
          className={`text-center  font-[800] text-[23px] lg:text-[34px] leading-[34px] lg:leading-[43px] tracking-[-0.04em] text-[#2F9b4E] ${jost.className}`}
        >
          <span className="text-[#212121]">Popular</span> Guides & Tutorials
        </h2>
        <div className="mt-[20px]  lg:mt-[30px] grid gap-[21px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-[15px] lg:mx-[100px] items-center">
          <div className="flex flex-col bg-white">
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
                className={`text-[14px] lg:text-[16px] font-[500] leading-[28px] tracking-[-0.03em] lg:tracking-[-0.04em] max-w-[360px] ${satoshi.className}`}
              >
                Soil test is important to determine and understand fertilizer
                requirements for your apple farm. Both organic and inorganic
                fertilizers - foliar and basal are important to supply nutrient
                needs for the plant. Read on to understand timing and split
                application of fertilizers.
              </p>
              <div className="flex mt-[25px] lg:my-[20px] items-center gap-[9.17px]">
                <span
                  className={`text-[16px] leading-[22px] tracking-[-0.03em] font-[700] text-[#2F9B4E] cursor-pointer ${satoshi.className}`}
                >
                  Read More
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="text-[#2F9B4E] w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white">
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
                className={`text-[14px] lg:text-[16px] font-[500] leading-[28px] tracking-[-0.03em] lg:tracking-[-0.04em] max-w-[360px] ${satoshi.className}`}
              >
                Soil test is important to determine and understand fertilizer
                requirements for your apple farm. Both organic and inorganic
                fertilizers - foliar and basal are important to supply nutrient
                needs for the plant. Read on to understand timing and split
                application of fertilizers.
              </p>
              <div className="flex mt-[25px] lg:my-[20px] items-center gap-[9.17px]">
                <span
                  className={`text-[16px] leading-[22px] tracking-[-0.03em] font-[700] text-[#2F9B4E] cursor-pointer ${satoshi.className}`}
                >
                  Read More
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="text-[#2F9B4E] w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white">
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
                className={`text-[14px] lg:text-[16px] font-[500] leading-[28px] tracking-[-0.03em] lg:tracking-[-0.04em] max-w-[360px] ${satoshi.className}`}
              >
                Soil test is important to determine and understand fertilizer
                requirements for your apple farm. Both organic and inorganic
                fertilizers - foliar and basal are important to supply nutrient
                needs for the plant. Read on to understand timing and split
                application of fertilizers.
              </p>
              <div className="flex mt-[25px] lg:my-[20px] items-center gap-[9.17px]">
                <span
                  className={`text-[16px] leading-[22px] tracking-[-0.03em] font-[700] text-[#2F9B4E] cursor-pointer ${satoshi.className}`}
                >
                  Read More
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="text-[#2F9B4E] w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-[35px] lg:pt-[80px] lg:pb-[70px] bg-white w-full">
        <h2
          className={`text-center  font-[800] text-[23px] lg:text-[34px] leading-[34px] lg:leading-[43px] tracking-[-0.04em] text-[#2F9b4E] ${jost.className}`}
        >
          <span className="text-[#212121]">Current</span> Masterclasses
          Available
        </h2>
        <div className="mt-[20px]  lg:mt-[30px] grid gap-[21px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-[15px] lg:mx-[100px] items-center">
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
          className={`font-[500] text-[14px] leading-[28px] tracking-tighter text-[#212121]/70 ${satoshi.className}`}
        >
          {card.text}
        </p>
      </div>
    </div>
  );
};

const Partners = () => {
  return (
    <div className=" bg-[#F5F5F5] flex flex-col items-start px-[15px] lg:px-[100px] w-full">
      <h2
        className={`text-center mt-[30px] lg:mt-[90px]  font-[800] text-[23px] lg:text-[34px] leading-[34px] lg:leading-[43px] tracking-[-0.04em] text-[#2F9b4E] ${jost.className}`}
      >
        <span className="text-[#212121]">Our</span> Partners
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[70px] mt-[31px] mb-[91px]  items-center">
        <Image
          src="/partners/wefarm.png"
          alt=""
          width={164}
          height={38}
          className=""
        />
        <Image
          src="/partners/equity.png"
          alt=""
          width={56}
          height={40}
          className=""
        />
        <Image
          src="/partners/kcb.png"
          alt=""
          width={106}
          height={38}
          className=""
        />
        <Image
          src="/partners/tridge.png"
          alt=""
          width={140}
          height={22}
          className=""
        />
        <Image
          src="/partners/google.png"
          alt=""
          width={116}
          height={40}
          className=""
        />
      </div>
    </div>
  );
};

