import Image from "next/image";
import { jost, satoshi } from "../utils/Fonts";
import { Discussion } from "../utils/types";


export const DiscussionCard: React.FC<Discussion> = ({...discussion}: Discussion) => {
    return (
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
            {discussion.likesCount}k
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
              src={discussion.authorsImage!}
              alt="prof"
              width={18}
              height={18}
              className="w-[18px] lg:w-[22px] h-[18px] lg:h-[22px]"
            />
            <div className="flex gap-[5px] items-center">
              <p
                className={`text-[14px] lg:text-[16px] leading-[16px] lg:leading-[22px] font-[500] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
              >
                {discussion.author} - {discussion.county} County, {discussion.country}
              </p>
              <Image
                src={discussion.countryFlagImage!}
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
            {discussion.question}
          </p>
          {discussion.image !== "" ? (
            <Image
            src={discussion.image!}
            alt="photo"
            width={724}
            height={277}
            className="hidden lg:block rounded-sm mt-[21px]"
          /> 
          ) : null}
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
                {discussion.resplies?.length} replies
              </p>
            </div>
            <p
              className={`text-[#212121]/70 text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className} font-[500]`}
            >
              {discussion.date} | {discussion.time}
            </p>
          </div>
        </div>
      </div>
    );
  };
  