"use client";

import { Input } from "@/src/components/ui/Input";
import { satoshi } from "@/src/fonts/Fonts";
import { ManagedUI } from "@/src/hooks/useModalContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEyeSlash, FaSpinner } from "react-icons/fa";
import { useFormContext } from "../../context/formstate";
import { checkIfEmailExist, checkIfUserNameExists } from "../../hooks/username-exists";
import Stepper from "../Stepper";

type Inputs = {
  username: string;
  email: string;
  password: string;
};

const SignUpPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { setOpenModal } = useContext(ManagedUI);
  const { state, setState } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("")
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isLoading },
  } = useForm<Inputs>({
    defaultValues: state,
    mode: "onSubmit",
  });


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const [emailResponse, usernameResponse] = await Promise.all([checkIfEmailExist(data.email), checkIfUserNameExists(data.username)]);

    if (emailResponse?.status === "available" && usernameResponse?.status === "available") {
      setIsSubmitting(true);
      setState((prevState) => ({
        ...prevState,
        username: data.username,
        email: data.email,
        password: data.password,
      }));
      setOpenModal(true);
      router.push("/auth/signup/accountinformations");
    }
    if (pathname !== "/auth/signup") {
      setIsSubmitting(false)
    }
    if (emailResponse?.status === "taken") {
      setEmailErrorMessage(emailResponse?.status);
      setTimeout(() => {
        setEmailErrorMessage("")
      }, 4000)
    }
    if (usernameResponse?.status === "taken") {
      setUsernameErrorMessage(usernameResponse?.status);
      setTimeout(() => {
        setUsernameErrorMessage("")
      }, 4000)
    }
  };


  useEffect(() => {
    setEmailErrorMessage("");
    setUsernameErrorMessage("");
    reset({
      username: state.username,
      email: state.email,
      password: state.password,
    });
  }, [reset, state.email, state.password, state.username]);


  return (
    <div className="relative flex flex-col items-center justify-center  max-w-[345px] lg:max-w-[594px] mx-auto bg-white">
      <Stepper />
      <div className="relative border-t border-t-slate-200 w-full flex flex-col items-center justify-center h-auto  py-[20px] bg-whit max-w-[345px] lg:max-w-[594px] mx-auto">
        <div className="flex mt-[10px] w-full ">
          <h2
            className={`font-[600] mx-[15px] lg:mx-[40px] text-[18px] leading-[24px] text-start  tracking-[0.04em] text-[#212121]`}
          >
            Sign Up to AgriStroom
          </h2>
        </div>
        <form
          action=""
          className="flex flex-col w-full mt-[15px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full flex flex-col gap-[15px] lg:gap-[20px] max-w-[315px] lg:min-w-[394px] mx-[15px] lg:mx-[40px]">
            <div className="flex flex-col gap-[8px] w-full ">
              <label className="text-[13px]">Username</label>
              <Input
                className="focus-visible:ring-[#2F9B4E]"
                {...register("username", { required: true })}
              />
              {errors.username && errors.username.type === "required" && (
                <span className="text-red-400 text-[12px] mt-1 w-full">
                  Username is required
                </span>
              )}
              {usernameErrorMessage === "taken" && (
                <span className="text-red-400 text-[12px] mt-1 w-full">
                  This Username has been taken. Please try another one.
                </span>
              )}
            </div>
            <div className="flex flex-col gap-[8px] w-full ">
              <label className="text-[13px]">Email Address</label>
              <Input
                className="focus-visible:ring-[#2F9B4E]"
                {...register("email", { required: true })}
              />
              {errors.email && errors.email.type === "required" && (
                <span className="text-red-400 text-[12px] mt-1 w-full">
                  Email is required
                </span>
              )}
              {emailErrorMessage === "taken" && (
                <span className="text-red-400 text-[12px] mt-1 w-full">
                  This Email has been taken. Please try another one.
                </span>
              )}
            </div>
            <div className="flex flex-col gap-[8px] w-full">
              <label className="text-[13px]">Password</label>
              <div className="relative flex flex-col items-center justify-center">
                <Input
                  type={showPassword ? "text" : "password"}
                  className="focus-visible:ring-[#2F9B4E]"
                  {...register("password", { required: true, minLength: 8 })}
                />
                <span className="flex items-start justify-end absolute cursor-pointer right-3">
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    className="  h-8 w-8 text-[#2F9B4E] "
                  />
                </span>
                {errors.password && errors.password?.type === "required" && (
                  <span className="text-red-500 text-[12px] w-full mt-1">
                    Password is required
                  </span>
                )}
                {errors.password && errors.password?.type === "minLength" && (
                  <span className="text-red-500 text-[12px] w-full mt-1">
                    Password cannot be less than 8 characters
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className=" mt-[35px] mx-[15px] lg:mx-[40px] ">
            <button
              type="submit"
              disabled={isSubmitting}
              className={` bg-[#2F9B4E] ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
                } flex items-center justify-center gap-2 max-w-[315px] lg:min-w-[394px] py-[14px] px-[24px] h-[50px] rounded-[5px] text-white w-full text-center text-[16px] leading-[22px] tracking-[-0.0em] ${satoshi.className
                }`}
            >
              {isSubmitting && (
                <FaSpinner className="animate-spin max-h-10 max-w-10 text-white" />
              )}
              <span>Continue</span>
            </button>
          </div>
        </form>

        <div className="mt-[15px] text-[14px] text-[#212121]/50 font-[500] leading-[19px] tracking-[-0.04em]">
          Already have an account?{" "}
          <Link className="ml-[5px] font-[700] text-[#2F9B4E]" href="/auth/login">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
