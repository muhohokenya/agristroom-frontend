import { satoshi } from "../utils/Fonts";



export const SlotsLeft = () => {
    return (
      <div className={`flex items-center gap-1 justify-start`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-[13px] lg:w-[17px] h-[13px] lg:h-[17px] text-[#FFB700] "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
        <p
          className={`text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.03em] font-[500] text-[#FFB700]  ${satoshi.className}`}
        >
          25 slots left
        </p>
      </div>
    );
  };