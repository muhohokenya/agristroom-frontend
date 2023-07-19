import React, { useContext, useState } from 'react'
import { SearchContext } from '../context/SearchState';

const SearchComponent = ({ openSearch, setOpenSearch, router }: any) => {

  const { searchedValue, setSearchedValue} = useContext(SearchContext);

    const onInputchange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setSearchedValue({
        searchedValue: e.target.value
      })
    }

    console.log('====================================');
    console.log(searchedValue);
    console.log('====================================');

    return (
      <div
        className={` rounded-md w-full mt-[200px] ${openSearch
            ? " -translate-y-[180px] transform transition-all duration-700"
            : "-translate-y-[400px] transform transition-all duration-700"
          }`}
      >
        <div className=" max-w-[1240px] mx-auto  bg-[#DBF3D9]">
          <div className="flex items-center justify-center my-2 py-2 ">
            <input onChange={onInputchange} className="w-[800px] px-2 h-[40px] outline-0 ring-0 border border-[#2F9B4E] focus:outline-0 focus:ring-0 rounded-l-[3px]" />
            <button onClick={() => {
              setOpenSearch(false)
              router.push("/dashboard")
            }} className="flex items-center text-white justify-center py-[10px] px-[20px] gap-[10px] w-[78px] md:w-[88px] h-[40px] bg-[#2F9B4E] rounded-r-[3px] text-[14px] whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
      </div>
    )
  }
export default SearchComponent