'use client'
import Navbar from "@/src/components/Navbar";
import { Input } from "@/src/components/ui/Input";
import { satoshi } from "@/src/fonts/Fonts";
import { useAppDispatch } from "@/src/hooks/react-redux-hooks";
import { toast } from "@/src/hooks/use-toast";
import { ManagedUI } from "@/src/hooks/useModalContext";
import { resetPassword } from "@/src/redux/actions/auth.action.action";
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaSpinner } from "react-icons/fa";
import { MdClose } from "react-icons/md";
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

const Page = ({ params }: { params: { token: string } }) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { handleSubmit, register, formState: { errors } } = useForm<ResetPassword>({
        mode: "onTouched",
        resolver: yupResolver(formSchema)
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { setOpenModal } = useContext(ManagedUI);

    ;

    const submitPassword = async (data: ResetPassword) => {
        setIsSubmitting(true);
        const inputValue = {
            token: params?.token,
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

    return (
        <div className="min-h-[100vh] bg-zinc-200 flex items-center justify-center">
            <Navbar />
            <div className='h-screen w-full  flex items-center justify-center'>
                <div className="flex max-w-[1200px] mx-auto">
                    <form action="" className="w-fit flex-col relative  flex items-center justify-center " onSubmit={handleSubmit(submitPassword)}>
                        <MdClose
                            className=" absolute top-3 right-3  text-lg h-[25px] w-[25px] text-[#212121]/70 cursor-pointer"
                            onClick={() => {
                                router.back();
                                setOpenModal(false)
                            }}
                        />
                        <div className="flex flex-col w-[400px] border border-slate-100 bg-white  py-10 px-10 rounded-md shadow-lg items-center justify-center ">
                            <div className="flex flex-col gap-[8px]">
                                <label>New Password</label>
                                <div className="relative flex items-center justify-between">
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your new password"
                                        className="focus-visible:ring-[#2F9B4E] w-[350px]"
                                        {...register("password", { required: true })}
                                    />
                                    <span className="flex items-start justify-end absolute cursor-pointer right-3">
                                        <FaEyeSlash
                                            onClick={() => {
                                                setShowPassword(!showPassword);
                                            }}
                                            className="  h-8 w-8 text-[#2F9B4E] "
                                        />
                                    </span>
                                </div>
                                {errors.password && errors.password.type === "required" && (
                                    <span className="text-red-400 text-[12px] mt-1 w-full">
                                        Password is required
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-col gap-[8px] mt-4">
                                <label>Confirm Password</label>
                                <div className="relative flex items-center justify-between">
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Confirm your new password"
                                        className="focus-visible:ring-[#2F9B4E] w-[350px]"
                                        {...register("password_confirmation", { required: true })}
                                    />
                                    <span className="flex items-start justify-end absolute cursor-pointer right-3">
                                        <FaEyeSlash
                                            onClick={() => {
                                                setShowPassword(!showPassword);
                                            }}
                                            className="  h-8 w-8 text-[#2F9B4E] "
                                        />
                                    </span>
                                </div>
                                {errors.password_confirmation && errors.password_confirmation.type === "required" && (
                                    <span className="text-red-400 text-[12px] mt-1 w-full">
                                        Confirm Password is required
                                    </span>
                                )}
                                {errors.password_confirmation?.message && (
                                    <span className="text-red-400 text-[12px] mt-1 w-full">
                                        {errors.password_confirmation?.message}
                                    </span>
                                )}
                            </div>

                            <div className=" mt-[35px] flex items-center justify-center">
                                <button
                                    type="submit"
                                    className={` bg-[#2F9B4E]/80 hover:bg-[#2F9B4E] hover:duration-500 hover:ease-in-out  w-[350px] ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"} flex items-center justify-center gap-1 py-[14px] h-[50px] rounded-[5px] text-white  text-center text-[16px] leading-[22px] tracking-[-0.0em] ${satoshi.className}`}
                                >
                                    {isSubmitting && <FaSpinner className="animate-spin max-h-8 max-w-8 mr-2 text-white" />}Change Password
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div>
    )
}

export default Page