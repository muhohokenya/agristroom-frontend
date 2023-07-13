"use client";

import { MdArrowBackIos } from "react-icons/md";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ManagedUI } from "@/src/hooks/useModalContext";
import { jost, satoshi } from "@/src/fonts/Fonts";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "./ui/Input";
import { PhoneInput } from "./ui/PhoneInput";
import { useFormContext } from "../context/formstate";
import { Phone } from "lucide-react";

interface Props { }

type Inputs = {
  firstName: string;
  lastName: string;
  phone: string;
};

function AccountInformation(props: Props) {
  const { state, setState } = useFormContext();
  const router = useRouter();
  const { setOpenModal } = useContext(ManagedUI);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    setError,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      phone: state.phone_number,
      firstName: state.first_name,
      lastName: state.last_name
    }
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setOpenModal(true);
    router.push("/signup/interest");
    setState((prevState) => ({
      ...prevState,
      first_name: data.firstName,
      last_name: data.lastName,
      phone_number: data.phone
    }))
  };

  console.log("info state", state);

  useEffect(() => {
    reset({
      firstName: state.first_name,
      lastName: state.last_name,
      phone: state.phone_number
    })
    setValue("phone", state.phone_number)
  }, [reset])


  return (
    <div className=" flex flex-col  max-h-[610px] items-center  lg:max-h-[620px] mt-10 py-[40px] bg-white w-full  max-w-[345px] lg:max-w-[594px] mx-auto rounded-md shadow-md">
      <div className="flex mx-[15px] lg:mx-[40px] gap-[14px] items-center ">
        <MdArrowBackIos
          className=" cursor-pointer"
          onClick={() => router.push("/signup/createaccounts")}
        />
        <h2
          className={`font-[400] text-[18px] lg:text-[24px] leading-[24px]  tracking-[0.04em] text-[#212121] ${jost.className}`}
        >
          Kindly fill in the following information
        </h2>
      </div>

      <hr className="my-[15px] lg:my-[20px] min-w-[315px] lg:min-w-[494px] bg-[#BFBFBF]/60 h-[1px] "></hr>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="w-full flex flex-col gap-[15px] lg:gap-[20px] max-w-[315px] lg:min-w-[494px] mx-[15px] lg:mx-[40px]">
          <div className="flex flex-col  gap-[8px] w-full ">
            <label>First Name</label>
            <div className=" flex flex-col justify-start items-center">
              <Input
                {...register("firstName", { required: true })}
                type="text"
                className="w-full focus-visible:ring-[#2F9B4E]  h-[48px] px-2 border border-1-[#BFBFBF]/60 outline-0 outline-[#BFBFBF]/60 rounded-[5px] bg-[#FFFFFF] focus:outline focus:outline-[#BFBFBF]/60 "
              />
              {errors.firstName && errors.firstName.type === "required" && (
                <span className="text-red-400 text-[12px] mt-1 w-full">Username is required</span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-[8px] w-full">
            <label>Last Name</label>
            <div className=" flex flex-col justify-start items-center">
              <Input
                {...register("lastName", { required: true })}
                type="text"
                className=" focus-visible:ring-[#2F9B4E]  w-full  h-[48px] px-2 border border-1-[#BFBFBF]/60 outline-0 outline-[#BFBFBF]/60 rounded-[5px]  focus:outline focus:outline-[#BFBFBF]/60 "
              />
              {errors.lastName && errors.lastName.type === "required" && (
                <span className="text-red-400 text-[12px] mt-1 w-full">Username is required</span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-[8px] w-full">
            <label>Phone Number</label>
            <div className=" flex items-center gap-[8px]">
              <PhoneInput
                {...register("phone")}
                setValue={(code: string, number: string) => {
                  setValue("phone", `${code}${number}`)
                  if (number) setError("phone", { message: "" })
                }}
              />
            </div>
          </div>

          <input
            type="submit"
            className={`my-[20px] bg-[#2F9B4E] cursor-pointer w-full py-[14px]  h-[50px] rounded-[5px] text-white  text-center text-[16px] leading-[22px] tracking-[-0.0em] ${satoshi.className}`}

            value="Continue"
          />
        </div>
      </form>
    </div>
  );
}

export default AccountInformation;
