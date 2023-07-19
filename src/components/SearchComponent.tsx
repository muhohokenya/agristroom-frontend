import React, { useContext, useState } from 'react'
import { SearchContext } from '../context/SearchState';

const SearchComponent = ({ router }: any) => {

  const { searchedValue, setSearchedValue } = useContext(SearchContext);

  const onInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedValue({
      searchedValue: e.target.value
    })
  }

  return (
    <div className="flex items-center mx-auto w-full lg:w-[800px] lg:max-w-[800px] bg-red-400 justify-center py-2">
      <input onChange={onInputchange} className="w-full px-2 h-[40px] outline-0 ring-0 border border-[#2F9B4E] focus:outline-0 focus:ring-0 rounded-l-[3px]" />
      <button onClick={() => {
        router.push("/dashboard")
      }} className="flex items-center text-white justify-center py-[10px] px-[20px] gap-[10px] w-[78px] md:w-[88px] h-[40px] bg-[#2F9B4E] rounded-r-[3px] text-[14px] whitespace-nowrap">
        Search
      </button>
    </div>
  )
}
export default SearchComponent