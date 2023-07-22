import React, { useContext, useEffect, useRef, useState } from "react";
import { jost, satoshi } from "../fonts/Fonts";
import Image from "next/image";
import { BiMessage } from "react-icons/bi";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { useRouter } from "next/navigation";
import { Skeleton } from "./ui/Skeleton";
import { useAppDispatch, useAppSelector } from "../hooks/react-redux-hooks";
import { getPosts } from "../redux/actions/getPosts.action";
import { Post } from "../types/types";
import { FaRegUser, FaSpinner } from "react-icons/fa";
import { formatDate, formatDateToTime } from "../lib/constants";
import { BsSearch } from "react-icons/bs";
import EditorModal from "./EditorModal";
import { UseEditorModal } from "../hooks/useEditorModalContext";
import { SearchContext } from "../context/SearchState";
import { AiOutlineReload } from "react-icons/ai";

export const PostQuestion = () => {
  const router = useRouter();
  const buttonRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch();
  const { openEditorModal, setOpenEditorModal } = useContext(UseEditorModal);
  const post = useAppSelector((state) => state.post);

  const { searchedValue, setSearchedValue } = useContext(SearchContext);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      let res: any = await dispatch(getPosts());
      setPosts(res.payload.posts);
      setLoading(false);
    };
    fetchPost();
  }, [post, dispatch]);

  
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



  const filteredPosts = posts?.filter((post) => post.name.includes(searchedValue.searchedValue));

  useEffect(() => { router.refresh() }, [router])


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
            setOpenEditorModal(true);
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
          <div className="flex flex-col  w-full ">
            <h2
              className={`font-[600]  text-[26px] leading-[42px] tracking-[-0.04em] tex-[#212121] ${jost.className}`}
            >
              Recent Community Discussions
            </h2>
            {loading ? (
              <div className=" w-full flex items-center justify-center mt-20 ">
                <div className="w-full mx-auto flex flex-col items-center justify-center ">
                  <FaSpinner className="animate-spin h-8 w-8 text-[#2F9B4E] text-center" />
                  <h2 className="text-center text-[16px] font-[600] mt-4">
                    Loading Posts....
                  </h2>
                </div>
              </div>
            ) : (
              <div className="flex flex-col mt-[15px] gap-[15px] w-full h-[600px] pb-[15px]  no-scrollbar overflow-auto">
                {filteredPosts?.map((post, indx) => {
                  return (
                    <div
                      key={indx}
                      className="flex min-w-[350px] md:max-w-full lg:max-w-full  min-h-[167px] lg:min-h-[220px]  xl:min-h-[167px] cursor-pointer "
                    >
                      <div className="flex flex-col pt-[20px] lg:px-[15px] items-center justify-start bg-[#DBF3D9] w-[42px] lg:w-[64px] rounded-l-md">
                        <MdArrowDropUp className="w-[35px] h-[25px] text-[#2F9B4E]" />

                        <span
                          className={`text-[12px] lg:text-[16px] leading-[18px] font-[500] text-[#2F9B4E] tracking-[-0.04em] ${satoshi.className}`}
                        >
                          19.3k
                        </span>
                        <MdArrowDropDown className="w-[35px] h-[25px] text-[#2F9B4E]" />
                      </div>
                      <div
                        onClick={() =>
                          router.push(`/dashboard/reply/${post.id}`)
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
                              {post.user.first_name} - {post.user.county}{" "}
                              county, {post.user.country}
                            </p>
                            {/* <Image
                          src={discussion.countryFlagImage!}
                          alt="flag"
                          width={21}
                          height={15}
                          className="w-[19px] lg:w-[21px] h-[14px] lg:h-[15px]"
                        /> */}
                          </div>
                        </div>
                        <p
                          className={`text-[14px] lg:text-[18px] mt-[10px] leading-[24px] lg:leading-[31px] font-[600] text-[#212121]/90 tracking-[-0.03em] ${jost.className}`}
                        >
                          {post.name}
                        </p>
                        <div className="flex flex-row items-center justify-between my-[21px] mr-[10px] ">
                          <div className="flex items-center gap-3">
                            <BiMessage className="w-[12.8px] lg:w-[20px] h-[12px] lg:h-[18px] text-[#212121]/70" />

                            <p
                              className={`text-[#212121]/70 text-[12px] lg:text-[14px] leading-[16px] lg:leading-[22px] tracking-[-0.04em] ${satoshi.className} font-[500]`}
                            >
                              6 replies
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
            )}
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
              <p
                className={`font-[400] ${satoshi.className} text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                <span>🍎</span>
                Can any agronomist please share with me a nutritional program
                for apples suitable for Kilifi-south sub-county?
              </p>
              <p
                className={`font-[400] ${satoshi.className} text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                <span>🙋🏼‍♂️</span>A nutritional program for apples suitable
              </p>
              <p
                className={`font-[400] ${satoshi.className} text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                <span>🍎</span>
                Can any agronomist please share with me a nutritional program
                for apples suitable for Kilifi-south sub-county?
              </p>
              <p
                className={`font-[400] ${satoshi.className} text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                <span>🙋🏼‍♂️</span>A nutritional program for apples suitable
              </p>
              <p
                className={`font-[400] ${satoshi.className} text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                <span>🍎</span>
                Can any agronomist please share with me a nutritional program
                for apples suitable for Kilifi-south sub-county?
              </p>
              <p
                className={`font-[400] ${satoshi.className} text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                <span>🍎</span>A nutritional program for apples suitable
              </p>
              <p
                className={`font-[400] ${satoshi.className} text-[14px] leading-[22px] tracking-[-0.04em] text-[#2F9B4E] cursor-pointer flex items-start gap-[5px]`}
              >
                <span>🍎</span>A nutritional program for apples suitable
              </p>
            </div>
          </div>
        </div>
      </div>

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
