"use client";
import { jost, satoshi } from "@/src/utils/Fonts";
import { MdArrowBackIos } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import React, { useState, useRef, useContext } from "react";
import { useRouter } from "next/navigation";
import { ManagedUI } from "@/src/hooks/useModalContext";
import Modal from "@/src/components/Modal";

interface Props {}

const interests = [
  "🍎  Apples",
  "🍐  Pears",
  "🍏  Green Apples",
  "🥕  Carrots",
  "🍋  Lemons",
  "🍓 Strawberries",
  "🍉 Watermelons",
  "🍇 Grapes",
  "🍅  Tomatoes",
  "🍊  Oranges",
];

function Page(props: Props) {
  const topicRef = useRef<HTMLDivElement>(null!);
  const router = useRouter();
  const [interest, setInterest] = useState("");
  const { openModal, setOpenModal } = useContext(ManagedUI);
  const [topic, setTopic] = useState("");
  const [topicFound, setTopicFound] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<
    string[] | undefined
  >([]);

  const onInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!interests.includes(interest)) {
      setTopicFound("Topic not found");
    }
  };

  const removeitem = (topic: string) => {
    if (selectedInterests?.includes(topic)) {
      const updatedArray = selectedInterests.filter((item) => item !== topic);
      setSelectedInterests(updatedArray);
    } else {
      const updatedArray = [...(selectedInterests ?? []), topic];
      setSelectedInterests(updatedArray);
    }
  };

  console.log("interest:", selectedInterests);
  console.log("topic:", topic);

  const {} = props;

  return (
    <div className="mt-[100px] w-full max-w-[1440px] mx-auto flex">
      {openModal && (
        <Modal>
          <div className=" flex flex-col  max-h-[500px] items-start  lg:max-h-[500px] mt-10 py-[40px] bg-white w-full  max-w-[345px] lg:max-w-[594px] mx-auto rounded-md">
            <div className="flex mx-[15px] lg:mx-[40px] gap-[14px] items-center ">
              <MdArrowBackIos
                className=" cursor-pointer "
                onClick={() => router.push("/signup/accountinformations")}
              />
              <h2
                className={`font-[600] text-[20px] lg:text-[24px] leading-[24px]  tracking-[0.04em] text-[#212121] ${jost.className}`}
              >
                Tell us about yourself
              </h2>
            </div>

            <hr className="min-w-[315px] lg:min-w-[494px] mx-[15px] lg:mx-[40px] my-[20px] bg-[#BFBFBF]/60 h-[1px] "></hr>

            <div className="w-full mt-[20px] flex flex-col gap-[15px] lg:gap-[20px] max-w-[315px] lg:min-w-[494px] mx-[15px] lg:mx-[40px]">
              <p
                className={` w-full text-[14px] leading-[19px] font-[500] text-[#212121]/50 tracking-[-0.04em]  ${satoshi.className}`}
              >
                What are your interests?
              </p>
              <div className="flex items-center  gap-[5px] w-full ">
                <BiSearch className="-mr-10 text-2xl text-[#BFBFBF]/60 h-[25px] w-[27px]" />
                <input
                  placeholder="Search Topic"
                  onChange={onInterestChange}
                  type="text"
                  className="w-full bg-transparent  h-[48px] mx-[5px] pl-10 border border-1-[#BFBFBF]/60 outline-0 outline-[#BFBFBF]/60 rounded-[5px] bg-[#FFFFFF] focus:outline focus:outline-[#BFBFBF]/60 "
                />
              </div>

              <div className="flex flex-wrap gap-[20px]">
                {topicFound === "" ? (
                  interests.map((topic: string, indx) => {
                    return (
                      <div
                        key={indx}
                        onClick={() => removeitem(topic)}
                        className={` cursor-pointer ${
                          selectedInterests?.includes(topic)
                            ? "text-[#2F9B4E] bg-[#D7FBD7]"
                            : "bg-[#F5F5F5] text-[#212121]/70"
                        }  rounded-[30px] text-[14px] leading-[19px] font-[500]  tracking-[-0.04em] px-[10px] py-[5px] ${
                          satoshi.className
                        }`}
                      >
                        {topic}
                      </div>
                    );
                  })
                ) : (
                  <div className=" w-full flex gap-[7px]  items-center justify-center">
                    <HiOutlineExclamationCircle className="h-[20px] w-[20px] text-[#2F9B4E]" />
                    <span
                      className={`text-[16px] font-[500] leading-[22px] tracking-[-0.04em] text-[#2F9B4E]`}
                    >
                      {topicFound}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => {
                setOpenModal(true);
                topicFound === ""
                  ? router.push("/signup/profilesummary")
                  : router.push("/signup/addtopic");
              }}
              className={`mt-[35px] mx-[15px] lg:mx-[40px] bg-[#2F9B4E] max-w-[315px] lg:max-w-[494px] py-[14px] px-[24px] h-[50px] rounded-[5px] text-white w-full text-center text-[16px] leading-[22px] tracking-[-0.0em] ${satoshi.className}`}
            >
              {topicFound === "" ? "Continue" : "Add Topic"}
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Page;
