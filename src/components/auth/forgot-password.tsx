'use client'

import { satoshi } from '@/src/fonts/Fonts';
import { useAppDispatch } from '@/src/hooks/react-redux-hooks';
import { toast } from '@/src/hooks/use-toast';
import { ManagedUI } from '@/src/hooks/useModalContext';
import { requestPasswordReset } from '@/src/redux/actions/auth.action.action';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { FaSpinner } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { Input } from '../ui/Input';

interface ForgetPassword {
    email: string
}

const ForgetPassword = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { handleSubmit, register, formState: { errors } } = useForm<ForgetPassword>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { setOpenModal } = useContext(ManagedUI);

    const submitPassword = async (data: ForgetPassword) => {
        localStorage.setItem("email", data.email)
        setIsSubmitting(true)
        const res: any = await dispatch(requestPasswordReset(data));
        if (res?.payload?.success) {
            setIsSubmitting(false);
            toast({
                title: "Check for reset password link in your email",
                variant: "secondary"
            })

        }
        if (!res?.payload?.success) {
            toast({
                title: "Please confirm if your email is valid",
                variant: "destructive"
            })
        }
        setIsSubmitting(false)
    };

    return (
        <div className='h-screen w-full flex items-center justify-center'>

            <div className="flex max-w-[1200px] mx-auto relative">

                <form action="" className="w-fit relative flex items-center justify-center " onSubmit={handleSubmit(submitPassword)}>
                    <MdClose
                        className=" absolute top-3 right-3  text-lg h-[25px] w-[25px] text-[#212121]/70 cursor-pointer"
                        onClick={() => {
                            router.push("/");
                            setOpenModal(false)
                        }}
                    />
                    <div className="flex flex-col border bg-white border-slate-100 w-[400px] py-10 rounded-md shadow-lg items-center justify-center ">
                        <div className=" flex flex-col">
                            <div className="flex flex-col gap-[8px]">
                                <label>Email Address</label>
                                <Input
                                    type={"text"}
                                    placeholder='Enter your email address'
                                    className="focus-visible:ring-[#2F9B4E] w-[350px]"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && errors.email.type === "required" && (
                                    <span className="text-red-400 text-[12px] mt-1 w-full">
                                        Email is required
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className=" mt-[35px] flex items-center justify-center">
                            <button
                                type="submit"
                                className={` bg-[#2F9B4E]/80 hover:bg-[#2F9B4E] hover:duration-500 hover:ease-in-out  w-[350px] ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"} flex items-center justify-center gap-1 py-[14px] px-[24px] h-[50px] rounded-[5px] text-white  text-center text-[16px] leading-[22px] tracking-[-0.0em] ${satoshi.className}`}
                            >
                                {isSubmitting && <FaSpinner className="animate-spin max-h-8 max-w-8 mr-2 text-white" />}Request Password Change
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword