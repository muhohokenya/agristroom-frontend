import PostsBarGraph from '@/src/components/PostsBarGrapgh'
import UsersPieChart from '@/src/components/UsersPieChart'
import React from 'react'
import { FaTasks, FaUsers } from 'react-icons/fa'

function Page(){
  return (
    <div className='text-lg w-full px-10'>
        <div className='flex gap-8 items-center justify-start mt-4'>
          <div className='w-[300px] bg-[#DBF3D9] h-[100px] pt-3 rounded-md shadow-md flex gap-10 px-3 '>
            <FaUsers className='text-[45px] text-[#2F9B4E]' />
            <div className="flex flex-col gap-3">
              <h1 className='text-[25px] leading-[20px] text-[#2F9B4E]'>Users</h1>
              <span className='text-[45px] text-[#2F9B4E]'>150</span>
            </div>
          </div>
          <div className='w-[300px] bg-[#DBF3D9] h-[100px] pt-3 rounded-md shadow-md flex gap-10 px-3'>
            <FaTasks className='text-[45px] text-[#2F9B4E]' />
            <div className="flex flex-col gap-3">
              <h1 className='text-[25px] leading-[20px] text-[#2F9B4E]'>Projects</h1>
              <span className='text-[45px] text-[#2F9B4E]'>250</span>
            </div>
          </div>
          <div className='w-[300px] bg-[#DBF3D9] h-[100px] pt-3 rounded-md shadow-md flex gap-10 px-3'>
            <FaTasks className='text-[45px] text-[#2F9B4E]' />
            <div className="flex flex-col gap-3">
              <h1 className='text-[25px] leading-[20px] text-[#2F9B4E]'>Answers</h1>
              <span className='text-[45px] text-[#2F9B4E]'>450</span>
            </div>
          </div>
          
        </div>
        <div className='flex items-center justify-center gap-5 w-full mt-[80px]'>
          <div className="w-[50%]">
          <UsersPieChart />
          </div>
          <div className="w-[50%]">

          <PostsBarGraph />
          </div>
        </div>
    </div>
  )
}

export default Page
