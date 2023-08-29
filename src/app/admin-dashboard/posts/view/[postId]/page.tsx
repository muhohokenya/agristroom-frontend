'use client'

import { Input } from "@/src/components/ui/Input"
import { jost, satoshi } from "@/src/fonts/Fonts"
import { useAppDispatch } from "@/src/hooks/react-redux-hooks"
import { toast } from "@/src/hooks/use-toast"
import { formatDate } from "@/src/lib/constants"
import { getOneQuestion } from "@/src/redux/actions/getOneQuestion.action"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaArrowAltCircleLeft, FaSpinner } from "react-icons/fa"

interface IPost {
    id: number;
    title: string;
    description: string;
    user: {
        id: number
        first_name: string
        last_name: string
        email: string
        username: string
    }
    replies: {
        id: number;
        text: string
    }[]
    votes: number
    created_at: string
}

const ViewPost = ({ params }: { params: { postId: number } }) => {
    const dispatch = useAppDispatch();
    const [post, setPost] = useState<IPost>({
        id: 0,
        title: "",
        description: "",
        user: {
            id: 0,
            first_name: "",
            last_name: "",
            email: "",
            username: "",
        },
        replies: [],
        votes: 0,
        created_at: "",
    });
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const getOnePost = async () => {
            setLoading(true);
            let res: any = await dispatch(getOneQuestion(params?.postId))
            if (res?.payload?.success) {
                setPost(res?.payload?.post[0])
                setLoading(false);
            } else {
                toast({
                    variant: "destructive",
                    title: "An Error happened while loading the post"
                })
                setLoading(false);
            }
        }

        getOnePost();
    }, [dispatch, params?.postId])

    if (loading) {
        <div className=" w-full flex items-center justify-center">
            <FaSpinner className="animate-spin max-h-20 max-w-20 mr-2 text-[#2F9B4E]" />
        </div>
    }
    return (
        <div className="max-w-[1400px] relative mx-auto w-full flex justify-center items-center">
            <div className="flex  relative items-center justify-center mt-10">
                <Link href="/admin-dashboard/posts " className="absolute cursor-pointer bg-[#DBF3D9] p-2 rounded-full  top-16 -left-20 bg-">
                    <FaArrowAltCircleLeft className=" text-xl text-[#2F9B4E] " />
                </Link>

                <div className=" flex flex-col gap-4 items-start justify-center w-full px-auto border border-gray-200 p-3 rounded-lg mx-5 mt-[85px] py-[10px]">
                    <div className="flex gap-12">
                        <div className="flex flex-col gap-3">
                            <label>Question ID</label>
                            <Input className="max-w-sm" value={post?.id} type="number" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label>Posted By</label>
                            <Input className="max-w-sm" value={`${post?.user?.first_name} ${post?.user?.last_name}`} />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label>Date Registered</label>
                            <Input type="text" className="max-w-sm" value={`${formatDate(post?.created_at)}`} />
                        </div>
                    </div>
                    <div className="flex gap-12 w-full">
                        <div className="flex flex-col gap-3">
                            <label>Answers Count</label>
                            <Input className="max-w-sm" type="number" value={post?.replies?.length} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className={`text-[20px] leading-[32px] font-[400] text-slate-800 tracking-[-0.01em] max-w-3xl  ${jost.className}`}>Title</label>
                        <p className={`text-[18px] capitalize leading-[32px] font-[500] text-slate-500 tracking-[-0.01em] max-w-3xl  ${satoshi.className}`}>
                            {post?.title}
                        </p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className={`text-[20px] leading-[32px] font-[400] text-slate-800 tracking-[-0.01em] max-w-3xl  ${jost.className}`}>Description</label>
                        <p className={`text-[18px] leading-[32px] font-[400] text-slate-500 tracking-[-0.01em] max-w-3xl  ${satoshi.className}`}>
                            {post?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewPost