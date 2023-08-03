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
import { upVoteForQuestion } from "../redux/actions/upvote";
import { useAppDispatch } from "../hooks/react-redux-hooks";
import { toast } from "../hooks/use-toast";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {
  post: Post
}

export const DiscussionCard = ({ post }: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  const upVotePost = async (post_id: number) => {
    const data = {
      post_id: post_id,
      vote: 1
    }
    let res: any = await dispatch(upVoteForQuestion(data))
    if (res?.payload.success) {
      toast({
        description: `Your up vote was successfully ${res?.payload.response.response}`
      })
    }
  }

  const downVotePost = async (post_id: number) => {
    const data = {
      post_id: post_id,
      vote: -1
    }
    let res: any = await dispatch(upVoteForQuestion(data))
    if (res?.payload.success) {
      toast({
        description: `Your down vote was successfully ${res?.payload.response.response}`
      })
    }
  }

  return (
    <div className="flex">
      <div className="flex flex-col pt-[20px] px-[8px] lg:px-[15px] items-center justify-start bg-[#DBF3D9] w-[42px] lg:w-[64px] rounded-l-md">
        <MdArrowDropUp onClick={() => upVotePost(post?.id)} className="w-[35px] cursor-pointer h-[25px] text-[#2F9B4E]" />
        <span
          className={`text-[12px] lg:text-[16px] leading-[18px] font-[500] text-[#2F9B4E] tracking-[-0.04em] ${satoshi.className}`}
        >
          {post?.votes || 0}
        </span>
        <MdArrowDropDown onClick={() => downVotePost(post?.id)} className="w-[35px] cursor-pointer h-[25px] text-[#2F9B4E]" />
      </div>
      <Link href={`/dashboard/post/${post?.id}`} className="flex cursor-pointer flex-col pt-[20px] pb-[21px] px-[12px] lg:pl-[20px] lg:pr-[30px] bg-[#FAFAFA] w-full rounded-r-md ">
        <div className="flex gap-[5px]">

          <FaUserCircle
            className="w-[18px] lg:w-[22px] h-[18px] lg:h-[22px] text-[#DBF3D9]"
          />
          <div className="flex gap-[5px] items-center">
            <p
              className={`text-[14px] flex gap-2 items-center justify-center lg:text-[16px] leading-[16px] lg:leading-[22px] font-[400] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
            >
              {post?.user?.first_name} - Kenya
              <Image
                src="/Flag_of_Kenya.png"
                alt="photo"
                width={30}
                height={25}
                className="lg:block rounded-sm h-4"
              />
            </p>
          </div>
        </div>
        <p
          className={`text-[14px] lg:text-[20px] mt-[10px] leading-[24px] lg:leading-[31px] font-[600] text-[#212121]/90 tracking-[-0.03em] ${jost.className}`}
        >
          {post?.title}
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
              {post?.replies?.length} {post?.replies?.length === 1 ? "reply" : "replies"}
            </p>
          </div>
          <p
            className={`text-[#212121]/70 text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className} font-[500]`}
          >
            {formatDate(post?.created_at!)} | {formatDateToTime(post?.created_at!)}
          </p>
        </div>
      </Link>
    </div>
  );
};
