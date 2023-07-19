import Image from "next/image";
import {
  MdArrowDropUp,
  MdArrowDropDown,
} from "react-icons/md";
import { BiMessage } from "react-icons/bi";
import { Post } from "../types/types";
import { jost, satoshi } from "../fonts/Fonts";
import { formatDate, formatDateToTime } from "../lib/constants";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

type Props = {
  post: Post
}

export const DiscussionCard= ({post}: Props) => {
  return (
    <div className="flex">
      <div className="flex flex-col pt-[20px] px-[8px] lg:px-[15px] items-center justify-start bg-[#DBF3D9] w-[42px] lg:w-[64px] rounded-l-md">
        <MdArrowDropUp className="w-[35px] h-[25px] text-[#2F9B4E]" />

        <span
          className={`text-[12px] lg:text-[16px] leading-[18px] font-[500] text-[#2F9B4E] tracking-[-0.04em] ${satoshi.className}`}
        >
          19.3k
        </span>
        <MdArrowDropDown className="w-[35px] h-[25px] text-[#2F9B4E]" />
      </div>
      <Link href={`/dashboard/reply/${post?.id}`}  className="flex cursor-pointer flex-col pt-[20px] pb-[21px] px-[12px] lg:pl-[20px] lg:pr-[30px] bg-[#FAFAFA] w-full rounded-r-md ">
        <div className="flex gap-[5px]">
          
          <FaUserCircle
            className="w-[18px] lg:w-[22px] h-[18px] lg:h-[22px] text-[#DBF3D9]"
          />
          <div className="flex gap-[5px] items-center">
            <p
              className={`text-[14px] lg:text-[16px] leading-[16px] lg:leading-[22px] font-[400] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
            >
              {post?.user?.first_name} - {post?.user?.county} county,{" "}
              {post?.user?.country}
            </p>
          </div>
        </div>
        <p
          className={`text-[14px] lg:text-[20px] mt-[10px] leading-[24px] lg:leading-[31px] font-[600] text-[#212121]/90 tracking-[-0.03em] ${jost.className}`}
        >
          {post?.name}
        </p>
        {post.image === null ? null : (
          <Image
            src={post?.image!}
            alt="photo"
            width={724}
            height={277}
            className="hidden lg:block rounded-sm mt-[21px]"
          />
        )}
        <div className="flex flex-row items-center justify-between mt-[21px]">
          <div className="flex items-center gap-3">
            <BiMessage className="w-[12.8px] lg:w-[20px] h-[12px] lg:h-[18px] text-[#212121]/70" />

            <p
              className={`text-[#212121]/70 text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className} font-[500]`}
            >
              {post?.resplies?.length}4 replies
            </p>
          </div>
          <p
            className={`text-[#212121]/70 text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className} font-[500]`}
          >
            { formatDate(post?.created_at!)} | {formatDateToTime(post?.created_at!)}
          </p>
        </div>
      </Link>
    </div>
  );
};
