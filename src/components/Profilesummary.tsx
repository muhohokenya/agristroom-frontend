"use client";
import { jost, satoshi } from "@/src/fonts/Fonts";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import {
  MdKeyboardArrowRight,
  MdOutlineEdit
} from "react-icons/md";
import { useFormContext } from "../context/formstate";
import { useAppDispatch, useAppSelector } from "../hooks/react-redux-hooks";
import { toast } from "../hooks/use-toast";
import { ManagedUI } from "../hooks/useModalContext";
import { RootState } from "../redux";
import { signUpUserAction } from "../redux/actions/auth.action.action";
import { UserRegisterData } from "../types/types";
import { InterestType } from "./Interest";
import Stepper from "./Stepper";

const ProfileSummary = () => {
  const router = useRouter();
  const { setOpenModal } = useContext(ManagedUI);
  const dispatch = useAppDispatch();
  const { state, setState } = useFormContext();

  const error = useAppSelector((state: RootState) => state.notifications);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const fullName = `${state?.first_name} ${state?.last_name}`;

  const [userInfo, setUerInfo] = useState<UserRegisterData>({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    phone_number: "",
    password: "",
    account_id: "",
    interests: [],
  });

  useEffect(() => {
    const userRegisterData: UserRegisterData = {
      first_name: state?.first_name,
      last_name: state?.last_name,
      email: state?.email,
      username: state?.username,
      phone_number: state?.phone_number,
      password: state?.password,
      account_id: state.account.id,
      interests: state?.interests,
    };

    setUerInfo(userRegisterData);
  }, [state]);

  const createUserAccount = async () => {
    const res: any = await dispatch(signUpUserAction(userInfo));
    localStorage.setItem("access_token", JSON.stringify(res.payload.access_token))
    setIsSubmitting(true);
    console.log("response", res.payload, isSubmitting);

    if (res?.payload?.success) {
      toast({
        title: "Account Created successfully",
        description: "You being directed to dashboard",
        variant: "secondary",
      });
      setIsSubmitting(false);
      router.push("/dashboard");
      setOpenModal(false)
    }

    if (!res?.payload?.success) {
      setIsSubmitting(false);
      toast({
        title: "There was a problem",
        description: error.error,
        variant: "destructive",
      });
      setOpenModal(false);
      router.push("/");
    }
  };


  return (
    <div className="flex flex-col bg-white w-full max-w-[345px] lg:min-w-[574px] mx-auto">
      <Stepper />
      <div className=" border-t border-t-slate-300 flex flex-col  max-h-[500px] items-start  lg:max-h-[600px] py-[20px] bg-white w-full  max-w-[345px] lg:min-w-[574px] mx-auto">
        <div className="flex w-full gap-[14px] items-center ">
          <h2
            className={`font-[600] mx-[15px] lg:mx-[40px] text-[20px] lg:text-[24px] leading-[24px]  tracking-[0.04em] text-[#212121] ${jost.className}`}
          >
            Profile Details Summary
          </h2>
        </div>

        <div className="w-full mt-[15px] flex flex-col items-center justify-center gap-[15px] lg:gap-[20px] max-w-[315px] lg:min-w-[474px] mx-[15px] lg:mx-[40px]">
          <div className="flex w-full justify-between">
            <div className="flex flex-col">
              <span
                className={`font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121]/50 ${satoshi.className}`}
              >
                Account Type
              </span>
              <span
                className={`mt-[20px] font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121]/50 ${satoshi.className}`}
              >
                Full Name
              </span>
              <span
                className={`mt-[20px] font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121]/50 ${satoshi.className}`}
              >
                UserName
              </span>
              <span
                className={`mt-[20px] font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121]/50 ${satoshi.className}`}
              >
                Email Address
              </span>

              {state?.phone_number !== "" ? (
                <span
                  className={`mt-[20px] font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121]/50 ${satoshi.className}`}
                >
                  Phone Number
                </span>
              ) : null}
            </div>
            <div className="flex flex-col items-end ">
              <span
                className={`flex items-center gap-[10px] font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121] ${satoshi.className}`}
              >
                {state?.account.name}{" "}
                <MdOutlineEdit
                  onClick={() => router.push("/signup/createaccounts")}
                  className="h-[16px w-[16px] !cursor-pointer !text-[#2F9B4E]"
                />
              </span>
              <span
                className={`mt-[20px] flex items-center gap-[10px] font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121] ${satoshi.className}`}
              >
                {fullName}{" "}
                <MdOutlineEdit
                  onClick={() => router.push("/signup/accountinformations")}
                  className="h-[16px w-[16px] !cursor-pointer !text-[#2F9B4E]"
                />
              </span>
              <span
                className={`mt-[20px] flex items-center gap-[10px] font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121] ${satoshi.className}`}
              >
                {state?.username}{" "}
                <MdOutlineEdit
                  onClick={() => router.push("/signup")}
                  className="h-[16px w-[16px] !cursor-pointer !text-[#2F9B4E]"
                />
              </span>
              <span
                className={`mt-[20px] flex items-center gap-[10px] font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121] ${satoshi.className}`}
              >
                {state?.email}{" "}
                <MdOutlineEdit
                  onClick={() => router.push("/signup")}
                  className="h-[16px w-[16px] !cursor-pointer !text-[#2F9B4E]"
                />
              </span>
              {state?.phone_number !== "" ? (
                <span
                  className={`mt-[20px] flex items-center gap-[10px] font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121] ${satoshi.className}`}
                >
                  {state?.phone_number}{" "}
                  <MdOutlineEdit
                    onClick={() => router.push("/signup/accountinformations")}
                    className="h-[16px w-[16px] !cursor-pointer !text-[#2F9B4E]"
                  />
                </span>
              ) : null}
            </div>
          </div>

          <div className="flex justify-between items-center w-full  mt-[40px]">
            <span
              className={`font-[500] text-[14px] leading-[19px] tracking-[-0.04em] text-[#212121]/50 ${satoshi.className}`}
            >
              Selected Interests
            </span>
            <span
              onClick={() => router.push("/signup/interest")}
              className={` font-[500] whitespace-nowrap flex items-center text-[14px] leading-[19px] tracking-[-0.04em] text-[#2F9B4E] justify-center cursor-pointer ${satoshi.className}`}
            >
              Add Interests{" "}
              <MdKeyboardArrowRight className="w-[20px] h-[20px] pt-1" />{" "}
            </span>
          </div>

          <div className="flex gap-[6px] flex-wrap  items-center w-full  mt-[13px]">
            {state?.interests?.map((interest: InterestType, indx) => {
              return (
                <span
                  key={indx}
                  className={`bg-[#D7FBD7] cursor-pointer py-[5px] px-[8px] rounded-[30px] text-[14px] leading-[19px] font-[500] text-[#2F9B4E] tracking-[-0.04em] ${satoshi.className}`}
                >
                  {interest.name}
                </span>
              );
            })}
          </div>

          {
            state.other_interests.length > 0 && (
              <div className="flex w-full flex-col items-start justify-start">
                <h3 className="text-[14px]">Other Interests:</h3>
                <div className="flex gap-[6px] flex-wrap  items-center w-full  mt-[8px]">
                  {state.other_interests.length > 0 && state.other_interests.map((interest, index) => {
                    return (
                      <span key={index} className={`bg-[#D7FBD7] cursor-pointer py-[3px] px-[8px] rounded-[30px] text-[14px] leading-[19px] font-[500] text-[#2F9B4E] tracking-[-0.04em] ${satoshi.className}`}>{interest}</span>
                    )
                  })}
                </div>
              </div>
            )
          }

          <button
            onClick={() => {
              createUserAccount();
            }}
            disabled={isSubmitting}
            className={`mt-[20px] ${isSubmitting && "cursor-not-allowed"
              } flex items-center justify-center gap-3 mx-[15px] lg:mx-[40px] bg-[#2F9B4E] min-w-[315px] lg:min-w-[474px] py-[14px] px-[24px] h-[50px] rounded-[5px] text-white w-full text-center text-[16px] leading-[22px] tracking-[-0.0em] ${satoshi.className
              }`}
          >
            {isSubmitting && (
              <FaSpinner className="animate-spin h-8 w-8 text-white" />
            )}{" "}
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSummary;
