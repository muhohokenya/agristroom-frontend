"use client";

import { MdArrowBackIos } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ManagedUI } from "@/src/hooks/useModalContext";
import { jost, satoshi } from "@/src/fonts/Fonts";
import { useAppDispatch } from "../hooks/react-redux-hooks";
import { getInterests } from "../redux/actions/interest.action";
import { FaSpinner, FaTimes } from "react-icons/fa";
import { useFormContext } from "../context/formstate";
import Stepper from "./Stepper";

interface Props { }

export type InterestType = {
  id: string;
  name: string;
};

function InterestPage(props: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { state, setState } = useFormContext();
  const { setOpenModal } = useContext(ManagedUI);

  const [interests, setInterest] = useState<InterestType[]>([]);
  const [interestList, setInterestList] = useState<InterestType[]>([]);
  const [loading, setLoading] = useState(true);
  const [topicFound, setTopicFound] = useState("");
  const [searchField, setSearchField] = useState("");

  const [selectedInterests, setSelectedInterests] = useState<
    InterestType[] | undefined
  >([]);



  const removeitem = (topic: InterestType) => {
    if (selectedInterests?.some((interest) => interest.id === topic.id)) {
      const updatedArray = selectedInterests.filter((item) => item.id !== topic.id);
      setSelectedInterests(updatedArray);
    } else {
      const updatedArray = [...(selectedInterests ?? []), topic];
      setSelectedInterests(updatedArray);
    }
  };

  const interestChange = () => {
    if (topicFound === "") {
      setInterest(interestList);
    }
    const filtered = interestList.filter((item) => {
      if (item.name.toLowerCase().includes(topicFound.toLowerCase()))
        return item;
    });

    setInterest(filtered);
  };

  useEffect(() => {
    const getInterest = async () => {
      setLoading(true);
      let res: any = await dispatch(getInterests());
      setInterestList(res.payload.interests);
      setLoading(false);
    };
    getInterest();
  }, [dispatch]);


  const onSubmit = () => {
    setOpenModal(true);
    filteredInterests?.length! === 0
      ? router.push("/signup/addtopic")
      : router.push("/signup/profilesummary")
    setState((prevState) => ({
      ...prevState,
      interests: [...selectedInterests!]
    }))
  }

  useEffect(() => {
    if (state.interests.length > 0) {
      setSelectedInterests(state.interests)
    }
  }, [state.interests])

  const filteredInterests = interestList?.filter((interest) => {
    return (
      interest.name.toLowerCase().includes(searchField.toLowerCase())
    )
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value)
  }

  const removeOtherInterest = (item: string) => {
    let newOtherInterests = state.other_interests.filter((itm) => itm !== item)
    setState((prevState) => ({
      ...prevState,
      other_interests: newOtherInterests
    }))
  }



  return (
    <div className="flex flex-col bg-white w-full  max-w-[345px] lg:max-w-[594px] mx-auto">
      <Stepper />
      <div className=" border-t border-t-slate-300 flex flex-col  h-auto items-start mt-10 py-[40px] bg-white w-full  max-w-[345px] lg:max-w-[594px] mx-auto rounded-md shadow-md">
        <div className="flex mx-[15px] lg:mx-[40px] gap-[14px] items-center ">
          <MdArrowBackIos
            className=" cursor-pointer "
            onClick={() => router.push("/signup/createaccounts")}
          />
          <h2
            className={`font-[600] text-[20px] lg:text-[24px] leading-[24px]  tracking-[0.04em] text-[#212121] ${jost.className}`}
          >
            Tell us about yourself
          </h2>
        </div>

        <hr className="min-w-[315px] lg:min-w-[494px] mx-[15px] lg:mx-[40px] my-[20px] bg-[#BFBFBF]/60 h-[1px] "></hr>

        <div className="w-full mt-[20px] flex flex-col gap-[15px] lg:gap-[20px] max-w-[315px] lg:min-w-[494px] mx-[15px] lg:mx-[40px]">
          <p
            className={` w-full text-[14px] leading-[19px] font-[500] text-[#212121]/50 tracking-[-0.04em]  ${satoshi.className}`}
          >
            What are your interests?
          </p>
          <div className="flex items-center  gap-[5px] w-full ">
            <BiSearch className="-mr-10 text-2xl text-[#BFBFBF]/60 h-[25px] w-[27px] cursor-pointer" />
            <input
              placeholder="Search Topic"
              onChange={handleChange}
              type="text"
              className="w-full bg-transparent  h-[48px] mx-[5px] pl-10 border border-1-[#BFBFBF]/60 outline-0 outline-[#BFBFBF]/60 rounded-[5px] bg-[#FFFFFF] focus:outline focus:outline-[#BFBFBF]/60 "
            />
          </div>
          {loading ? (
            <div className=" w-full flex items-center justify-center my-3 ">
              <div className="w-full mx-auto flex flex-col items-center justify-center ">
                <FaSpinner className="animate-spin h-8 w-8 text-[#2F9B4E] text-center" />
                <h2 className="text-center text-[16px] font-[600] mt-4">
                  Loading Availlable Interests....
                </h2>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap gap-[20px]">
              {filteredInterests.length > 0 && filteredInterests.map((topic, indx) => {
                return (
                  <div
                    key={indx}
                    onClick={() => removeitem(topic)}
                    className={`cursor-pointer ${selectedInterests?.some((interest) => interest.id === topic.id)
                      ? "text-[#2F9B4E] bg-[#D7FBD7]"
                      : "bg-[#F5F5F5] text-[#212121]/70"
                      }  rounded-[30px] text-[14px] leading-[19px] font-[500]  tracking-[-0.04em] px-[10px] py-[5px] ${satoshi.className
                      }`}
                  >
                    {topic.name}
                  </div>
                )
              }
              )}
            </div>
          )}

          {
            state.other_interests.length > 0 && (
              <div className="flex w-full flex-col items-start justify-start">
                <h3 className="text-[14px]">Other Interests:</h3>
                <div className="flex gap-[6px] flex-wrap  items-center w-full  mt-[8px]">
                  {state.other_interests.length > 0 && state.other_interests.map((interest, index) => {
                    return (
                      <span key={index} className={`bg-[#D7FBD7] flex gap-2 items-center justify-center  py-[3px] px-[8px] rounded-[30px] text-[14px] leading-[19px] font-[500] text-[#2F9B4E] tracking-[-0.04em] ${satoshi.className}`}>
                        {interest}
                        <FaTimes onClick={() => removeOtherInterest(interest)} className=" max-h-6 max-w-6 cursor-pointer" />
                      </span>
                    )
                  })}
                </div>
              </div>
            )
          }
        </div>

        {
          filteredInterests.length === 0 && (
            <div className="flex w-full items-center justify-center gap-2">
              <HiOutlineExclamationCircle className="max-w-9 max-h-9 text-red-500" />
              <span className="text-[12px] text-red-500">
                {searchField} not found
              </span>
            </div>
          )
        }
        {selectedInterests?.length! > 0 && (
          topicFound === "" && (
            <div className="flex items-center  py-2 ml-auto  justify-end max-w-[315px] lg:min-w-[494px] mx-[15px] lg:mx-[40px]">
              <p className="w-full text-end text-[12px]  text-[#212121]/70">
                You have selected {selectedInterests?.length} item/s
              </p>
            </div>
          )
        )}

        <button
          onClick={onSubmit}
          className={`mt-[35px] mx-[15px] lg:mx-[40px] bg-[#2F9B4E] max-w-[315px] lg:max-w-[494px] py-[14px] px-[24px] h-[50px] rounded-[5px] text-white w-full text-center text-[16px] leading-[22px] tracking-[-0.0em] ${satoshi.className}`}
        >
          {filteredInterests?.length! === 0 ? "Add Topic" : "Continue"}
        </button>
      </div>
    </div>
  );
}

export default InterestPage;
