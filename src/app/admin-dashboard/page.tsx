'use client'

import PostsBarGraph from '@/src/components/PostsBarGrapgh'
import UsersPieChart from '@/src/components/UsersPieChart'
import { useAppDispatch } from '@/src/hooks/react-redux-hooks'
import { getAllUsers } from '@/src/redux/actions/getAllUsers'
import { getPosts } from '@/src/redux/actions/getPosts.action'
import { useEffect, useState } from 'react'
import { FaTasks, FaUsers } from 'react-icons/fa'

function Page() {
  const dispatch = useAppDispatch()
  const [users, setUsers] = useState(0)
  const [posts, setPosts] = useState(0)
  const [answers, setAnswers] = useState(0)

  useEffect(() => {
    const getAllPosts = async () => {
      let res: any = await dispatch(getPosts())
      let posts = res?.payload?.posts
      setPosts(posts?.length ?? 0)
      let totalAnswers = 0;
      posts?.map((post: any, index: any) => {
        totalAnswers = totalAnswers + post?.replies?.length
      })
      setAnswers(totalAnswers);
    }

    const getUsers = async () => {
      let res: any = await dispatch(getAllUsers())
      let users = res?.payload?.users
      setUsers(users?.length ?? 0);
    }

    getUsers();
    getAllPosts()
  }, [dispatch, answers])




  return (
    <div className='text-lg mt-[77px] py-[10px] w-full px-10'>
      <div className="mx-auto max-w-[1440px] w-full">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-8 items-center justify-start mt-4'>
          <div className='w-[300px] bg-[#DBF3D9] h-[100px] pt-3 rounded-md shadow-md flex gap-10 px-3 '>
            <FaUsers className='text-[45px] text-[#2F9B4E]' />
            <div className="flex flex-col gap-3">
              <h1 className='text-[25px] leading-[20px] text-[#2F9B4E]'>Users</h1>
              <span className='text-[45px] text-[#2F9B4E]'>{users}</span>
            </div>
          </div>
          <div className='w-[300px] bg-[#DBF3D9] h-[100px] pt-3 rounded-md shadow-md flex gap-10 px-3'>
            <FaTasks className='text-[45px] text-[#2F9B4E]' />
            <div className="flex flex-col gap-3">
              <h1 className='text-[25px] leading-[20px] text-[#2F9B4E]'>Projects</h1>
              <span className='text-[45px] text-[#2F9B4E]'>{posts}</span>
            </div>
          </div>
          <div className='w-[300px] bg-[#DBF3D9] h-[100px] pt-3 rounded-md shadow-md flex gap-10 px-3'>
            <FaTasks className='text-[45px] text-[#2F9B4E]' />
            <div className="flex flex-col gap-3">
              <h1 className='text-[25px] leading-[20px] text-[#2F9B4E]'>Answers</h1>
              <span className='text-[45px] text-[#2F9B4E]'>{answers ?? 0}</span>
            </div>
          </div>

        </div>
        <div className='flex items-end justify-center gap-5 w-full mt-[80px]'>
          <div className="w-[50%]">
            <UsersPieChart />
          </div>
          <div className="w-[50%]">

            <PostsBarGraph />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Page
