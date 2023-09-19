
"use client"
import { PostQuestion } from "@/src/components/PostQuestion";
import { BaseURL } from "@/src/lib/constants";
import axios from "axios";
import { Metadata } from "next";


// export const generateMetadata = async (): Promise<Metadata> => {
//   const response = await axios.get(`${BaseURL}/posts`);
//   let res = response.data.data?.splice(0, 3)
//   let des = []
//   for (let i = 0; i < res.length; i++) {
//     des.push(`${res[i]?.title}-${res[i]?.description}`)
//   }
//   return {
//     title: `Recent community discussions - Agristroom`,
//     description: `${des.join("-")}`
//   };
// }

const Dashboard = async () => {
  return (
    <div className="px-[15px] py-[30px]  max-w-[1200px] mx-auto bg-white ">
      <PostQuestion />
    </div>
  );
}

export default Dashboard;
