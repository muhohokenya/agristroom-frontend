"use client";


import { Button } from "@/src/components/ui/Button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/src/components/ui/Dialog";
import { Input } from "@/src/components/ui/Input";
import { Label } from "@/src/components/ui/label";
import { useAuthState } from "@/src/context/auth";
import useGetCurrentUser from "@/src/context/current-user";
import { useAppDispatch } from "@/src/hooks/react-redux-hooks";
import { toast } from "@/src/hooks/use-toast";
import { resetPassword } from "@/src/redux/actions/auth.action.action";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiEditAlt } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import * as Yup from 'yup';

interface ResetPassword {
  password: string
  password_confirmation: string
}


const formSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password length should be at least 4 characters")
    .max(24, "Password cannot exceed more than 12 characters"),
  password_confirmation: Yup.string()
    .required("Confirm Password is required")
    .min(4, "Password length should be at least 4 characters")
    .max(24, "Password cannot exceed more than 12 characters")
    .oneOf([Yup.ref("password")], "Passwords do not match")
});

function Page() {
  const [showImageUploadButton, setShowImageUploadButton] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { handleSubmit, register, formState: { errors } } = useForm<ResetPassword>({
    mode: "onTouched",
    resolver: yupResolver(formSchema)
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { user, setUser } = useAuthState();
  useGetCurrentUser()

    ;

  const submitPassword = async (data: ResetPassword) => {
    setIsSubmitting(true);
    const inputValue = {
      token: "params?.token",
      email: localStorage.getItem("email") as string,
      password: data.password,
      password_confirmation: data.password_confirmation,
    }
    const res: any = await dispatch(resetPassword(inputValue));
    if (res?.payload?.success) {
      router.refresh()
      router.push("/auth/login")
      setIsSubmitting(false)
      toast({
        title: `${res?.payload?.result?.message ?? ""}. Please login with your new Password`,
        variant: "secondary"
      })
    } else {
      toast({
        title: `Something went wrong`,
        variant: "destructive"
      })
    }
    setIsSubmitting(false)
  };

  useEffect(() => {

  }, [])

  console.log('====================================');
  console.log(user);
  console.log('====================================');

  return (
    <div className="flex items-center h-[cal(100%_-_100px)] w-full justify-center">
      <div className="bg-white max-w-[1200px] mx-[20px] lg:mx-auto w-full h-auto pt-16 mt-5  ">
        <div className="flex flex-col ">
          <h2 className="ml-3 text-slate-900 text-[18px] leading-[22px] font-semibold">My Profile</h2>
          <div className="flex flex-col mt-2 mx-4 ">
            <div className="flex flex-col ">
              <div className="image-container flex gap-3 items-center">
                <div className="flex flex-col">
                  <div className="div bg-white h-[70px] w-[70px] flex items-center rounded-full justify-center mt-2">
                    <Image
                      src="/user-2.png"
                      alt=""
                      width={66}
                      height={66}
                      className="bg-[#DBF3D9] rounded-full"
                    />
                  </div>
                  <div className="flex flex-col mt-2">
                    <span className="text-[13px] text-slate-500 leading-[16px]">
                      {`@${user?.username ?? ""}`}
                    </span>
                    <span className="text-[13px] text-slate-500 leading-[16px]">
                      {`${user?.account?.name}`}
                    </span>
                  </div>
                </div>
                <span className="text-[22px] relative bg-[#DBF3D9] text-[#2F9B4E] !py-[2px] rounded-md px-2 mt-1 ">
                  <BsThreeDots
                    onClick={() =>
                      setShowImageUploadButton(!showImageUploadButton)
                    }
                    className="cursor-pointer"
                  />
                  {showImageUploadButton && (
                    <>
                      <span className="bg-gray-50 absolute top-0 h-6 w-6 left-10 rotate-45"></span>
                      <div className="flex flex-col gap-2 absolute -top-1 left-12 bg-gray-50 py-1 rounded-md px-2">
                        <button className="text-[12px] bg-[#DBF3D9] text-[#2F9B4E] px-2 py-[2px] rounded-full">
                          Upload
                        </button>
                        <button className="text-[12px] bg-[#DBF3D9] text-[#2F9B4E] px-2 py-[2px] rounded-full">
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </span>
              </div>
            </div>
            <div className="flex flex-col mt-4 w-full lg:w-[500px] mb-20 ">
              <div className="flex flex-col relative border border-slate-200 shadow-md p-1">
                <h2 className=" text-slate-900 text-[16px] font-semibold leading-[18px] whitespace-nowrap">
                  Personal Information
                </h2>
                <div className="absolute top-0 right-5 cursor-pointer">
                  <Dialog>
                    <DialogTrigger asChild>
                      <BiEditAlt className="h-7 w-7 text-slate-600" />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[575px]">
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when you&apos;re done.
                        </DialogDescription>
                      </DialogHeader>
                      <>
                        <div className="flex gap-4 pt-2">
                          <div className="flex flex-col items-start justify-start gap-2">
                            <Label htmlFor="name" className="text-right">
                              First Name
                            </Label>
                            <Input id="name" value={user?.first_name} className="col-span-3" />
                          </div>
                          <div className="flex flex-col items-start justify-start gap-2">
                            <Label htmlFor="username" className="text-right">
                              Last Name
                            </Label>
                            <Input id="username" value={user?.last_name} className="col-span-3" />
                          </div>
                        </div>
                        <div className="flex gap-4 pt-2">
                          <div className="flex flex-col items-start justify-start gap-2">
                            <Label htmlFor="name" className="text-right">
                              Email
                            </Label>
                            <Input id="name" value={user?.email} className="col-span-3" />
                          </div>
                          <div className="flex flex-col items-start justify-start gap-2">
                            <Label htmlFor="username" className="text-right">
                              Phone
                            </Label>
                            <Input id="username" value={user?.phone_number} className="col-span-3" />
                          </div>
                        </div>
                        <div className="flex gap-4 pt-2">
                          <div className="flex flex-col items-start justify-start gap-2">
                            <Label htmlFor="name" className="text-right">
                              Username
                            </Label>
                            <Input id="name" value={user?.username} className="col-span-3" />
                          </div>

                        </div>

                      </>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="flex flex-col mt-3 gap-[10px]">
                  <div className="flex flex-col lg:flex-row items-start justify-start lg:gap-10 ">
                    <div className="flex flex-col">
                      <span className="text-slate-400 text-[14px] leading-5">
                        First Name
                      </span>
                      <span className="text-slate-800 text-[14px] leading-5">
                        {`${user?.first_name}`}
                      </span>
                    </div>
                    <div className="flex flex-col ">
                      <span className="text-slate-400 text-[14px] leading-5">
                        Last Name
                      </span>
                      <span className="text-slate-800 text-[14px] leading-5">
                        {`${user?.last_name}`}
                      </span>
                    </div>
                  </div>
                  <div className="flex  flex-col lg:flex-row items-start justify-start lg:gap-10">
                    <div className="flex flex-col">
                      <span className="text-slate-400 text-[14px] leading-5">
                        Email
                      </span>
                      <span className="text-slate-800 text-[14px] leading-5">
                        {`${user?.email}`}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-400 text-[14px] leading-5">
                        Phone
                      </span>
                      <span className="text-slate-800 text-[14px] leading-5">
                        {`${user?.phone_number}`}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start justify-start gap-10">
                    <div className="flex flex-col">
                      <span className="text-slate-400 text-[14px] leading-5">
                        UserName
                      </span>
                      <span className="text-slate-800 text-[14px] leading-5">
                        {`@${user?.username}`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-4 relative border border-slate-200 shadow-md p-1 ">
                <h2 className=" text-slate-900 text-[16px] font-semibold leading-[18px]">
                  Address
                </h2>
                <div className="absolute top-0 right-5 cursor-pointer">
                  <Dialog>
                    <DialogTrigger asChild>
                      <BiEditAlt className="h-7 w-7 text-slate-600" />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[575px]">
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when you&apos;re done.
                        </DialogDescription>
                      </DialogHeader>
                      <>
                        <div className="flex gap-4 pt-2">
                          <div className="flex flex-col items-start justify-start gap-2">
                            <Label htmlFor="name" className="text-right">
                              Country
                            </Label>
                            <Input id="name" value={user?.country ?? "Kenya"} className="col-span-3" />
                          </div>
                          <div className="flex flex-col items-start justify-start gap-2">
                            <Label htmlFor="username" className="text-right">
                              County
                            </Label>
                            <Input id="username" value={user?.county ?? "Nairobi"} className="col-span-3" />
                          </div>
                        </div>

                      </>
                      <DialogFooter>
                        <Button type="submit" className="bg">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="flex flex-col mt-3 gap-[10px]">
                  <div className="flex items-start justify-start gap-10">
                    <div className="flex flex-col">
                      <span className="text-slate-400 text-[14px] leading-5">
                        Country
                      </span>
                      <span className="text-slate-800 text-[14px] leading-5">
                        {`${user?.country ?? "Kenya"}`}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-400 text-[14px] leading-5">
                        County
                      </span>
                      <span className="text-slate-800 text-[14px] leading-5">
                        {`${user?.county ?? "Nairobi"} `}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-4 relative border border-slate-200 shadow-md p-1 ">
                <h2 className=" text-slate-900 text-[16px] font-semibold leading-[18px]">
                  My Interests
                </h2>
                <div className="absolute top-0 right-5 cursor-pointer">
                  <BiEditAlt className="h-7 w-7 text-slate-600" />
                </div>
                <div className="flex flex-col mt-3 gap-[10px]">
                  {user?.interests?.map((item: any, indx: number) => {
                    return (
                      <span key={indx}>{item?.name}</span>
                    )
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
