import { satoshi } from "../utils/Fonts";


export const LikesViews = () => {
    return (
      <div className="flex justify-between gap-3 ">
        <span className={`flex items-end gap-1 `}>
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
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span
            className={`text-[12px] whitespace-nowrap  md:whitespace-normal  lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.03em] font-[500] text-[#FFB700]  ${satoshi.className}`}
          >
            2773 views
          </span>
        </span>
  
        <span className={`flex items-end gap-1`}>
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
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <span
            className={`text-[12px] whitespace-nowrap md:whitespace-normal lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.03em] font-[500] text-[#FFB700]  ${satoshi.className}`}
          >
            2773 views
          </span>
        </span>
      </div>
    );
  };