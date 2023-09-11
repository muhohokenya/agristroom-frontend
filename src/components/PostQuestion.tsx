import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { BsFillExclamationCircleFill, BsSearch } from "react-icons/bs";
import { FaRegUser, FaSpinner } from "react-icons/fa";
import thumpsup from "../../public/svgs/thumbs-up.svg";
import { SearchContext } from "../context/SearchState";
import { jost, satoshi } from "../fonts/Fonts";
import { useAppDispatch, useAppSelector } from "../hooks/react-redux-hooks";
import { toast } from "../hooks/use-toast";
import { UseEditorModal } from "../hooks/useEditorModalContext";
import { UseLoginModal } from "../hooks/useLoginModal";
import { ManagedUI } from "../hooks/useModalContext";
import { formatDate, formatDateToTime } from "../lib/constants";
import { getCurrentUser } from "../redux/actions/auth.action.action";
import { getPosts } from "../redux/actions/getPosts.action";
import { upVoteForQuestion } from "../redux/actions/upvote";
import { Post } from "../types/types";
import LoginModal from "./auth/LoginModal";
import EditorModal from "./modals/EditorModal";
import { Skeleton } from "./ui/Skeleton";

export const PostQuestion = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.currentUser);
  const buttonRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch();
  const { setOpenEditorModal } = useContext(UseEditorModal);
  const _state = useAppSelector((state) => state.currentUser);
  const { setOpenModal } = useContext(ManagedUI);
  const { setOpenLoginModal } = useContext(UseLoginModal);

  const post = useAppSelector((state) => state.post);

  const { searchedValue, setSearchedValue } = useContext(SearchContext);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      let res: any = await dispatch(getPosts());
      console.log('====================================');
      console.log(res);
      console.log('====================================');
      setPosts(res.payload.posts);
      setLoading(false);
    };
    fetchPost();
  }, [post, dispatch]);

  useEffect(() => {
    const getUser = async () => {
      let res: any = await dispatch(getCurrentUser());
      if (res?.payload?.success) {
        // setLoggedOut(false);
      } else {
        // setLoggedOut(true);
      }
    };
    getUser();
  }, [dispatch]);


  const onFocus = () => {
    if (buttonRef.current) {
      buttonRef.current.focus()
    }
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedValue({
      searchedValue: e.target.value
    });
  };

  const upVotePost = async (post_id: number) => {
    if (user?.user === null) {
      toast({
        description: "Please log in first to upVote",
        variant: "destructive",
      });
      router.push("/auth/login");
      setOpenModal(true)
    } else {
      const data = {
        post_id: post_id,
        vote: 1
      }
      let resp: any = await dispatch(upVoteForQuestion(data));
      if (resp?.payload.success) {
        toast({
          description: `Your up vote was successfully ${resp?.payload.response.response}`
        })
        let res: any = await dispatch(getPosts());
        setPosts(res.payload.posts);
      }
    }

  }
  const filteredPosts = posts?.filter((post) => post?.title?.toLowerCase().includes(searchedValue.searchedValue.toLowerCase()));


  return (
    <div className="">
      <div className="flex flex-col xl:flex-row items-end gap-[20px] mr-[20px] ">
        <div className="flex bg-red-400 w-full max-w-[800px] relative items-center justify-center rounded-md">
          <input
            ref={buttonRef}
            type="text"
            onChange={(e) => onInputChange(e)}
            placeholder="search..."
            className="w-full lg:w-[800px] h-[44px] px-2 border border-[#2F9B4E] focus:border focus:border-[#2F9B4E] focus:outline-0 rounded-md ring-0 focus:ring-0"
          />
          <span className={`absolute flex-1 cursor-pointer flex top-[1px] items-center justify-center right-0 px-3 bg-[#2F9B4E] text-white  h-[95%] rounded-md max-w-10`}>
            <BsSearch onClick={onFocus} className=" max-h-8 max-w-8" />
          </span>
        </div>
        <button
          onClick={() => {
            if (_state?.user === null) {
              toast({
                description: "Please log in to post a question ",
                variant: "destructive",
              });
              setOpenLoginModal(true);
            } else {
              setOpenEditorModal(true);
            }
          }}
          type="button"
          className={`mt-[15px] bg-[#2F9B4E] ml-0 lg:ml-[70px]  w-[144px] h-[44px]  py-[14px] px-[24px] rounded-[5px] text-white  text-center text-[16px] leading-[21px] tracking-[-0.04em] ${satoshi.className}`}
        >
          Post Question
        </button>
      </div>

      {
        searchedValue.searchedValue !== "" && (
          <div className="flex flex-col gap-2 mt-3">
            <div className="flex justify-start items-center gap-5">
              <h3 className={`font-[600]  text-[26px] leading-[42px] tracking-[-0.04em] tex-[#212121] ${jost.className}`}>Search Results</h3>
              <span onClick={() => {
                setSearchedValue({
                  searchedValue: ""
                })
              }} className="flex gap-1 cursor-pointer items-center bg-[#DBF3D9] px-2 py-1 rounded-sm text-[#2F9B4E] w-fit ">
                <AiOutlineReload />
                Refresh Search
              </span>
            </div>
            <p className="text-[16px]">
              <span className="text-[#2F9B4E] w-fit px-2 py-1 rounded-sm bg-[#DBF3D9]">{`${filteredPosts.length}`}</span> {filteredPosts.length === 1 ? "result" : "results"}  found.
            </p>
          </div>
        )
      }

      <div className="flex bg-white flex-col justify-between lg:flex-row border-t border-t-[#BFBFBF]/60 mt-[30px] ">
        <div className="bg-white w-full mx-1">
          <div className="flex flex-col relative  w-full ">
            <h2
              className={`font-[600]  text-[26px] leading-[42px] tracking-[-0.04em] tex-[#212121] ${jost.className}`}
            >
              Recent Community Discussions
            </h2>
            {loading && (
              <div className=" w-full flex items-center justify-center mt-20 ">
                <div className="w-full mx-auto flex flex-col items-center justify-center ">
                  <FaSpinner className="animate-spin h-8 w-8 text-[#2F9B4E] text-center" />
                  <h2 className="text-center text-[16px] font-[600] mt-4">
                    Loading Posts....
                  </h2>
                </div>
              </div>
            )}
            <div className="flex flex-col mt-[15px] gap-[15px] w-full h-[800px] pb-[15px]  no-scrollbar overflow-auto">
              {filteredPosts?.map((post, indx) => {
                return (
                  <div
                    key={indx}
                    className="flex min-w-[350px] md:max-w-full lg:max-w-full  h-auto cursor-pointer "
                  >
                    <div className="flex flex-col pt-[20px] lg:px-[15px] items-center justify-start bg-[#DBF3D9] w-[42px] lg:w-[64px] rounded-l-md">
                      <div onClick={() => upVotePost(post?.id)} className="mb-2">
                        <Image
                          src={thumpsup}
                          alt="prof"
                          width={18}
                          height={18}
                          className="w-[18px] lg:w-[22px] h-[18px] lg:h-[22px] text-red-500"
                        />

                      </div>
                      <span
                        className={`text-[12px] lg:text-[16px] leading-[18px] font-[500] text-[#2F9B4E] tracking-[-0.04em] ${satoshi.className}`}
                      >
                        {post?.votes}
                      </span>
                    </div>
                    <div
                      onClick={() =>
                        router.push(`/dashboard/post/${post.id}`)
                      }
                      className="flex w-full flex-col pt-[20px] pb-[21px] px-[12px] lg:pl-[20px] lg:pr-[30px]  bg-[#FAFAFA] rounded-r-md "
                    >
                      <div className="flex items-center justify-start gap-[5px]">
                        {post.user.image === undefined ? (
                          <span className="max-h-8 p-2 rounded-full max-w-8 bg-[#DBF3D9]">
                            <FaRegUser className="text-slate-400 " />
                          </span>
                        ) : (
                          <div className="">
                            <Image
                              src="/user.png"
                              alt="prof"
                              width={18}
                              height={18}
                              className="w-[18px] lg:w-[22px] h-[18px] lg:h-[22px]"
                            />
                          </div>
                        )}

                        <div className="flex gap-[5px] items-center ">
                          <p
                            className={`text-[14px] lg:text-[16px] leading-[16px] lg:leading-[22px] font-[400] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
                          >
                            {post.user.first_name} - Kenya
                          </p>
                          <Image
                            src="/Flag_of_Kenya.png"
                            alt="photo"
                            width={30}
                            height={25}
                            className="lg:block rounded-sm h-4"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <p
                          className={`text-[14px] lg:text-[18px] line-clamp-3 mt-[10px] leading-[24px] lg:leading-[31px] font-[600] text-[#212121]/90 tracking-[-0.03em] ${jost.className}`}
                        >
                          {post?.title}
                        </p>
                        <p
                          className={`text-[13px] lg:text-[16px] line-clamp-2 mt-[4px] leading-[18px] lg:leading-[20px] font-[400] text-[#212121]/90 tracking-[-0.03em] ${satoshi.className}`}
                        >
                          {post?.description}
                        </p>
                        {post?.image === "http://dev.agristroom.com/api/uploads/posts" ? null : (
                          <Image
                            src={post?.image!}
                            alt="prof"
                            width={550}
                            height={300}
                            className="rounded-md mt-2 h-[250px] object-cover object-left"
                          />
                        )}
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[14px] mr-[10px] ">
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
                          {formatDate(post.created_at)} |{" "}
                          {formatDateToTime(post.created_at)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {filteredPosts?.length === 0 && loading === false && (
              <div className="absolute top-10 flex w-full items-start justify-center my-5 ">
                <div className="flex py-2 px-4 flex-col items-center justify-center gap-3 shadow-md border border-[#2F9B4E] rounded-md">
                  <BsFillExclamationCircleFill className="text-[#2F9B4E] w-10 h-10" />
                  <h1>Discussions Were Not Found!!!!</h1>
                  <p className="font-[400]  text-[16px] leading-[42px] tracking-[-0.04em] tex-[#212121]">Be the first one to create a discussion by clicking the post question above</p>
                  <button onClick={() => setOpenEditorModal(true)} className="text-[14px] bg-[#DBF3D9] py-2 px-[10px] rounded-md text-[#2F9B4E] leading-[18.9px] font-[500] cursor-pointer tracking-[-0.04em]">Post Question</button>
                </div>
              </div>)
            }
          </div>
        </div>

        <hr className="border-l border-[#BFBFBF]/60 lg:hidden"></hr>

        <div className="max-w-[300px] flex-1 mx-[15px] lg:mx-[21px] lg:border-l lg:border-[#BFBFBF]/60 lg:pl-[15px]">
          <div className="mt-[20px]">
            <Image
              src="/airtel_add.png"
              alt=""
              width={350}
              height={250}
              className="lg:w-[350px]"
            />
          </div>
          <div className="mt-[15px] border border-[#FAFAFA] shadow-sm ">
            <h2
              className={`font-[600] py-[15px] bg-[#FAFAFA]  text-[18px] leading-[26px] tracking-[-0.03em] text-[#212121]/90 ${jost.className}`}
            >
              Hot Topics
            </h2>
            <div className="flex flex-col gap-[20px] mt-[15px] py-[10px] min-w-[300px] h-[300px]  no-scrollbar overflow-auto">
              {posts.map((post) => {
                return (
                  <p
                    onClick={() => router.push(`/dashboard/post/${post?.id}`)}
                    key={post.id}
                    className={`font-[400] ${satoshi.className} text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
                  >
                    <span>🍎</span>
                    {post.title}
                  </p>
                )
              }).slice(0, 6)}
            </div>
          </div>
        </div>
      </div>
      <LoginModal />
      <EditorModal />
    </div>
  );
};

PostQuestion.Skeleton = function DashboardSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
};
