import { FaTractor, FaUsers } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { AiFillBulb } from "react-icons/ai";
import { RiQuestionnaireFill } from "react-icons/ri";
import { BsShieldCheck, BsPeopleFill } from "react-icons/bs";
import { Account, Card, Discussion, MasterClass } from "./types";

export const masterClasses: MasterClass[] = [
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
    },
  ];

 export const cards: Card[] = [
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


  export const discussions: Discussion[] = [
    {
    country: "Kenya",
    county: "Kajiado",
    countryFlagImage: "/Flag_of_Kenya.png",
    question: "What are the common challenges that apple farmers face and how do we solve them?",
    date: "15/4/2023",
    time: "2.30pm",
    image: "",
    author: "Emmanuel",
    authorsImage: "/user.png",
    likesCount: 19.3,
    resplies: [
        {
            time: "2.30pm",
            date: "15/4/2023",
            response: "Pest and disease management.",
        },
        {
            time: "1.30pm",
            date: "12/4/2023",
            response: "Climate variability",
        },
        {
            time: "2.30pm",
            date: "15/4/2023",
            response: "Labor availability",
        },
        {
            time: "2.30pm",
            date: "15/4/2023",
            response: "Market demand and competition",
        },
      ]
    },
    {
    country: "Kenya",
    county: "Siaya",
    countryFlagImage: "/Flag_of_Kenya.png",
    question: "My apple trees are flowers, but birds are a menace? Do shade nets help? Where can I get them?",
    date: "15/4/2023",
    time: "2.30pm",
    image: "/fruit.png",
    author: "Joey",
    authorsImage: "/user.png",
    likesCount: 12.5,
    resplies: [
        {
            time: "2.30pm",
            date: "15/4/2023",
            response: "Pest and disease management.",
        },
        {
            time: "1.30pm",
            date: "12/4/2023",
            response: "Climate variability",
        },
        {
            time: "2.30pm",
            date: "15/4/2023",
            response: "Labor availability",
        },
        {
            time: "2.30pm",
            date: "15/4/2023",
            response: "Market demand and competition",
        },
      ]
    },
    {
    country: "Kenya",
    county: "Kilifi",
    countryFlagImage: "/Flag_of_Kenya.png",
    question: "Can any agronomist please share with me a nutritional program for apples suitable for Kilifi-south sub-county?",
    date: "15/4/2023",
    time: "2.30pm",
    image: "",
    author: "Mariana",
    authorsImage: "/user.png",
    likesCount: 10.3,
    resplies: [
        {
            time: "2.30pm",
            date: "15/4/2023",
            response: "Pest and disease management.",
        },
        {
            time: "1.30pm",
            date: "12/4/2023",
            response: "Climate variability",
        },
        {
            time: "2.30pm",
            date: "15/4/2023",
            response: "Labor availability",
        },
        {
            time: "2.30pm",
            date: "15/4/2023",
            response: "Market demand and competition",
        },
      ]
    },
    {
    country: "Nigeria",
    county: "Enugu State",
    countryFlagImage: "/Flag_of_Kenya.png",
    question: "What are the common challenges that apple farmers face and how do we solve them?",
    date: "15/4/2023",
    time: "2.30pm",
    image: "/fruit.png",
    author: "Nsiah",
    authorsImage: "/user.png",
    likesCount: 6.8,
    resplies: [
        {
            time: "2.30pm",
            date: "15/4/2023",
            response: "Pest and disease management.",
        },
        {
            time: "1.30pm",
            date: "12/4/2023",
            response: "Climate variability",
        },
        {
            time: "2.30pm",
            date: "15/4/2023",
            response: "Labor availability",
        },
        {
            time: "2.30pm",
            date: "15/4/2023",
            response: "Market demand and competition",
        },
      ]
    },
    {
    country: "Nigeria",
    county: "Enugu State",
    countryFlagImage: "/Flag_of_Kenya.png",
    question: "What are the common challenges that apple farmers face and how do we solve them?",
    date: "15/4/2023",
    time: "2.30pm",
    image: "/fruit.png",
    author: "Nsiah",
    authorsImage: "/user.png",
    likesCount: 6.8,
    resplies: [
        {
            time: "2.30pm",
            date: "15/4/2023",
            response: "Pest and disease management.",
        },
        {
            time: "1.30pm",
            date: "12/4/2023",
            response: "Climate variability",
        },
        {
            time: "2.30pm",
            date: "15/4/2023",
            response: "Labor availability",
        },
        {
            time: "2.30pm",
            date: "15/4/2023",
            response: "Market demand and competition",
        },
      ]
    },
    {
    country: "Nigeria",
    county: "Enugu State",
    countryFlagImage: "/Flag_of_Kenya.png",
    question: "What are the common challenges that apple farmers face and how do we solve them?",
    date: "15/4/2023",
    time: "2.30pm",
    image: "/fruit.png",
    author: "Nsiah",
    authorsImage: "/user.png",
    likesCount: 6.8,
    resplies: [
        {
            time: "2.30pm",
            date: "15/4/2023",
            response: "Pest and disease management.",
        },
        {
            time: "1.30pm",
            date: "12/4/2023",
            response: "Climate variability",
        },
        {
            time: "2.30pm",
            date: "15/4/2023",
            response: "Labor availability",
        },
        {
            time: "2.30pm",
            date: "15/4/2023",
            response: "Market demand and competition",
        },
      ]
    },
    {
    country: "Nigeria",
    county: "Enugu State",
    countryFlagImage: "/Flag_of_Kenya.png",
    question: "What are the common challenges that apple farmers face and how do we solve them?",
    date: "15/4/2023",
    time: "2.30pm",
    image: "/fruit.png",
    author: "Nsiah",
    authorsImage: "/user.png",
    likesCount: 6.8,
    resplies: [
        {
            time: "2.30pm",
            date: "15/4/2023",
            response: "Pest and disease management.",
        },
        {
            time: "1.30pm",
            date: "12/4/2023",
            response: "Climate variability",
        },
        {
            time: "2.30pm",
            date: "15/4/2023",
            response: "Labor availability",
        },
        {
            time: "2.30pm",
            date: "15/4/2023",
            response: "Market demand and competition",
        },
      ]
    },

  ];


  export const accountTypes = [
   {
    Icon: <FaUsers className="h-8 w-8" />,
    name: "A Farmer"
   },
   {
    Icon: <FaTractor className="h-8 w-8" />,
    name: "An Agri-expert"
   },
   {
    Icon: <CiGlobe className="h-8 w-8" />,
    name: "An Aggregator"
   },
   {
    Icon: <BsShieldCheck className="h-8 w-8" />,
    name: "Farm Insurance partner"
   },
   {
    Icon: <RiQuestionnaireFill className="h-8 w-8" />,
    name: "Quality input supplier"
   },
   {
    Icon: <BsPeopleFill className="h-8 w-8" />,
    name: "Agribusiness partner"
   },
   {
    Icon: <AiFillBulb className="h-[32px] w-[32px]" />,
    name: "Farm Intelligence"
   },
  ]