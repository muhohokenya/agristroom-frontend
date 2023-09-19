
"use client"
import { PostQuestion } from "@/src/components/PostQuestion";

const Dashboard = async () => {
  return (
    <div className="px-[15px] py-[30px]  max-w-[1200px] mx-auto bg-white ">
      <PostQuestion />
    </div>
  );
}

export default Dashboard;
