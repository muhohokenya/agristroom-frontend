"use client";

import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { useFormContext } from "../context/formstate";
import { ManagedUI } from "../hooks/useModalContext";

const Stepper = () => {
  const { state, setState } = useFormContext();
  const { setOpenModal } = useContext(ManagedUI);
  const loacation = usePathname();
  const router = useRouter();

  //state
  const [showAddressCheck, setShowAddressCheck] = useState(false);
  const [showDetailsCheck, setShowDetailsCheck] = useState(false);
  const [showAccountCheck, setShowAccountCheck] = useState(false);
  const [showInterestCheck, setShowInterestCheck] = useState(false);

  useEffect(() => {
    if (state.email !== "" && state.password !== "") {
      setShowAddressCheck(true);
    }

    if (state.first_name !== "" && state.last_name !== "") {
      setShowDetailsCheck(true);
    }

    for (let key of Object.keys(state.account)) {
      let keyString: string = state?.account[key as keyof { id: string; name: string; }];
      if (keyString !== "") {
        setShowAccountCheck(true);
      }
    }

    if (state.interests.length > 0) {
      setShowInterestCheck(true);
    }
  }, [state]);
  return (
    <div className=" w-full">
      <div className="flex relative items-center !rounded-md px-5 justify-center  h-full flex-col">
        <div className="flex flex-col items-center justify-center  w-full bg-white rounded-lg ">
          <div className="flex  flex-col gap-3 rounded-md h-full">
            <MdClose
              className="absolute top-3 right-3 text-lg h-[25px] w-[25px] text-[#212121]/70 cursor-pointer"
              onClick={() => {
                router.push("/");
                setOpenModal(false);
              }}
            />
            <h1 className="w-full text-center mt-4 text-[#2F9B4E] ">Registration steps</h1>
            <div className="flex gap-2 lg:gap-4 my-2 items-center">
              <div
                onClick={() => router.push("/auth/signup")}
                className={`cursor-pointer flex gap-[1px] items-center justify-center ${loacation === "/auth/signup" ? "text-[#2F9B4E] underline" : ""
                  }`}
              >
                {showAddressCheck && (
                  <BsCheck className="text-[#2F9B4E] h-12 text-sm md:text-2xl" />
                )}
                <span className="text-[12px] md:text-[14px]">Address</span>
              </div>
              <div
                onClick={() => router.push("/auth/signup/accountinformations")}
                className={`cursor-pointer flex gap-[1px] items-center justify-center ${loacation === "/auth/signup/accountinformations"
                    ? "text-[#2F9B4E] underline"
                    : ""
                  }`}
              >
                {showDetailsCheck && (
                  <BsCheck className="text-[#2F9B4E] h-12 text-sm md:text-2xl" />
                )}
                <span className="text-[12px] md:text-[14px]">Details</span>
              </div>
              <div
                onClick={() => router.push("/auth/signup/createaccounts")}
                className={` cursor-pointer flex gap-[1px] items-center justify-center ${loacation === "/auth/signup/createaccounts"
                    ? "text-[#2F9B4E] underline"
                    : ""
                  }`}
              >
                {showAccountCheck && (
                  <BsCheck className="text-[#2F9B4E] h-12 text-sm md:text-2xl" />
                )}
                <span className="text-[12px] md:text-[14px] whitespace-nowrap">
                  Account Type
                </span>
              </div>
              <div
                onClick={() => router.push("/auth/signup/interest")}
                className={`cursor-pointer flex gap-[1px] items-center justify-center ${loacation === "/auth/signup/interest"
                    ? "text-[#2F9B4E] underline"
                    : ""
                  }`}
              >
                {showInterestCheck && (
                  <BsCheck className="text-[#2F9B4E] h-12 text-sm md:text-2xl" />
                )}
                <span className="text-[12px] md:text-[14px]">Interests</span>
              </div>
              <div
                onClick={() => router.push("/auth/signup/profilesummary")}
                className={`cursor-pointer flex gap-[1px] items-center justify-center ${loacation === "/auth/signup/profilesummary"
                    ? "text-[#2F9B4E] underline"
                    : ""
                  }`}
              >
                <span className="text-[12px] md:text-[14px]">Finish</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
