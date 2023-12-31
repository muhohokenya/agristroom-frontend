"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { DiscussionCard } from "../components/DiscussionCard";
import { Footer } from "../components/Footer";
import { LikesViews } from "../components/LikesViews";
import Navbar from "../components/Navbar";
import { SlotsLeft } from "../components/SlotsLeft";
import ResponsiveDemo from "../components/carousel/CarouselDemo";
import { SearchContext } from "../context/SearchState";
import useGetCurrentUser from "../context/current-user";
import { jost, satoshi } from "../fonts/Fonts";
import { useAppDispatch, useAppSelector } from "../hooks/react-redux-hooks";
import { ManagedUI } from "../hooks/useModalContext";
import { TypePhase, useTypedSuperpower } from "../hooks/useTypedWords";
import { cards, guides, masterClassesData } from "../lib/data/data";
import { cn } from "../lib/utils";
import { getPosts } from "../redux/actions/getPosts.action";
import { Card, Guide, MasterClass, Post } from "../types/types";

export default function Home() {
  const texts = ["Passion Farming", "Avocado Farming", "Dragon Fruit farming", "Apple farming"]
  const { setSearchedValue } = useContext(SearchContext);
  const { setOpenModal } = useContext(ManagedUI);
  const router = useRouter();
  const dispatch = useAppDispatch()
  useGetCurrentUser()
  const post = useAppSelector((state) => state.post);
  const { typedSuperpower, selectedSuperpower, phase, resume } =
    useTypedSuperpower(texts)

  //state
  const [show, setShow] = useState(3);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [communityCards, setCommunityCards] = useState<Card[]>([]);
  const [popularGuides, setGuides] = useState<Card[]>([]);
  const [masterClasses, SetMasterClasses] = useState<MasterClass[]>([]);

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

  useEffect(() => {
    setCommunityCards(cards);
    setGuides(guides);
    SetMasterClasses(masterClassesData);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      let res: any = await dispatch(getPosts());
      setPosts(res.payload.posts);
      setLoading(false);
    };
    fetchPosts();
  }, [dispatch]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedValue({
      searchedValue: e.target.value
    })
  }

  const [currentIndexOne, setCurrentIndexOne] = useState(0)
  const [currentIndexTwo, setCurrentIndexTwo] = useState(0)
  const [currentIndexThree, setCurrentIndexThree] = useState(0)
  const [currentIndexFour, setCurrentIndexFour] = useState(0)

  const animationOne = [
    {
      image: "/svgs/communities/farmer2.svg",
      text: "Connect and network with strategic players to learn and maximize productivity of your farm with sustainable farming techniques."
    },
    {
      image: "/svgs/communities/agri-expert.svg",
      text: "Join a network of new and experienced experts, grow your knowledge and help solve real on-farm challenges farmers face in their communities daily."
    },
  ]
  const animationTwo = [

    {
      image: "/svgs/communities/smart-farm.svg",
      text: "Get insights and make better decisions for your agribusiness venture. We collect accurate farm data to aid forecasting and ensure actionable and valuable insights."
    },
    {
      image: "/svgs/communities/supplier.svg",
      text: "Access thousands of farmers to market and supply quality inputs for the farm problems aligned with sustainable farming practices."
    },

  ]
  const animationThree = [
    {
      image: "/svgs/communities/off-takers.svg",
      text: "Connect with producers to aggregate and help farmers sell their produce locally and internationally"
    },
    {
      image: "/svgs/communities/agri-processors.svg",
      text: "We partner with innovative players to transform farm produce through value addition and help farmers meet market demands, unlock new opportunities and reduce food wastage."
    },

  ]
  const animationFour = [
    {
      image: "/svgs/communities/financers2.svg",
      text: "Meet the unique financial needs in the farming sector and fuel growth through tailored financial solutions and expert guidance."
    },
    {
      image: "/svgs/communities/research.svg",
      text: "Bridge the gap between research and impactful policies for ag advancement. Collaborate with us and promote sustainable farming practices to ensure food security for present and future generations."
    },
    {
      image: "/svgs/communities/investors.svg",
      text: "Connect with promising ag ventures and get valuable insights and expertise to navigate and strategically invest in the dynamic agricultural environment."
    },
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexOne((prevIndex) => prevIndex === animationOne.length - 1 ? 0 : prevIndex + 1);
    }, 3000)
    return () => clearInterval(interval);
  }, [animationOne.length, currentIndexOne])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexTwo((prevIndex) => prevIndex === animationTwo.length - 1 ? 0 : prevIndex + 1);
    }, 3000)
    return () => clearInterval(interval);
  }, [animationTwo.length, currentIndexTwo])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexThree((prevIndex) => prevIndex === animationThree.length - 1 ? 0 : prevIndex + 1);
    }, 3000)
    return () => clearInterval(interval);
  }, [animationThree.length, currentIndexThree])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexFour((prevIndex) => prevIndex === animationFour.length - 1 ? 0 : prevIndex + 1);
    }, 3000)
    return () => clearInterval(interval);
  }, [animationFour.length, currentIndexFour])

  return (
    <main>
      <Navbar />
      <div className="bg-[#FAFAFA] w-full">
        <div className="max-w-[1440px] mx-auto w-full">
          <div
            className={`w-full mt-[100px] -z-50 pt-[50px] flex flex-col justify-between  lg:flex-row lg:items-center px-[15px] lg:px-[100px] gap-[50px] lg:gap-[100px]`}
          >
            <div className=" w-full   lg:w-[50%] lg:min-w-[607px] mt-[10px] lg:mt-[58px] min-h-[220px] lg:mb-[75px] ">
              <p
                className={`text-[23px]  relative md:text-[34px] text-[#212121] tracking-[-0.04em] leading-[30px] md:leading-[48px] text-start font-[800] ${jost.className}`}
              >
                Make important connections to improve your {
                  (
                    <span className={cn('text-[#2F9B4E] pt-4 pb-12 min-h-[10rem]', {
                      ['end-cursor']: phase !== TypePhase.Deleting,
                      ['blinking']: phase === TypePhase.Pausing,
                    })}
                      aria-label={selectedSuperpower}>{typedSuperpower}</span>
                  )
                }
                <span className="ml-1">experience</span>
              </p>
              <p
                className={`mt-[10px] md:mt-[20px] text-[16px] md:text-[18px] leading-[27px] tracking-[-0.02em] md:leading-[24px] font-[400] text-[#212121]/70 ${satoshi.className}`}
              >
                Every farmer needs a community for a successful farming venture
              </p>
              <Link
                href="/auth/signup"
                onClick={() => {
                  setOpenModal(true);
                  router.push("/auth/signup");
                }}
                className={`bg-[#2F9B4E] w-fit cursor-pointer rounded-md py-[14px] px-[24px] flex items-center justify-center mt-[40px] text-white text-center text-[16px] tracking-[-0.04em] leading-[22px] font-[700]  ${satoshi.className}`}
              >
                Join Community
              </Link>
            </div>
            <div className="w-full  lg:w-[50%] flex items-center justify-center">
              <div className="relative  border-1 flex flex-col md:flex-row  mt-[50px] lg:mt-[50px] mb-[75px] lg:mb-[130px] h-[330px]  lg:h-[476px]  sm:w-[330px] lg:w-[476px] border border-[#DBF3D9] rounded-full">
                <div className="m-[42px] lg:m-[61px] relative border border-[#DBF3D9] rounded-full h-[245px] lg:h-[354px] w-[245px] lg:w-[354px] ">
                  {/* animation one */}
                  <div className="absolute transition-all w-full ease-in-out duration-1000  top-28 lg:top-44 -left-8 lg:-left-10">
                    <div className=" bg-[#DBF3D9] transition-all ease-in-out duration-500  rounded-full w-[60px] h-[60px] flex items-center justify-center">
                      <Image
                        src={animationOne[currentIndexOne]?.image!}
                        alt="Logo"
                        priority
                        width={44}
                        height={44}
                        className="object-contain w-[44px] h-[44px] transition-opacity ease-in-out duration-500 "
                      />
                    </div>
                    <p
                      className={`absolute line-clamp-3 top-[70px] left-1 max-w-[150px] lg:max-w-[300px] ease-in-out duration-500  text-center lg:mx-auto text-[8px] lg:text-[11px] leading-[10px] lg:leading-[16px] font-[500] text-[#212121]/80 tracking-[-0.04em] lg:tracking-[-0.02em]`}
                    >
                      {animationOne[currentIndexOne]?.text}
                    </p>
                  </div>

                  {/* animation two */}
                  <div className="absolute -bottom-5 right-16 ">
                    <div className=" w-[60px]  h-[60px] bg-[#DBF3D9] rounded-full flex items-center justify-center ">
                      <Image
                        src={animationTwo[currentIndexTwo]?.image}
                        alt="Logo"
                        priority
                        width={44}
                        height={44}
                        className="object-contain w-[44px] h-[44px] "
                      />
                    </div>
                    <p
                      className={`max-w-[150px] lg:max-w-[300px] absolute line-clamp-3 top-[60px] w-[230px] text-center lg:mx-auto text-[8px] lg:text-[11px] leading-[10px] lg:leading-[16px] font-[500] text-[#212121]/80 tracking-[-0.04em]`}
                    >
                      {animationTwo[currentIndexTwo]?.text}
                    </p>

                  </div>

                  {/* animation three */}
                  <div className="absolute -right-4 top-24">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#DBF3D9] flex items-center justify-center">
                      <Image
                        src={animationThree[currentIndexThree]?.image}
                        alt="Logo"
                        priority
                        width={44}
                        height={44}
                        className="object-contain w-[44px]  h-[44px]"
                      />
                    </div>
                    <p
                      className={`max-w-[120px] lg:max-w-[300px] absolute line-clamp-3 top-[60px] w-[230px] -left-10  text-center lg:mx-auto text-[8px] lg:text-[11px] leading-[10px] lg:leading-[16px] font-[500] text-[#212121]/80 tracking-[-0.04em] lg:tracking-[-0.02em]`}
                    >
                      {animationThree[currentIndexThree]?.text}
                    </p>

                  </div>

                  {/* animation four */}
                  <div className="absolute -top-12 left-24" >
                    <div className=" bg-[#DBF3D9] rounded-full w-[60px] h-[60px] flex items-center justify-center">
                      <Image
                        src={animationFour[currentIndexFour]?.image}
                        alt="Logo"
                        priority
                        width={44}
                        height={44}
                        className="object-contain w-[44px] h-[44px]"
                      />
                    </div>
                    <p
                      className={`max-w-[150px] lg:max-w-[300px] absolute line-clamp-3 top-[60px] lg:top-[60px] w-[230px] left-2  text-center lg:mx-auto text-[8px] lg:text-[11px] leading-[10px] lg:leading-[16px] font-[500] text-[#212121]/80 tracking-[-0.04em] lg:tracking-[-0.02em]`}
                    >
                      {animationFour[currentIndexFour]?.text}
                    </p>
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

      <div className="bg-white w-full lg:px-[100px] pb-[90px]">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col items-center justify-center lg:px-[70px]">
          <h1
            className={`mt-[90px] mb-[30px] text-[23px] lg:text-[34px] leading-[33px] lg:leading-[43px] tracking-[-0.04em] font-[800] text-[#2F9B4E] ${jost.className}`}
          >
            <span className="text-[#212121] mr-2">Our</span>Communities
          </h1>
          <ResponsiveDemo
            values={communityCards}
            template={SingleCardTemplate}
          />
        </div>
      </div>

      <div className="w-full bg-[#2F9B4E]">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="w-full ">
            <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-4 min-h-[223px] py-[40px] lg:py-0">
              <div className="flex flex-col items-center justify-center w-full">
                <span
                  className={`text-[34px]  leading-[40px] font-[800] text-white tracking-[-0.04em] ${jost.className}`}
                >
                  20+
                </span>
                <p
                  className={`font-[400] text-[14px] lg:text-[18px] w-[100%] text-center leading-[28px] text-white whitespace-nowrap tracking-[-0.04em] ${satoshi.className}`}
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
                  className={`font-[400] w-[100%] text-center text-[14px] lg:text-[18px] leading-[28px] text-white whitespace-nowrap tracking-[-0.04em] ${satoshi.className}`}
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
                  className={`font-[400] w-[100%] text-center text-[14px] lg:text-[18px] leading-[20px] lg:leading-[28px] text-white whitespace-normal lg:whitespace-nowrap tracking-[-0.04em] ${satoshi.className}`}
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
                  className={`font-[400] w-[100%] text-center text-[14px] lg:text-[18px] leading-[28px] text-white whitespace-normal lg:whitespace-nowrap tracking-[-0.04em] ${satoshi.className}`}
                >
                  Discussions to learn from
                </p>
              </div>
            </div>
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
          <div className="flex items-center w-full lg:w-[500px] max-w-[800px] mx-auto justify-center py-2 px-3">
            <input onChange={onInputChange} className="w-full lg:w-[500px] px-2 h-[40px] outline-0 ring-0 border border-[#2F9B4E] focus:outline-0 focus:ring-0 rounded-l-[3px]" />
            <button onClick={() => {
              router.push("/questions")
            }} className="flex items-center text-white justify-center py-[10px] px-[20px] gap-[10px] w-[78px] md:w-[88px] h-[40px] bg-[#2F9B4E] rounded-r-[3px] text-[14px] whitespace-nowrap">
              Search
            </button>
          </div>
          <div className="mt-[20px] bg-white md:mx-[10px] lg:mx-[150px] w-full h-full ">
            {loading && (
              <div className=" w-full flex items-center justify-center mt-20  ">
                <div className="w-full mx-auto flex flex-col items-center justify-center my-36 ">
                  <FaSpinner className="animate-spin h-8 w-8 text-[#2F9B4E] text-center" />
                  <h2 className="text-center text-[18px] font-[600] mt-4">
                    Loading Posts....
                  </h2>
                </div>
              </div>
            )}

            {
              posts?.length === 0 && loading === false ? (
                <div className="flex w-full items-center mt-5 justify-center pb-10 h-full bg-white ">
                  <div className="flex py-2 px-4 flex-col items-center justify-center gap-3 shadow-md border border-[#2F9B4E] rounded-md">
                    <BsFillExclamationCircleFill className="text-[#2F9B4E] w-10 h-10" />
                    <h1>Questions Were Not Found!!!!</h1>
                  </div>
                </div>
              ) : (
                <div className="py-[10px] lg:pt-[30px] px-[12px] md:px-[50px] xl:px-[142px]  max-h-[500px] rounded-md no-scrollbar overflow-auto lg:scrollbar lg:scrollbar-thumb-slate-300 lg:scrollbar-w-3 lg:scrollbar-track-white lg:scrollbar-thumb-rounded-lg flex flex-col gap-[15px] ">
                  {posts?.map((post, indx) => {
                    return (
                      <DiscussionCard
                        key={indx}
                        post={post}
                      />
                    );
                  }).slice(0, 6)}
                </div>
              )
            }
          </div>
        </div>
      </div>

      <div className="bg-white w-full">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col  mt-[140px] pb-[60px] ">
          <h2
            className={`font-[800] text-[34px] leading-[43px] mt-[60px] text-slate-900 tracking-tighter text-center ${jost.className}`}
          >
            Our Impact
          </h2>
          <p
            className={` text-center max-w-[1091px] mx-[15px] lg:mx-auto text-[18px] leading-[32px] font-[400] text-slate-900 tracking-[-0.01em] ${satoshi.className}`}
          >
            We are committed to making a positive and lasting impact in the
            world through our work. We believe by aligning our agenda with the
            United Nations 2030 Sustainable Development Goals, we will be able
            to contribute to a more sustainable and equitable future for all.
          </p>

          <div className="flex flex-wrap w-full items-center justify-center gap-[25px] mt-[30px]">
            <div className="flex flex-col items-center justify-center gap-[19px]  !max-w-[250px]">
              <Image
                src="/impact/svg/poverty.svg"
                alt=""
                width={150}
                height={150}
                className="w-[150px] h-[150px]"
              />

            </div>
            <div className="flex flex-col items-center justify-center gap-[19px]  !max-w-[250px]">
              <Image
                src="/impact/svg/hunger.svg"
                alt=""
                width={150}
                height={150}
                className="w-[150px] h-[150px]"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-[19px]  !max-w-[250px]">
              <Image
                src="/impact/svg/health.svg"
                alt=""
                width={150}
                height={150}
                className="w-[150px] h-[150px]"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-[19px]  !max-w-[250px]">
              <Image
                src="/impact/svg/partnership.svg"
                alt=""
                width={150}
                height={150}
                className="w-[150px] h-[150px]"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-[19px]  !max-w-[250px]">
              <Image
                src="/impact/svg/education.svg"
                alt=""
                width={150}
                height={150}
                className="w-[150px] h-[150px]"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-[19px]  !max-w-[250px]">
              <Image
                src="/impact/svg/climate.svg"
                alt=""
                width={150}
                height={150}
                className="w-[150px] h-[150px]"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-[19px]  !max-w-[250px]">
              <Image
                src="/impact/svg/land.svg"
                alt=""
                width={150}
                height={150}
                className="w-[150px] h-[150px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col justify-center items-center w-full py-[35px] lg:py-[80px]">
        <div className=" max-w-[1440px]  mx-auto w-full">
          <h2
            className={`text-center  font-[800] text-[23px] lg:text-[34px] leading-[34px] lg:leading-[43px] tracking-[-0.04em] text-[#2F9b4E] ${jost.className}`}
          >
            <span className="text-[#212121]">Popular</span> Guides & Tutorials
          </h2>
          <ResponsiveDemo
            values={popularGuides}
            template={popularGuideTemplate}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-[35px] lg:pt-[80px] lg:pb-[70px] bg-white w-full">
        <div className="max-w-[1440px]  mx-auto w-full ">
          <h2
            className={`text-center  font-[800] text-[23px] lg:text-[34px] leading-[34px] lg:leading-[43px] tracking-[-0.04em] text-[#2F9b4E] ${jost.className}`}
          >
            <span className="text-[#212121]">Current</span> Masterclasses
            Available
          </h2>
          <ResponsiveDemo
            values={masterClasses}
            template={masterTemplate}
          />
        </div>
      </div> */}

      <Partners />

      <Footer />
    </main>
  );
}

const SingleCardTemplate = (card: Card) => {
  return (
    <div className="bg-[#FAFAFA] rounded-md mx-2 ">
      <div className="min-w-[345px] h-[200px] lg:min-w-[295px] lg:max-h-[234px] rounded-md w-full p-3">
        <div className="flex flex-col items-center justify-center ">
          <div className="flex w-">
            <Image src={card.image!} alt="" width={20} height={20} className="w-[32px] h-[30px]" />
          </div>
          <h3
            className={`text-[16px] leading-[20px] tracking-tighter text-[#2F9B4E] font-[700] mt-[7px] ${jost.className}`}
          >
            {card.heading}
          </h3>
        </div>
        <div className="mt-[5px]">
          <p
            className={`font-[400] text-[14px] leading-[28px] tracking-tighter text-[#212121]/70 line-clamp-4 ${satoshi.className}`}
          >
            {card.text}
          </p>
        </div>
      </div>
    </div>
  );
};

const popularGuideTemplate = (guide: Guide) => {
  return (
    <div className="flex flex-col bg-white max-w-[347px] lg:min-w-[400px] h-[500] lg:h-[450px] box-content">
      <Image
        src={guide.image!}
        alt=""
        width={399}
        height={209}
        className="rounded-t-md"
      />
      <div className="py-[15px] lg:py-[20px] px-[16px] lg:px-[20px] ">
        <h3
          className={`font-[600] text-[16px] lg:text-[20px] leading-[24px] tracking-[-0.04em] ${jost.className}`}
        >
          {guide.title}
        </h3>
        <p
          className={`text-[14px] lg:text-[16px] line-clamp-4 font-[400] leading-[28px] tracking-[-0.03em] lg:tracking-[-0.04em] max-w-[360px] ${satoshi.className}`}
        >
          {guide.description}
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
  );
};

const masterTemplate = (masterclass: MasterClass) => {
  return (
    <div className="flex flex-col bg-[#FAFAFA] rounded-md max-w-[350px] lg:min-w-[400px] h-[485px] lg:h-[485px] box-content">
      <div className=" rounded-t-md relative ">
        <Image
          src={masterclass.image!}
          alt=""
          width={399}
          height={221}
          className="rounded-t-md relative object-contain "
        />
        <div className="absolute bottom-0 left-0 right-0 h-24  text-left bg-gradient-to-t from-black/40 flex items-end  ">
          <p className="pb-[15px] pl-[15px] text-white">{masterclass.title}</p>
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
        className={`text-[14px] overflow-hidden line-clamp-3  mb-[20px] px-[15px] pt-[18px]  lg:text-[16px] font-[400] leading-[28px] tracking-[-0.03em] lg:tracking-[-0.04em]  ${satoshi.className}`}
      >
        {masterclass.description}
      </p>

      <hr></hr>

      <div className="mx-[15px] my-[15px] flex items-center gap-[17px]">
        <button
          className={`rounded-md whitespace-nowrap flex bg-[#2F9B4E] text-white py-[10px] lg:py-[13px] px-[18px] lg:px-[24px] font-[700] text-[14px] lg:text-[16px] leading-[19px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className}`}
        >
          Join $20/
          <span className="tex-[14px] text-white/70">person</span>
        </button>
        {masterclass.date === "" ? <LikesViews /> : <SlotsLeft />}
      </div>
    </div>
  );
};

const Partners = () => {
  return (
    <div className=" bg-[#F5F5F5] w-full px-[20px] lg:px-0">
      <div className="max-w-[1440px]  mx-auto flex flex-col items-start px-[15px] lg:px-[100px] ">
        <h2
          className={`text-start mt-[30px] lg:mt-[90px]  font-[800] text-[23px] lg:text-[34px] leading-[34px] lg:leading-[43px] tracking-[-0.04em] text-[#2F9b4E] ${jost.className}`}
        >
          <span className="text-[#212121]">Our</span> Partners
        </h2>
        <div className="flex flex-wrap md:flex-nowrap gap-[70px] mt-[31px] mb-[91px]  items-center">
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
