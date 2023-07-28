import React from 'react'
import { FaSpinner } from 'react-icons/fa';

export const loading = () => {
  return (
    <div className="flex w-[300px] items-start justify-center my-5 h-full bg-white ">
      <div className="flex py-5 px-4 flex-col items-center justify-center gap-3 shadow-md border border-[#2F9B4E] rounded-md">
        <FaSpinner className="animate-spin h-12 w-12 text-white" />
        <h1>Loading the page!!!!</h1>
      </div>
    </div>
  )
}
export default loading;
