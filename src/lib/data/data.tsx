import { PostNavLink, Question, UserNavLink } from "@/src/context/types";
import { Card, Guide, MasterClass } from "@/src/types/types";
import { AiFillBulb } from "react-icons/ai";
import { BsPeopleFill, BsShieldCheck } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { FaTractor, FaUsers } from "react-icons/fa";
import { RiQuestionnaireFill } from "react-icons/ri";

export const masterClassesData: MasterClass[] = [
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
    date: "30/06/2023",
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
  }
];

export const cards: Card[] = [
  {
    heading: "Farmers",
    image: "/svgs/communities/farmer2.svg",
    text: "Connect and network with strategic players to learn and maximize productivity of your farm with sustainable farming techniques.",
  },
  {
    heading: "Agri-experts",
    image: "/svgs/communities/agri-expert.svg",
    text: "Join a network of new and experienced experts, grow your knowledge and help solve real on-farm challenges farmers face in their communities daily.",
  },
  {
    heading: "Farm intelligence ",
    image: "/svgs/communities/smart-farm.svg",
    text: "Get insights and make better decisions for your agribusiness venture. We collect accurate farm data to aid forecasting and ensure actionable and valuable insights.",
  },
  {
    heading: "Input suppliers ",
    image: "/svgs/communities/supplier.svg",
    text: "Access thousands of farmers to market and supply quality inputs for the farm problems aligned with sustainable farming practices.",
  },
  {
    heading: "Off-takers",
    image: "/svgs/communities/off-takers.svg",
    text: "Connect with producers to aggregate and help farmers sell their produce locally and internationally",
  },
  {
    heading: "Agriprocessors",
    image: "/svgs/communities/agri-processors.svg",
    text: "We partner with innovative players to transform farm produce through value addition and help farmers meet market demands, unlock new opportunities and reduce food wastage.",
  },
  {
    heading: "Agrifinanciers ",
    image: "/svgs/communities/financers2.svg",
    text: "Meet the unique financial needs in the farming sector and fuel growth through tailored financial solutions and expert guidance.",
  },
  {
    heading: "Researchers & policy makers",
    image: "/svgs/communities/research.svg",
    text: "Bridge the gap between research and impactful policies for ag advancement. Collaborate with us and promote sustainable farming practices to ensure food security for present and future generations.",
  },
  {
    heading: "Investors ",
    image: "/svgs/communities/investors.svg",
    text: "Connect with promising ag ventures and get valuable insights and expertise to navigate and strategically invest in the dynamic agricultural environment.",
  },
];

export const guides: Guide[] = [
  {
    title: "Nutritional Program for Wambugu Apples",
    image: "/guide-images/apples-one.png",
    description:
      "Soil test is important to determine and understand fertilizer requirements for your apple farm. Both organicand inorganic fertilizers - foliar and basal are important to supply nutrient needs for the plant. Read on to understand timing and split application of fertilizers.",
  },
  {
    title: "Nutritional Program for Wambugu Apples",
    image: "/guide-images/apples-two.png",
    description:
      "Did you know the propagation story of the now popular Wambugu apple? Learn how this superb and all weather apple triumphs over other varieties and why you should choose it because of its distinctive features.",
  },
  {
    title: "Nutritional Program for Wambugu Apples",
    image: "/guide-images/apples-three.png",
    description:
      "Chinzinga shares how recent floods in Zambia swept away her 2 acres of apples barely 2 months after planting. Learn more about how farm insurance helps smallholder farmers and advice from a farm insurance company on why smallholder farmers need to consider insurance.",
  },
];


export const accountTypes = [
  {
    Icon: <FaUsers className="h-8 w-8" />,
    name: "A Farmer",
    id: "1",
  },
  {
    Icon: <FaTractor className="h-8 w-8" />,
    name: "An Agri-expert",
    id: "2",
  },
  {
    Icon: <CiGlobe className="h-8 w-8" />,
    name: "An Aggregator",
    id: "3",
  },
  {
    Icon: <BsShieldCheck className="h-8 w-8" />,
    name: "Farm Insurance partner",
    id: "4",
  },
  {
    Icon: <RiQuestionnaireFill className="h-8 w-8" />,
    name: "Quality input supplier",
    id: "5",
  },
  {
    Icon: <BsPeopleFill className="h-8 w-8" />,
    name: "Agribusiness partner",
    id: "6",
  },
  {
    Icon: <AiFillBulb className="h-[32px] w-[32px]" />,
    name: "Farm Intelligence",
    id: "7",
  },
];

export const accountIcons = [
  {
    Icon: <FaUsers className="h-8 w-8" />,
  },
  {
    Icon: <FaTractor className="h-8 w-8" />,
  },
  {
    Icon: <CiGlobe className="h-8 w-8" />,
  },
  {
    Icon: <BsShieldCheck className="h-8 w-8" />,
  },
  {
    Icon: <RiQuestionnaireFill className="h-8 w-8" />,
  },
  {
    Icon: <BsPeopleFill className="h-8 w-8" />,
  },
  {
    Icon: <AiFillBulb className="h-[32px] w-[32px]" />,
  },
];

export const usersLinks: UserNavLink[] = [
  {
    id: 1,
    name: 'View All Users',
    path: 'users'
  },
  {
    id: 2,
    name: 'View Active User ',
    path: 'active-users'
  },
]
export const postsLinks: PostNavLink[] = [
  {
    id: 1,
    name: 'View All Posts',
    path: 'posts'
  },
  {
    id: 2,
    name: 'View Active Posts ',
    path: 'active-posts'
  },
]



export const questions: Question[] = [
  {
    id: 1,
    title: "Why apples have high demand",
    postedBy: "Sammy Kirigha",
    answersCount: 20,
    datePosted: "12-10-2023"
  },
  {
    id: 2,
    title: "Why apples have high demand",
    postedBy: "Martin Mwangi",
    answersCount: 20,
    datePosted: "12-10-2023"
  },
  {
    id: 3,
    title: "Why apples have high demand",
    postedBy: "Terry Njeri",
    answersCount: 20,
    datePosted: "12-10-2023"
  },
  {
    id: 4,
    title: "Why apples have high demand",
    postedBy: "Simon Kamau",
    answersCount: 20,
    datePosted: "12-10-2023"
  },
  {
    id: 5,
    title: "Why apples have high demand",
    postedBy: "Dorcis Wanjiku",
    answersCount: 20,
    datePosted: "12-10-2023"
  },
  {
    id: 6,
    title: "Why apples have high demand",
    postedBy: "Ian Peter",
    answersCount: 20,
    datePosted: "12-10-2023"
  },
  {
    id: 7,
    title: "Why apples have high demand",
    postedBy: "Jeremy Kim",
    answersCount: 20,
    datePosted: "12-10-2023"
  },
  {
    id: 8,
    title: "Why apples have high demand",
    postedBy: "Jane Doe",
    answersCount: 20,
    datePosted: "12-10-2023"
  },
  {
    id: 9,
    title: "Why apples have high demand",
    postedBy: "Joe Smith",
    answersCount: 20,
    datePosted: "12-10-2023"
  },
  {
    id: 10,
    title: "Why apples have high demand",
    postedBy: "User Two",
    answersCount: 32,
    datePosted: "12-10-2023"
  },
  {
    id: 11,
    title: "Why apples have high demand",
    postedBy: "Mill Omosh",
    answersCount: 23,
    datePosted: "12-10-2023"
  },
  {
    id: 12,
    title: "Why apples have high demand",
    postedBy: "Samantha Kerry",
    answersCount: 23,
    datePosted: "12-10-2023"
  },
  {
    id: 13,
    title: "Why apples have high demand",
    postedBy: "Mary Shi",
    answersCount: 22,
    datePosted: "12-10-2023"
  },
  {
    id: 14,
    title: "Why apples have high demand",
    postedBy: "Peter Kirigha",
    answersCount: 45,
    datePosted: "12-10-2023"
  },
  {
    id: 15,
    title: "i need some seedlings?",
    postedBy: "Sylvia Njeri",
    answersCount: 34,
    datePosted: "12-10-2023"
  },
  {
    id: 16,
    title: "How can i deal with pests",
    postedBy: "Jame Kamau",
    answersCount: 27,
    datePosted: "12-10-2023"
  }
]