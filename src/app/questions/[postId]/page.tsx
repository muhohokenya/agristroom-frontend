"use client";

import LoginModal from "@/src/components/auth/LoginModal";
import EditorModal from "@/src/components/modals/EditorModal";
import { jost, satoshi } from "@/src/fonts/Fonts";
import { useAppDispatch, useAppSelector } from "@/src/hooks/react-redux-hooks";
import { toast } from "@/src/hooks/use-toast";
import { UseEditorModal } from "@/src/hooks/useEditorModalContext";
import { UseLoginModal } from "@/src/hooks/useLoginModal";
import { BaseURL, formatDate, formatDateToTime } from "@/src/lib/constants";
import { getOneQuestion } from "@/src/redux/actions/getOneQuestion.action";
import { getPosts } from "@/src/redux/actions/getPosts.action";
import { getRepliesByPostId } from "@/src/redux/actions/getReplyByPostId";
import { postAnswer } from "@/src/redux/actions/postAnswer.action";
import { upVoteForQuestion, upVoteForReply } from "@/src/redux/actions/upvote";
import { Post, SinglePost } from "@/src/types/types";
import axios from "axios";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill, BsDot, BsFillExclamationCircleFill } from "react-icons/bs";
import { FaRegUser, FaSpinner } from "react-icons/fa";
import thumbsup from "../../../../public/svgs/thumbs-up.svg";

interface Props {
  params: {
    id: number;
    postId: string;
  };
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  let res: any = await axios.get(`${BaseURL}/post/${parseInt(params.postId.split("-")[params.postId.split("-").length - 1])}`);
  let description = res?.data?.data?.[0].description;
  return {
    title: `${params?.postId}-Agristroom`,
    description: description,
  };
}

function Page(props: Props) {
  const { params } = props;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const answers = useAppSelector((state) => state.replies);
  const _state = useAppSelector((state) => state.currentUser);
  const { setOpenEditorModal } = useContext(UseEditorModal);
  const { handleSubmit } = useForm();
  const [loadingReplies, setLoadingReplies] = useState(true);
  const { setOpenLoginModal } = useContext(UseLoginModal);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [posting, setPosting] = useState(false);
  const [replies, setReplies] = useState([]);
  const [answer, setAnswer] = useState("")
  const [post, setPost] = useState<SinglePost>({
    id: 0,
    image: "",
    title: "",
    votes: 0,
    description: "",
    created_at: "",
    user: {
      country: "",
      county: "",
      email: "",
      image: "",
      id: 0,
      first_name: "",
      last_name: "",
      phone_number: "",
    },
  });

  const postId = parseInt(params.postId.split("-")[params.postId.split("-").length - 1])

  const onSubmit = async () => {
    const state = {
      text: answer,
      post_id: postId
    }
    try {
      if (_state?.user === null) {
        toast({
          description: "Please log in to submit your answer ",
          variant: "secondary",
        });
        setOpenLoginModal(true)
      } else if (state.text === "") {
        toast({
          description: "Can not post an empty answer ",
          variant: "secondary",
        });
      } else {
        setPosting(true)
        let res: any = await dispatch(postAnswer(state));
        if (res?.payload?.success) {
          setPosting(false)
          dispatch(getRepliesByPostId(postId));
          toast({
            description: "You successfully posted your Answer",
            variant: "secondary"
          })
          setAnswer("")
        }
      }
    } catch {
      setPosting(false)
    } finally {
      setPosting(false)
    }

  }

  useEffect(() => {
    //get posts
    const fetchPosts = async () => {
      setLoading(true);
      let res: any = await dispatch(getPosts());
      setPosts(res.payload.posts);
      setLoading(false);
    };
    //get post
    const fetchOnePost = async () => {
      setLoading(true);
      let res: any = await dispatch(getOneQuestion(postId));
      setPost(res?.payload?.post[0]);
      setLoading(false);
    };

    //get replies
    const fetchRepliesByPostId = async () => {
      setLoadingReplies(true);
      let res: any = await dispatch(getRepliesByPostId(postId));
      setReplies(res?.payload?.replies);
      setLoadingReplies(false);
    };

    fetchPosts()
    fetchOnePost();
    fetchRepliesByPostId();
  }, [dispatch, postId]);


  const upVoteReply = async (reply_id: number) => {
    if (_state?.user === null) {
      toast({
        description: "Please log in first to upVote",
        variant: "destructive",
      });
      setOpenLoginModal(true)
    } else {
      const data = {
        reply_id,
        vote: -1
      }
      let res: any = await dispatch(upVoteForReply(data))
      if (res?.payload.success) {
        toast({
          description: `Your up vote was successfully ${res?.payload.response.response}`
        })
      }
      setLoadingReplies(true);
      let resp: any = await dispatch(getRepliesByPostId(postId));
      setReplies(resp?.payload?.replies);
      setLoadingReplies(false);
    }

  }


  const upVotePost = async (post_id: number) => {
    if (_state?.user === null) {
      toast({
        description: "Please log in first to upVote",
        variant: "destructive",
      });
      setOpenLoginModal(true)

    } else {
      const data = {
        post_id: postId,
        vote: 1
      }
      let resp: any = await dispatch(upVoteForQuestion(data))
      if (resp?.payload.success) {
        toast({
          description: `Your up vote was successfully ${resp?.payload.response.response}`
        })
        let res: any = await dispatch(getOneQuestion(postId));
        setPost(res?.payload?.post[0]);
      }
    }
  }

  if (loading) {
    return (
      <div className=" w-full flex items-center justify-center mt-20 ">
        <div className="w-full mx-auto flex flex-col items-center justify-center ">
          <FaSpinner className="animate-spin h-8 w-8 text-[#2F9B4E] text-center" />
          <h2 className="text-center text-[16px] font-[600] mt-4">
            Loading Data....
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className=" max-w-[1200px] mx-auto bg-white min-h-[100vh] pb-[30px] mt-3">
      <div className="flex flex-col-reverse lg:flex-row mt-[15px] lg:mt-0 items-start lg:gap-[120px] justify-between px-[30px] ">
        <div className="flex flex-col pt-[20px] pb-[21px] lg:pr-[30px] px-0 rounded-r-md ">
          <div className="flex flex-col">
            <Link href="/questions" className="my-3 text-[#2F9B4E] text-xl cursor-pointer">
              <BsArrowLeftCircleFill />
            </Link>
            <div className="flex items-center gap-[5px]">
              {post?.user?.image === undefined ? (
                <span className="max-h-8 p-2 rounded-full max-w-8 bg-[#DBF3D9]">
                  <FaRegUser className="text-slate-400 " />
                </span>
              ) : (
                <Image
                  src="/user.png"
                  alt="prof"
                  width={18}
                  height={18}
                  className="w-[18px] lg:w-[22px] h-[18px] lg:h-[22px]"
                />
              )}

              <div className="flex items-center justify-center gap-[5px]">
                <p
                  className={`flex items-center justify-center text-[14px] lg:text-[16px] leading-[16px] lg:leading-[22px] font-[400] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
                >
                  <span className=" flex items-center justify-center gap-2">
                    {post?.user?.first_name} - <Image
                      src="/Flag_of_Kenya.png"
                      alt="photo"
                      width={30}
                      height={25}
                      className="lg:block rounded-sm h-4"
                    /> Kenya
                  </span>
                  <span className="max-h-3 max-w-3 flex items-center justify-center mt-1">
                    <BsDot className="text-black text-xl" />{" "}
                  </span>
                  <span className="text-[12px] pt-[2px] ">
                    {formatDate(post?.created_at)} |{" "}
                    {formatDateToTime(post?.created_at)}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <p
            className={`text-[14px] md:text-[18px] lg:text-[26px] mt-[10px] leading-[24px] lg:leading-[42px] font-[600] text-[#212121]/90 tracking-[-0.03em] ${jost.className}`}
          >
            {post?.title}
          </p>
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
          className="h-[44px] ml-auto mt-2 whitespace-nowrap w-[151px] bg-[#2F9B4E] rounded-[5px] py-[14px] px-[24px] font-[700] text-[16px] leading-[22px] tracking-[-0.04em] text-[#FFFFFF]"
        >
          Ask a Question
        </button>
      </div>

      <hr className="mt-[30px]"></hr>

      <div className="flex flex-col lg:flex-row ">
        <div className="flex flex-col">
          <div className="flex mx-[30px] my-3 border border-slate-100">
            <div className="flex flex-col pt-[10px] pr-[8px] items-center justify-start bg-[#DBF3D9] w-[42px] lg:w-[64px]">
              <div onClick={() => upVotePost(post?.id)} className="mb-2">
                <Image
                  src={thumbsup}
                  alt="prof"
                  width={18}
                  height={18}
                  className="w-[18px] lg:w-[22px] h-[18px] lg:h-[22px] cursor-pointer "
                />

              </div>
              <span
                className={`text-[12px] lg:text-[16px] leading-[18px] font-[500] text-[#2F9B4E] tracking-[-0.04em] ${satoshi.className}`}
              >
                {post?.votes ?? 0}
              </span>
            </div>
            <div className="flex bg-white flex-col pb-[21px] px-[12px] ">
              <p
                className={`text-[14px] w-full max-w-[730px]  lg:text-[16px] mt-[10px] leading-[28px] lg:leading-[31px] font-[500] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
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
          </div>
          <div className=" w-full border-t border-slate-200">
            <h1
              className={`leading-[38px] mt-3 px-[30px] font-[600] text-[26px] tracking-[-0.04em] text-[#212121] ${jost.className}`}
            >
              Answers
            </h1>
            <div className="flex flex-col">
              {loadingReplies ? (
                <div className=" w-full flex items-center justify-center mt-20 ">
                  <div className="w-full mx-auto flex flex-col items-center justify-center ">
                    <FaSpinner className="animate-spin h-8 w-8 text-[#2F9B4E] text-center" />
                    <h2 className="text-center text-[16px] font-[600] mt-4">
                      Loading Answers....
                    </h2>
                  </div>
                </div>
              ) : (
                <div className={`mt-2 ${answers?.replies?.length! >= 10 ? "h-[600px]" : "h-auto"}  flex flex-col gap-3 no-scrollbar overflow-auto`}>
                  {answers?.replies?.length === 0 ? (
                    <div className="flex w-full items-start justify-start ml-10 mt-10 h-full bg-white ">
                      <div className="flex py-2 px-4 flex-col items-center justify-center gap-3 shadow-md border border-[#2F9B4E] rounded-md">
                        <BsFillExclamationCircleFill className="text-[#2F9B4E] w-10 h-10" />
                        <h1>No Answers For this Question Yet!!!!</h1>
                      </div>
                    </div>
                  ) : (
                    answers?.replies?.map((reply: any, indx) => (
                      <div key={indx} className=" w-full ">
                        <div className="flex px-[30px] w-full">
                          <div className="flex flex-col pt-[10px] pr-[8px] items-center justify-start bg-white w-[42px] lg:w-[64px]">
                            <div onClick={() => upVoteReply(reply?.id)} className="mb-2">
                              <Image
                                src={thumbsup}
                                alt="prof"
                                width={18}
                                height={18}
                                className="w-[18px] lg:w-[22px] h-[18px] lg:h-[22px] text-red-500 cursor-pointer"
                              />

                            </div>

                            <span
                              className={`text-[12px] lg:text-[16px] leading-[18px] font-[500] text-[#2F9B4E] tracking-[-0.04em] ${satoshi.className}`}
                            >
                              {reply?.up_votes?.length}
                            </span>
                          </div>
                          <div className="flex w-full flex-col pb-[21px] px-[12px] lg:pr-[30px] bg-white ">
                            <p
                              className={`text-[14px] lg:text-[16px] mt-[10px] leading-[28px] lg:leading-[31px] max-w-[660px] font-[500] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
                            >
                              {reply?.text}
                            </p>

                            <div className="flex gap-[5px] mt-[10px]">
                              {reply.user.image === undefined ? (
                                <span className="max-h-8 p-2 rounded-full max-w-8 bg-[#DBF3D9]">
                                  <FaRegUser className="text-slate-400 " />
                                </span>
                              ) : (
                                <Image
                                  src="/user.png"
                                  alt="prof"
                                  width={18}
                                  height={18}
                                  className="w-[18px] lg:w-[22px] h-[18px] lg:h-[22px]"
                                />
                              )}
                              <div className="flex flex-col md:flex-row items-start gap-[5px] lg:items-center justify-between w-full">
                                <p
                                  className={`flex flex-col  items-start text-[14px] lg:text-[16px] leading-[16px] lg:leading-[22px] font-[400] text-[#212121]/70 tracking-[-0.04em] ${satoshi.className}`}
                                >
                                  <span className="text-[12px]">Answered by</span>
                                  <span className="text-[12px] flex items-center justify-center gap-1 text-[#2F9B4E]">
                                    {" "}
                                    {reply?.user?.first_name} -{" "}
                                    {reply?.user?.last_name},
                                    <Image
                                      src="/Flag_of_Kenya.png"
                                      alt="photo"
                                      width={20}
                                      height={10}
                                      className="lg:block rounded-sm h-4"
                                    />
                                    {" "}
                                    {reply?.user?.country === null
                                      ? "Kenya"
                                      : reply?.user?.country}{" "}
                                  </span>
                                </p>
                                <span className="text-[12px] leading-[22px] text-[#212121]/70">
                                  {formatDate(reply?.created_at)} |{" "}
                                  {formatDateToTime(reply?.created_at)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className="bg-slate-200 h-[1px] w-[90%] mx-auto"></hr>
                      </div>
                    ))
                  )}
                </div>
              )}

              <hr className="mt-[30px]"></hr>

              <div className="flex flex-col items-start gap-[10px] px-[15px] lg:px-[30px] ">
                <h1
                  className={`leading-[38px] py-[10px] font-[600] text-[26px] tracking-[-0.04em] text-[#212121] ${jost.className}`}
                >
                  Submit Your Answer
                </h1>
                <form action="" onSubmit={handleSubmit(onSubmit)} className=" flex flex-col items-end">
                  <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} rows={6} className="shadow-sm p-2 outline-0 border border-gray-400 rounded-md  px-2 min-h-[200px] min-w-[802px] w-full mx-auto" />

                  <button
                    type="submit"
                    disabled={posting}
                    className={`my-[35px]  ${posting ? "bg-[#2F9B4E]/70 cursor-not-allowed" : "bg-[#2F9B4E] cursor-pointer"} ml-auto w-[144px] h-[50px]  py-[14px] px-[24px] rounded-[5px] text-white  text-center text-[16px] leading-[21px] tracking-[-0.04em] ${satoshi.className}`}
                  >
                    {posting ? <FaSpinner className="animate-spin h-8 w-8 text-white" /> : "Post Answer"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:border-l lg:border-[#BFBFBF]/60 ">
          <div className="mt-[20px] px-[15px] flex items-center justify-start">
            <Image
              src="/airtel_add.png"
              alt=""
              width={350}
              height={250}
              className="w-[350px] lg:w-[450px] rounded-md"
            />
          </div>

          <div className="mt-[25px] border border-[#FAFAFA] shadow-sm mx-[15px] px-[5px] ">
            <h2
              className={`font-[600] py-[15px] bg-[#FAFAFA]  text-[18px] leading-[26px] tracking-[-0.03em] text-[#212121]/90 ${jost.className}`}
            >
              Hot Topics
            </h2>
            <div className="flex flex-col gap-[20px] mt-[15px] py-[10px] w-full lg:w-[300px] h-[300px]  no-scrollbar overflow-auto ">
              {posts.map((post) => {
                return (
                  <p
                    key={post?.id}
                    onClick={() => {
                      let id = `${post?.title?.split(" ").join("-")}-${post?.id}`
                      router.push(`/questions/${id}`)
                    }}
                    className={`font-[400] ${satoshi.className} text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
                  >
                    <span>🍎</span>
                    {post?.title}
                  </p>
                )
              })}

            </div>
          </div>
        </div>
      </div>
      <LoginModal />
      <EditorModal />
    </div>
  );
}

export default Page;
