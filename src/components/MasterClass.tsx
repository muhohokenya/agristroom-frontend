import Image from "next/image";
import { LikesViews } from "./LikesViews";
import { SlotsLeft } from "./SlotsLeft";
import { MasterClass } from "../utils/types";
import { satoshi } from "../utils/Fonts";


export const MasterClassCard: React.FC<MasterClass> = ({
    ...masterclass
  }: MasterClass) => {
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