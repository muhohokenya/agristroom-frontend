import { Input } from "@/src/components/ui/Input"
import Link from "next/link"
import { FaArrowAltCircleLeft } from "react-icons/fa"

const page = ({ params }: { params: { userId: number } }) => {
    return (
        <div className="max-w-[1400px] relative mx-auto w-full flex justify-center items-center">
            <div className="flex  relative items-center justify-center mt-10">
                <Link href="/admin-dashboard/users " className="absolute cursor-pointer bg-[#DBF3D9] p-2 rounded-full  top-16 -left-20 bg-">
                    <FaArrowAltCircleLeft className=" text-xl text-[#2F9B4E] " />
                </Link>

                <div className=" flex flex-col gap-16 items-start justify-center w-full px-auto border border-gray-200 p-3 rounded-lg mx-5 mt-[85px] py-[10px]">
                    <div className="flex gap-12">
                        <div className="flex flex-col gap-3">
                            <label>Name</label>
                            <Input className="max-w-sm" value="Sammy Kirigha" disabled />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label>Email</label>
                            <Input className="max-w-sm" value="user@gmail.com" disabled />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label>Date Registered</label>
                            <Input className="max-w-sm" value="3/8/2023" disabled />
                        </div>
                    </div>
                    <div className="flex gap-12">
                        <div className="flex flex-col gap-3">
                            <label>Account Type</label>
                            <Input className="max-w-sm" value="A Farmer" disabled />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label>Questions Count</label>
                            <Input type="number" className="max-w-sm" value="16" disabled />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label>Answers Count</label>
                            <Input type="number" className="max-w-sm" value="6" disabled />
                        </div>

                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label>Interests </label>
                        <ul className=" w-full">
                            <li className="">  🥕 Carrots</li>
                            <li className="">  🍎 Apples</li>
                            <li className="">  🍐 Pears</li>
                            <li className="">  🍏 Green Apples</li>
                            <li className="">  🍓 Strawberries</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page