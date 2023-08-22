'use client'

import { satoshi } from '@/src/fonts/Fonts';
import { useAppDispatch } from '@/src/hooks/react-redux-hooks';
import { ManagedUI } from '@/src/hooks/useModalContext';
import { resetPassword } from '@/src/redux/actions/auth.action';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaSpinner } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import * as Yup from 'yup';
import { Input } from '../ui/Input';

interface ResetPassword {
    password: string
    confirmPassword: string
}


const formSchema = Yup.object().shape({
    password: Yup.string()
        .required("Password is required")
        .min(4, "Password length should be at least 4 characters")
        .max(12, "Password cannot exceed more than 12 characters"),
    confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .min(4, "Password length should be at least 4 characters")
        .max(12, "Password cannot exceed more than 12 characters")
        .oneOf([Yup.ref("password")], "Passwords do not match")
});

function ResetPassword({ params }: { params: { token: string } }) {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { handleSubmit, register, formState: { errors } } = useForm<ResetPassword>({
        mode: "onTouched",
        resolver: yupResolver(formSchema)
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { setOpenModal } = useContext(ManagedUI);

    console.log('====================================');
    console.log(params?.token);
    console.log('====================================');

    const submitPassword = async (data: ResetPassword) => {
        setIsSubmitting(true);
        const res: any = await dispatch(resetPassword({
            password: data.password,
            confirmPassword: data.confirmPassword,
            token: params?.token
        }));
        if (res?.payload?.success) {
            router.push("/dashboard")
            setIsSubmitting(false)
        }
        setIsSubmitting(false)
    };

    return (
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
                                    className="focus-visible:ring-[#2F9B4E] w-[350px]"
                                    {...register("confirmPassword", { required: true })}
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
                            {errors.confirmPassword && errors.confirmPassword.type === "required" && (
                                <span className="text-red-400 text-[12px] mt-1 w-full">
                                    Confirm Password is required
                                </span>
                            )}
                            {errors.confirmPassword?.message && (
                                <span className="text-red-400 text-[12px] mt-1 w-full">
                                    {errors.confirmPassword?.message}
                                </span>
                            )}
                        </div>

                        <div className=" mt-[35px] flex items-center justify-center">
                            <button
                                type="submit"
                                className={` bg-[#2F9B4E]  w-[350px] ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"} flex items-center justify-center gap-1 py-[14px] h-[50px] rounded-[5px] text-white  text-center text-[16px] leading-[22px] tracking-[-0.0em] ${satoshi.className}`}
                            >
                                {isSubmitting && <FaSpinner className="animate-spin max-h-8 max-w-8 mr-2 text-white" />}Request Password Change
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div >

    )
}

export default ResetPassword