import { BsEye, BsHeart } from "react-icons/bs";
import { satoshi } from "../fonts/Fonts";


export const LikesViews = () => {
    return (
      <div className="flex justify-between gap-3 ">
        <span className={`flex items-end gap-1 `}>
          <BsEye className="w-[16px] lg:w-[20px] h-[16px] lg:h-[20px] text-[#FFB700] " />
          
          <span
            className={`text-[12px] whitespace-nowrap  md:whitespace-normal  lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.03em] font-[500] text-[#FFB700]  ${satoshi.className}`}
          >
            2773 views
          </span>
        </span>
  
        <span className={`flex items-end gap-1`}>
        <BsHeart className="w-[13px] lg:w-[17px] h-[13px] lg:h-[17px] text-[#FFB700] " />
          <span
            className={`text-[12px] whitespace-nowrap md:whitespace-normal lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.03em] font-[500] text-[#FFB700]  ${satoshi.className}`}
          >
            3883 likes
          </span>
        </span>
      </div>
    );
  };