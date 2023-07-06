"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";

export const page = () => {
  const [showImageUploadButton, setShowImageUploadButton] = useState(false);

  return (
    <div className="flex items-center h-[cal(100%_-_100px)] w-full justify-center">
      <div className="bg-white max-w-[1200px] mx-[20px] lg:mx-auto w-full h-auto pt-16 mt-5  ">
        <div className="flex flex-col ">
          <h2 className="ml-3">My Profile</h2>
          <div className="flex flex-col mt-2 mx-4 ">
            <div className="flex flex-col ">
              {/* <p className="text-slate-700 text-[17px] leading-[18px]">Photo</p> */}
              <div className="image-container flex gap-3 items-center">
                <div className="flex flex-col">
                  <div className="div bg-white h-[70px] w-[70px] flex items-center rounded-full justify-center mt-2">
                    <Image
                      src="/user-2.png"
                      alt=""
                      width={66}
                      height={66}
                      className="bg-[#DBF3D9] rounded-full"
                    />
                  </div>
                  <div className="flex flex-col mt-2">
                    <span className="text-[13px] text-slate-500 leading-[16px]">
                      Samuel Kirigha
                    </span>
                    <span className="text-[13px] text-slate-500 leading-[16px]">
                      Agronomist
                    </span>
                  </div>
                </div>
                <span className="text-[22px] relative bg-[#DBF3D9] text-[#2F9B4E] !py-[2px] rounded-md px-2 mt-1 ">
                  <BsThreeDots
                    onClick={() =>
                      setShowImageUploadButton(!showImageUploadButton)
                    }
                    className="cursor-pointer"
                  />
                  {showImageUploadButton && (
                    <>
                      <span className="bg-gray-50 absolute top-0 h-6 w-6 left-10 rotate-45"></span>
                      <div className="flex flex-col gap-2 absolute -top-1 left-12 bg-gray-50 py-1 rounded-md px-2">
                        <button className="text-[12px] bg-[#DBF3D9] text-[#2F9B4E] px-2 py-[2px] rounded-full">
                          Upload
                        </button>
                        <button className="text-[12px] bg-[#DBF3D9] text-[#2F9B4E] px-2 py-[2px] rounded-full">
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </span>
              </div>
            </div>
            <div className="flex flex-col mt-4 w-full lg:w-[500px] mb-20 ">
              <div className="flex flex-col relative border border-slate-200 shadow-md p-1">
                <h2 className=" text-slate-800 text-[14px] leading-[18px] whitespace-nowrap">
                  Personal Information
                </h2>
                <div className="absolute top-0 right-5 cursor-pointer">
                  <BiEditAlt
                    className="h-7 w-7 text-slate-600"
                  />
                </div>
                <div className="flex flex-col mt-3 gap-[10px]">
                  <div className="flex flex-col lg:flex-row items-start justify-start gap-10 ">
                    <div className="flex flex-col">
                      <span className="text-slate-500 text-[14px] leading-5">
                        First Name
                      </span>
                      <span className="text-slate-800 text-[14px] leading-5">
                        Samuel
                      </span>
                    </div>
                    <div className="flex flex-col md:ml-10">
                      <span className="text-slate-500 text-[14px] leading-5">
                        Last Name
                      </span>
                      <span className="text-slate-800 text-[14px] leading-5">
                        Kirigha
                      </span>
                    </div>
                  </div>
                  <div className="flex  flex-col lg:flex-row items-start justify-start gap-10">
                    <div className="flex flex-col">
                      <span className="text-slate-500 text-[14px] leading-5">
                        Email
                      </span>
                      <span className="text-slate-800 text-[14px] leading-5">
                        email@gmail.com
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-500 text-[14px] leading-5">
                        Phone
                      </span>
                      <span className="text-slate-800 text-[14px] leading-5">
                        +2548956432
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start justify-start gap-10">
                    <div className="flex flex-col">
                      <span className="text-slate-600 text-[14px] leading-5">
                        UserName
                      </span>
                      <span className="text-slate-800 text-[14px] leading-5">
                        Agronomist
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-4 relative border border-slate-200 shadow-md p-1 ">
                <h2 className=" text-slate-800 text-[14px] leading-[18px]">
                  Address
                </h2>
                <div className="absolute top-0 right-5 cursor-pointer">
                  <BiEditAlt className="h-7 w-7 text-slate-600" />
                </div>
                <div className="flex flex-col mt-3 gap-[10px]">
                  <div className="flex items-start justify-start gap-10">
                    <div className="flex flex-col">
                      <span className="text-slate-600 text-[14px] leading-5">
                        Country
                      </span>
                      <span className="text-slate-800 text-[14px] leading-5">
                        {" "}
                        Kenya
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-600 text-[14px] leading-5">
                        County
                      </span>
                      <span className="text-slate-800 text-[14px] leading-5">
                        Nairobi
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
