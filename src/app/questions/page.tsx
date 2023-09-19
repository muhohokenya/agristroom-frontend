
"use client"
import { PostQuestion } from "@/src/components/PostQuestion";
import useGetCurrentUser from "@/src/context/current-user";


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
  useGetCurrentUser()
  return (
    <div className="px-[15px] py-[30px]  max-w-[1200px] mx-auto bg-white ">
      <PostQuestion />
    </div>
  );
}

export default Dashboard;
