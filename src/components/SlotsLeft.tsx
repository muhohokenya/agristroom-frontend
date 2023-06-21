import { BsExclamationCircle } from "react-icons/bs";
import { satoshi } from "../fonts/Fonts";

export const SlotsLeft = () => {
    return (
      <div className={`flex items-center gap-1 justify-start`}>
        <BsExclamationCircle className="w-[13px] lg:w-[17px] h-[13px] lg:h-[17px] text-[#FFB700] " />
        
        <p
          className={`text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.03em] font-[500] text-[#FFB700]  ${satoshi.className}`}
        >
          25 slots left
        </p>
      </div>
    );
  };