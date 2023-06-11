"use client";

import Image from "next/image";
import { useState } from "react";
import localFont from "next/font/local";
import { Jost } from "next/font/google";

const jost = Jost({
  weight: ["600", "800"],
  style: "normal",
  subsets: ["latin"],
});

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Regular.otf",
      weight: "500",
    },
  ],
});

export type Card = {
  heading?: string;
  image?: string;
  text?: string;
};

export type MasterClass = {
  image?: string;
  title?: string;
  classStatus?: string;
  description?: string;
  username?: string;
  userProfile?: string;
  author?: string;
  views?: number;
  likes?: number;
  date?: string;
};

export default function Home() {
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  const masterClasses: MasterClass[] = [
    {
      image: "/guide-images/image-1.png",
      title: "Apple Nutrition Masterclass",
      classStatus: "Upcoming",
      description:
        "Join this live masterclass on 25 June 2023 to learn from Kate - The Apple Ambassador on the best practices to ensure your apple farm is well fertilized for optimal crop growth and production.",
      username: "The Apple Ambassador",
      userProfile: "/user.png",
      author: "Kate",
      views: 2773,
      likes: 73,
      date: "30/06/2023"
    },
    {
      image: "/guide-images/image-2.png",
      title: "Your Farm as a Business",
      classStatus: "Ongoing",
      description:
        "What’s the name of your farm? Do you view it as a business venture? Get expert advice on how you can transform your mindset to view your farm as a business.",
      username: "",
      userProfile: "/user.png",
      author: "Emmanuel Makoha",
      views: 2773,
      likes: 2773,
      date: "",
    },
    {
      image: "/guide-images/image-3.png",
      title: "Pest control in Apples",
      classStatus: "Ongoing",
      description:
        "Are you struggling with pests in your apple farm? Joan the agronomist shares intriguing tested and approved techniques to ensure your farm is free of pests all year round.",
      username: "The Agronomist",
      userProfile: "/user.png",
      author: "Joan",
      views: 2777,
      likes: 73,
      date: "",
    },
  ];

  const cards: Card[] = [
    {
      heading: "Farmers",
      image: "/people.jpg",
      text: "Connect and network with strategic players to learn and maximize productivity of your farm with sustainable farming techniques.",
    },
    {
      heading: "Agri-experts",
      image: "/tractor.png",
      text: "Join a network of new and experienced experts, grow your knowledge and help solve real on-farm challenges farmers face in their communities daily.",
    },
    {
      heading: "Agribusiness partners",
      image: "/profile-2user.png",
      text: "Access thousands of farmers and share your customized agribusiness solution to help farmers access quality farm inputs, market for their produce and financing for their farms.",
    },
    {
      heading: "Farm Insurance partners",
      image: "/shield-tick.png",
      text: "Monitor and help smallholder farmers increase their resilience and cope with devastating challenges in their crop and animal farms.",
    },
    {
      heading: "Farm Intelligence",
      image: "/light.png",
      text: "Get insights and make better decisions for your agribusiness venture. We collect accurate farm data to aid forecasting and ensure actionable and valuable insights.",
    },
    {
      heading: "Quality input suppliers",
      image: "/message-question.svg",
      text: "Access thousands of farmers to market and supply quality solutions for the farm problems aligned with sustainable farming practices",
    },
    {
      heading: "Aggregators",
      image: "/global.png",
      text: "After good harvests, farmers need a market. Connect with producers to aggregate and help farmers sell their produce locally and internationally.",
    },
  ];

  const discussions = [
    {
      likes: 19.3,
      name: "Emmauel",
      county: "Kajiado Couunty",
      country: "Kenya",
      flagImage: "",
      image: "",
      date: "",
      time: "",
      question:
        "What are the common challenges that apple farmers face and how do we solve them?",
      replies: [
        {
          answer: "Pest and disease management ",
          date: "",
          time: "",
        },
        {
          answer: "Climate variability ",
          date: "",
          time: "",
        },
        {
          answer: "Labor availability",
          date: "",
          time: "",
        },
        {
          answer: "Market demand and competition",
          date: "",
          time: "",
        },
        {
          answer: "Post-harvest handling and storage",
          date: "",
          time: "",
        },
      ],
    },
    {
      likes: 17.4,
      name: "Samuel",
      county: "Kajiado Couunty",
      country: "Kenya",
      flagImage: "",
      image: "",
      date: "",
      time: "",
      question:
        "What are the common challenges that apple farmers face and how do we solve them?",
      replies: [
        {
          answer: "Pest and disease management ",
          date: "",
          time: "",
        },
        {
          answer: "Climate variability ",
          date: "",
          time: "",
        },
        {
          answer: "Labor availability",
          date: "",
          time: "",
        },
        {
          answer: "Market demand and competition",
          date: "",
          time: "",
        },
        {
          answer: "Post-harvest handling and storage",
          date: "",
          time: "",
        },
      ],
    },
    {
      likes: 12.5,
      name: "Mariana",
      county: "Kajiado Couunty",
      country: "Kenya",
      flagImage: "",
      image: "",
      date: "",
      time: "",
      question:
        "What are the common challenges that apple farmers face and how do we solve them?",
      replies: [
        {
          answer: "Pest and disease management ",
          date: "",
          time: "",
        },
        {
          answer: "Climate variability ",
          date: "",
          time: "",
        },
        {
          answer: "Labor availability",
          date: "",
          time: "",
        },
        {
          answer: "Market demand and competition",
          date: "",
          time: "",
        },
        {
          answer: "Post-harvest handling and storage",
          date: "",
          time: "",
        },
      ],
    },
    {
      likes: 6.8,
      name: "Nsiah",
      county: "Kajiado Couunty",
      country: "Kenya",
      flagImage: "",
      image: "",
      date: "",
      time: "",
      question:
        "What are the common challenges that apple farmers face and how do we solve them?",
      replies: [
        {
          answer: "Pest and disease management ",
          date: "",
          time: "",
        },
        {
          answer: "Climate variability ",
          date: "",
          time: "",
        },
        {
          answer: "Labor availability",
          date: "",
          time: "",
        },
        {
          answer: "Market demand and competition",
          date: "",
          time: "",
        },
        {
          answer: "Post-harvest handling and storage",
          date: "",
          time: "",
        },
      ],
    },
  ];

  return (
    <main className=" min-h-screen flex flex-col items-start bg-[#FAFAFA] w-full max-w-[1440px] mx-auto ">
      <div className="bg-[#BFBFBF]/40 relative w-full max-w-[1440px] mx-auto h-[100px] flex justify-between items-center border-b-2 border-slate-600/20 pt-[17px] px-[15px] lg:px-[100px] ">
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
      <div
        className={`${
          showSideNav
            ? "-translate-x-2 transform transition-all duration-700"
            : " -translate-x-[130px] transform transition-all duration-500"
        } w-fit shadow-md lg:hidden absolute top-[70px] z-40 bg-white`}
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
        className={`bg-[#FAFAFA] flex flex-col justify-between  lg:flex-row w-full max-w-[1440px] mx-auto z-10 px-[15px] lg:px-[100px] gap-[150px]`}
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
        <div className="  flex flex-col md:flex-row items-center justify-center mt-[50px] lg:mt-[163px] mb-[75px] lg:mb-[130px] max-h-[330px] lg:h-[476px] max-w-[330px] lg:min-w-[476px] border border-slate-500">
          ANimation
        </div>
      </div>

      <div className="bg-white w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center px-[15px] lg:px-[100px] pb-[90px]">
        <h1
          className={`mt-[90px] mb-[30px] text-[23px] lg:text-[34px] leading-[33px] lg:leading-[43px] tracking-[-0.04em] font-[800] text-[#2F9B4E] ${jost.className}`}
        >
          <span className="text-[#212121] mr-2">Our</span>Communities
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
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

      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] lg:gap-[140px] bg-[#2F9B4E] min-h-[223px] px-[83px] lg:px-[160px] items-center py-[40px] lg:py-0">
        <div className="flex flex-col items-center justify-center">
          <span
            className={`text-[34px] leading-[40px] font-[800] text-white tracking-[-0.04em] ${jost.className}`}
          >
            20+
          </span>
          <p
            className={`font-[500] text-[18px] leading-[28px] text-white whitespace-nowrap tracking-[-0.04em] ${satoshi.className}`}
          >
            Active Farmers
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span
            className={`text-[34px] leading-[40px] font-[800] text-white tracking-[-0.04em] ${jost.className}`}
          >
            1,000+
          </span>
          <p
            className={`font-[500] text-[18px] leading-[28px] text-white whitespace-nowrap tracking-[-0.04em] ${satoshi.className}`}
          >
            Vibrant Communities
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span
            className={`text-[34px] leading-[40px] font-[800] text-white tracking-[-0.04em] ${jost.className}`}
          >
            2,100+
          </span>
          <p
            className={`font-[500] text-[18px] leading-[28px] text-white whitespace-nowrap tracking-[-0.04em] ${satoshi.className}`}
          >
            Cumulative years of experience
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span
            className={`text-[34px] leading-[40px] font-[800] text-white tracking-[-0.04em] ${jost.className}`}
          >
            5,000+
          </span>
          <p
            className={`font-[500] text-[18px] leading-[28px] text-white whitespace-nowrap tracking-[-0.04em] ${satoshi.className}`}
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
          <div className="pt-[10px] lg:pt-[30px] px-[12px] md:px-[50px] lg:px-[142px]  max-h-[460px] rounded-md no-scrollbar overflow-auto lg:scrollbar lg:scrollbar-thumb-slate-300 lg:scrollbar-w-3 lg:scrollbar-track-white lg:scrollbar-thumb-rounded-lg flex flex-col gap-[15px] ">
            <div className="flex">
              <div className="flex flex-col pt-[20px] px-[8px] lg:px-[15px] items-center justify-start bg-[#DBF3D9] w-[42px] lg:w-[64px] rounded-l-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[20px] h-[17px] text-[#2F9B4E]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
                <span
                  className={`text-[12px] lg:text-[16px] leading-[18px] font-[500] text-[#2F9B4E] tracking-[-0.04em] ${satoshi.className}`}
                >
                  19.3k
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[20px] h-[17px] text-[#2F9B4E]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div className="flex flex-col pt-[20px] pb-[21px] px-[12px] lg:pl-[20px] lg:pr-[30px] bg-[#FAFAFA] rounded-r-md ">
                <div className="flex gap-[5px]">
                  <Image
                    src="/user.png"
                    alt="prof"
                    width={18}
                    height={18}
                    className="w-[18px] lg:w-[22px] h-[18px] lg:h-[22px]"
                  />
                  <div className="flex gap-[5px] items-center">
                    <p
                      className={`text-[14px] lg:text-[16px] leading-[16px] lg:leading-[22px] font-[500] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
                    >
                      Emmanuel - Kajiado County, Kenya
                    </p>
                    <Image
                      src="/Flag_of_Kenya.png"
                      alt="flag"
                      width={21}
                      height={15}
                      className="w-[19px] lg:w-[21px] h-[14px] lg:h-[15px]"
                    />
                  </div>
                </div>
                <p
                  className={`text-[14px] lg:text-[20px] mt-[10px] leading-[24px] lg:leading-[31px] font-[600] text-[#212121]/90 tracking-[-0.03em] ${jost.className}`}
                >
                  What are the common challenges that apple farmers face and how
                  do we solve them?
                </p>
                {/* <Image
                  src="/fruit.png"
                  alt="photo"
                  width={724}
                  height={277}
                  className="hidden lg:block rounded-sm mt-[21px]"
                /> */}
                <div className="flex flex-row items-center justify-between mt-[21px]">
                  <div className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-[12.8px] lg:w-[20px] h-[12px] lg:h-[18px] text-[#212121]/70"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                    <p
                      className={`text-[#212121]/70 text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className} font-[500]`}
                    >
                      25 replies
                    </p>
                  </div>
                  <p
                    className={`text-[#212121]/70 text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className} font-[500]`}
                  >
                    15/4/2023 | 2.30pm
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col pt-[20px] px-[8px] lg:px-[15px] items-center justify-start bg-[#DBF3D9] w-[42px] lg:w-[64px] rounded-l-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[20px] h-[17px] text-[#2F9B4E]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
                <span
                  className={`text-[12px] lg:text-[16px] leading-[18px] font-[500] text-[#2F9B4E] tracking-[-0.04em] ${satoshi.className}`}
                >
                  19.3k
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[20px] h-[17px] text-[#2F9B4E]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div className="flex flex-col pt-[20px] pb-[21px] px-[12px] lg:pl-[20px] lg:pr-[30px] bg-[#FAFAFA] rounded-r-md ">
                <div className="flex gap-[5px]">
                  <Image
                    src="/user.png"
                    alt="prof"
                    width={18}
                    height={18}
                    className="w-[18px] lg:w-[22px] h-[18px] lg:h-[22px]"
                  />
                  <div className="flex gap-[5px] items-center">
                    <p
                      className={`text-[14px] lg:text-[16px] leading-[16px] lg:leading-[22px] font-[500] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
                    >
                      Emmanuel - Kajiado County, Kenya
                    </p>
                    <Image
                      src="/Flag_of_Kenya.png"
                      alt="flag"
                      width={21}
                      height={15}
                      className="w-[19px] lg:w-[21px] h-[14px] lg:h-[15px]"
                    />
                  </div>
                </div>
                <p
                  className={`text-[14px] lg:text-[20px] mt-[10px] leading-[24px] lg:leading-[31px] font-[600] text-[#212121]/90 tracking-[-0.03em] ${jost.className}`}
                >
                  What are the common challenges that apple farmers face and how
                  do we solve them?
                </p>
                {/* <Image
                  src="/fruit.png"
                  alt="photo"
                  width={724}
                  height={277}
                  className="hidden lg:block rounded-sm mt-[21px]"
                /> */}
                <div className="flex flex-row items-center justify-between mt-[21px]">
                  <div className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-[12.8px] lg:w-[20px] h-[12px] lg:h-[18px] text-[#212121]/70"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                    <p
                      className={`text-[#212121]/70 text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className} font-[500]`}
                    >
                      25 replies
                    </p>
                  </div>
                  <p
                    className={`text-[#212121]/70 text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className} font-[500]`}
                  >
                    15/4/2023 | 2.30pm
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col pt-[20px] px-[8px] lg:px-[15px] items-center justify-start bg-[#DBF3D9] w-[42px] lg:w-[64px] rounded-l-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[20px] h-[17px] text-[#2F9B4E]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
                <span
                  className={`text-[12px] lg:text-[16px] leading-[18px] font-[500] text-[#2F9B4E] tracking-[-0.04em] ${satoshi.className}`}
                >
                  19.3k
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[20px] h-[17px] text-[#2F9B4E]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div className="flex flex-col pt-[20px] pb-[21px] px-[12px] lg:pl-[20px] lg:pr-[30px] bg-[#FAFAFA] rounded-r-md ">
                <div className="flex gap-[5px]">
                  <Image
                    src="/user.png"
                    alt="prof"
                    width={18}
                    height={18}
                    className="w-[18px] lg:w-[22px] h-[18px] lg:h-[22px]"
                  />
                  <div className="flex gap-[5px] items-center">
                    <p
                      className={`text-[14px] lg:text-[16px] leading-[16px] lg:leading-[22px] font-[500] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
                    >
                      Emmanuel - Kajiado County, Kenya
                    </p>
                    <Image
                      src="/Flag_of_Kenya.png"
                      alt="flag"
                      width={21}
                      height={15}
                      className="w-[19px] lg:w-[21px] h-[14px] lg:h-[15px]"
                    />
                  </div>
                </div>
                <p
                  className={`text-[14px] lg:text-[20px] mt-[10px] leading-[24px] lg:leading-[31px] font-[600] text-[#212121]/90 tracking-[-0.03em] ${jost.className}`}
                >
                  What are the common challenges that apple farmers face and how
                  do we solve them?
                </p>
                <Image
                  src="/fruit.png"
                  alt="photo"
                  width={724}
                  height={277}
                  className="hidden lg:block rounded-sm mt-[21px]"
                />
                <div className="flex flex-row items-center justify-between mt-[21px]">
                  <div className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-[12.8px] lg:w-[20px] h-[12px] lg:h-[18px] text-[#212121]/70"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                    <p
                      className={`text-[#212121]/70 text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className} font-[500]`}
                    >
                      25 replies
                    </p>
                  </div>
                  <p
                    className={`text-[#212121]/70 text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className} font-[500]`}
                  >
                    15/4/2023 | 2.30pm
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col pt-[20px] px-[8px] lg:px-[15px] items-center justify-start bg-[#DBF3D9] w-[42px] lg:w-[64px] rounded-l-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[20px] h-[17px] text-[#2F9B4E]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
                <span
                  className={`text-[12px] lg:text-[16px] leading-[18px] font-[500] text-[#2F9B4E] tracking-[-0.04em] ${satoshi.className}`}
                >
                  19.3k
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[20px] h-[17px] text-[#2F9B4E]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div className="flex flex-col pt-[20px] pb-[21px] px-[12px] lg:pl-[20px] lg:pr-[30px] bg-[#FAFAFA] rounded-r-md ">
                <div className="flex gap-[5px]">
                  <Image
                    src="/user.png"
                    alt="prof"
                    width={18}
                    height={18}
                    className="w-[18px] lg:w-[22px] h-[18px] lg:h-[22px]"
                  />
                  <div className="flex gap-[5px] items-center">
                    <p
                      className={`text-[14px] lg:text-[16px] leading-[16px] lg:leading-[22px] font-[500] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
                    >
                      Emmanuel - Kajiado County, Kenya
                    </p>
                    <Image
                      src="/Flag_of_Kenya.png"
                      alt="flag"
                      width={21}
                      height={15}
                      className="w-[19px] lg:w-[21px] h-[14px] lg:h-[15px]"
                    />
                  </div>
                </div>
                <p
                  className={`text-[14px] lg:text-[20px] mt-[10px] leading-[24px] lg:leading-[31px] font-[600] text-[#212121]/90 tracking-[-0.03em] ${jost.className}`}
                >
                  What are the common challenges that apple farmers face and how
                  do we solve them?
                </p>
                <Image
                  src="/fruit.png"
                  alt="photo"
                  width={724}
                  height={277}
                  className="hidden lg:block rounded-sm mt-[21px]"
                />
                <div className="flex flex-row items-center justify-between mt-[21px]">
                  <div className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-[12.8px] lg:w-[20px] h-[12px] lg:h-[18px] text-[#212121]/70"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                    <p
                      className={`text-[#212121]/70 text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className} font-[500]`}
                    >
                      25 replies
                    </p>
                  </div>
                  <p
                    className={`text-[#212121]/70 text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className} font-[500]`}
                  >
                    15/4/2023 | 2.30pm
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col pt-[20px] px-[8px] lg:px-[15px] items-center justify-start bg-[#DBF3D9] w-[42px] lg:w-[64px] rounded-l-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[20px] h-[17px] text-[#2F9B4E]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
                <span
                  className={`text-[12px] lg:text-[16px] leading-[18px] font-[500] text-[#2F9B4E] tracking-[-0.04em] ${satoshi.className}`}
                >
                  19.3k
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[20px] h-[17px] text-[#2F9B4E]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div className="flex flex-col pt-[20px] pb-[21px] px-[12px] lg:pl-[20px] lg:pr-[30px] bg-[#FAFAFA] rounded-r-md ">
                <div className="flex gap-[5px]">
                  <Image
                    src="/user.png"
                    alt="prof"
                    width={18}
                    height={18}
                    className="w-[18px] lg:w-[22px] h-[18px] lg:h-[22px]"
                  />
                  <div className="flex gap-[5px] items-center">
                    <p
                      className={`text-[14px] lg:text-[16px] leading-[16px] lg:leading-[22px] font-[500] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
                    >
                      Emmanuel - Kajiado County, Kenya
                    </p>
                    <Image
                      src="/Flag_of_Kenya.png"
                      alt="flag"
                      width={21}
                      height={15}
                      className="w-[19px] lg:w-[21px] h-[14px] lg:h-[15px]"
                    />
                  </div>
                </div>
                <p
                  className={`text-[14px] lg:text-[20px] mt-[10px] leading-[24px] lg:leading-[31px] font-[600] text-[#212121]/90 tracking-[-0.03em] ${jost.className}`}
                >
                  What are the common challenges that apple farmers face and how
                  do we solve them?
                </p>
                {/* <Image
                  src="/fruit.png"
                  alt="photo"
                  width={724}
                  height={277}
                  className="hidden lg:block rounded-sm mt-[21px]"
                /> */}
                <div className="flex flex-row items-center justify-between mt-[21px]">
                  <div className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-[12.8px] lg:w-[20px] h-[12px] lg:h-[18px] text-[#212121]/70"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                    <p
                      className={`text-[#212121]/70 text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className} font-[500]`}
                    >
                      25 replies
                    </p>
                  </div>
                  <p
                    className={`text-[#212121]/70 text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className} font-[500]`}
                  >
                    15/4/2023 | 2.30pm
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col pt-[20px] px-[8px] lg:px-[15px] items-center justify-start bg-[#DBF3D9] w-[42px] lg:w-[64px] rounded-l-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[20px] h-[17px] text-[#2F9B4E]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
                <span
                  className={`text-[12px] lg:text-[16px] leading-[18px] font-[500] text-[#2F9B4E] tracking-[-0.04em] ${satoshi.className}`}
                >
                  19.3k
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[20px] h-[17px] text-[#2F9B4E]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div className="flex flex-col pt-[20px] pb-[21px] px-[12px] lg:pl-[20px] lg:pr-[30px] bg-[#FAFAFA] rounded-r-md ">
                <div className="flex gap-[5px]">
                  <Image
                    src="/user.png"
                    alt="prof"
                    width={18}
                    height={18}
                    className="w-[18px] lg:w-[22px] h-[18px] lg:h-[22px]"
                  />
                  <div className="flex gap-[5px] items-center">
                    <p
                      className={`text-[14px] lg:text-[16px] leading-[16px] lg:leading-[22px] font-[500] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
                    >
                      Emmanuel - Kajiado County, Kenya
                    </p>
                    <Image
                      src="/Flag_of_Kenya.png"
                      alt="flag"
                      width={21}
                      height={15}
                      className="w-[19px] lg:w-[21px] h-[14px] lg:h-[15px]"
                    />
                  </div>
                </div>
                <p
                  className={`text-[14px] lg:text-[20px] mt-[10px] leading-[24px] lg:leading-[31px] font-[600] text-[#212121]/90 tracking-[-0.03em] ${jost.className}`}
                >
                  What are the common challenges that apple farmers face and how
                  do we solve them?
                </p>
                <Image
                  src="/fruit.png"
                  alt="photo"
                  width={724}
                  height={277}
                  className="hidden lg:block rounded-sm mt-[21px]"
                />
                <div className="flex flex-row items-center justify-between mt-[21px]">
                  <div className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-[12.8px] lg:w-[20px] h-[12px] lg:h-[18px] text-[#212121]/70"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                    <p
                      className={`text-[#212121]/70 text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className} font-[500]`}
                    >
                      25 replies
                    </p>
                  </div>
                  <p
                    className={`text-[#212121]/70 text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className} font-[500]`}
                  >
                    15/4/2023 | 2.30pm
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col pt-[20px] px-[8px] lg:px-[15px] items-center justify-start bg-[#DBF3D9] w-[42px] lg:w-[64px] rounded-l-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[20px] h-[17px] text-[#2F9B4E]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
                <span
                  className={`text-[12px] lg:text-[16px] leading-[18px] font-[500] text-[#2F9B4E] tracking-[-0.04em] ${satoshi.className}`}
                >
                  19.3k
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[20px] h-[17px] text-[#2F9B4E]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div className="flex flex-col pt-[20px] pb-[21px] px-[12px] lg:pl-[20px] lg:pr-[30px] bg-[#FAFAFA] rounded-r-md ">
                <div className="flex gap-[5px]">
                  <Image
                    src="/user.png"
                    alt="prof"
                    width={18}
                    height={18}
                    className="w-[18px] lg:w-[22px] h-[18px] lg:h-[22px]"
                  />
                  <div className="flex gap-[5px] items-center">
                    <p
                      className={`text-[14px] lg:text-[16px] leading-[16px] lg:leading-[22px] font-[500] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
                    >
                      Emmanuel - Kajiado County, Kenya
                    </p>
                    <Image
                      src="/Flag_of_Kenya.png"
                      alt="flag"
                      width={21}
                      height={15}
                      className="w-[19px] lg:w-[21px] h-[14px] lg:h-[15px]"
                    />
                  </div>
                </div>
                <p
                  className={`text-[14px] lg:text-[20px] mt-[10px] leading-[24px] lg:leading-[31px] font-[600] text-[#212121]/90 tracking-[-0.03em] ${jost.className}`}
                >
                  What are the common challenges that apple farmers face and how
                  do we solve them?
                </p>
                {/* <Image
                  src="/fruit.png"
                  alt="photo"
                  width={724}
                  height={277}
                  className="hidden lg:block rounded-sm mt-[21px]"
                /> */}
                <div className="flex flex-row items-center justify-between mt-[21px]">
                  <div className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-[12.8px] lg:w-[20px] h-[12px] lg:h-[18px] text-[#212121]/70"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                    <p
                      className={`text-[#212121]/70 text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className} font-[500]`}
                    >
                      25 replies
                    </p>
                  </div>
                  <p
                    className={`text-[#212121]/70 text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className} font-[500]`}
                  >
                    15/4/2023 | 2.30pm
                  </p>
                </div>
              </div>
            </div>
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
          className={`mt-[15px] text-center max-w-[1091px] mx-[15px] lg:mx-auto text-[18px] leading-[32px] font-[500] text-white tracking-[-0.02em] ${satoshi.className}`}
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
        <div className="mt-[20px]  lg:mt-[30px] grid gap-[21px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-[15px] lg:mx-[100px] items-center">
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
        <div className="mt-[20px]  lg:mt-[30px] grid gap-[21px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-[15px] lg:mx-[100px] items-center">
          {masterClasses.map(({image,author, username, userProfile, title, description, likes, views, classStatus, date}: MasterClass, index) => {
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
              key={index} />
            )
          })}
        </div>
      </div>
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

const SlotsLeft = () => {
  return (
    <div
      className={`flex items-center gap-1 justify-start`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-[13px] lg:w-[17px] h-[13px] lg:h-[17px] text-[#FFB700] "
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
        />
      </svg>
      <p className={`text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.03em] font-[500] text-[#FFB700]  ${satoshi.className}`}>25 slots left</p>
      
    </div>
  );
};
const LikesViews = () => {
  return (
    <div className="flex justify-between gap-3 ">
      <span className={`flex items-end gap-1 `}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-[13px] lg:w-[17px] h-[13px] lg:h-[17px] text-[#FFB700] "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span
          className={`text-[12px] whitespace-nowrap  md:whitespace-normal  lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.03em] font-[500] text-[#FFB700]  ${satoshi.className}`}
        >
          2773 views
        </span>
      </span>

      <span className={`flex items-end gap-1`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-[13px] lg:w-[17px] h-[13px] lg:h-[17px] text-[#FFB700] "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
        <span
          className={`text-[12px] whitespace-nowrap md:whitespace-normal lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.03em] font-[500] text-[#FFB700]  ${satoshi.className}`}
        >
          2773 views
        </span>
      </span>
    </div>
  );
};
const MasterClassCard: React.FC<MasterClass> = ({...masterclass}: MasterClass) => {
  return (
    <div className="flex flex-col bg-[#FAFAFA] rounded-md max-w-[399px] max-h-[485px]">
            <div className=" rounded-t-md relative">
              <Image
                src={masterclass.image!}
                alt=""
                width={399}
                height={221}
                className="rounded-t-md relative "
              />
              <div className="absolute bottom-0 left-0 right-0 h-24  text-left bg-gradient-to-t from-black/40 flex items-end  ">
                <p className="pb-[15px] pl-[15px] text-white">
                  {masterclass.title}
                </p>
              </div>
            </div>
            <div className=" flex items-center justify-between px-[15px] pt-[16px]">
              <div className="flex items-center">
                <Image
                  src={masterclass.userProfile!}
                  alt=""
                  width={22}
                  height={22}
                  className="rounded-full w-[22px] h-[22px] "
                />
                <span
                  className={`text-[#212121]/70 text-[14px] ml-[8px] font-[400] leading-[18px] tracking-[-0.03em] ${satoshi.className}`}
                >
                  by{" "}
                  <span className="text-[#2F9B4E]">
                    {masterclass.author} - {masterclass.username}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2 bg-[#DBF3D9] w-fit h-[24px] rounded-[30px] py-[5px] px-[10px] ">
                <span className="h-2 w-2 bg-[#2F9B4E] rounded-full"></span>
                <span
                  className={`text-[14px]  leading-[14px] font-[500] tracking-[-0.04em] text-[#2F9B4E] ${satoshi.className}`}
                >
                  {masterclass.classStatus}
                </span>
              </div>
            </div>
            <p
              className={`text-[14px] overflow-hidden  max-w-fit max-h-fit lg:w-fit lg:max-w-[369px]  lg:min-h-[112px]  mb-[20px] px-[15px] pt-[18px]  lg:text-[16px] font-[500] leading-[28px] tracking-[-0.03em] lg:tracking-[-0.04em]  ${satoshi.className}`}
            >
             {masterclass.description}
            </p>

            <hr></hr>

            <div className=" min-mx-[15px] my-[15px] flex items-center gap-[17px]">
              <button
                className={`rounded-md whitespace-nowrap flex bg-[#2F9B4E] text-white py-[10px] lg:py-[13px] px-[18px] lg:px-[24px] font-[700] text-[14px] lg:text-[16px] leading-[19px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className}`}
              >
                Join $20/
                <span className="tex-[14px] text-white/70">person</span>
              </button>
              {
                masterclass.date === "" ? (
                  <LikesViews />
                ): 
                (
                  <SlotsLeft />
                )
              }
              
            </div>
          </div>
  )
}
