"use client";

import React, { useEffect, useState } from "react";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";
import { satoshi } from "@/src/fonts/Fonts";
import { Account } from "../types/types";
import { useAppDispatch } from "../hooks/react-redux-hooks";
import { getAccounts } from "../redux/actions/account.action";
import { accountIcons } from "../lib/data/data";

interface Props {}

function CreateAccountAs(props: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [accountTypes, setAccountTypes] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState<Account>({
    name: "",
    id: "",
  });

  useEffect(() => {
    const fetchAccounts = async () => {
      setLoading(true);
      let res: any = await dispatch(getAccounts());
      setAccounts(res.payload.accounts);
      setLoading(false);
    };
    fetchAccounts();
  }, [dispatch]);

  useEffect(() => {
    const mergerAccountsAndIcons = () => {
      let obj: any = [];
      if (accounts?.length > 0) {
        for (let i = 0; i < accounts?.length; i++) {
          obj.push(Object.assign(accounts[i], accountIcons[i]));
        }
        setAccountTypes(obj);
      }
    };
    mergerAccountsAndIcons();
  }, [accounts]);

  console.log("path name", usePathname());
  const saveToLocalStorage = async () => {
    setSaving(true);
    router.push("/signup/accountinformations");

    localStorage.setItem(
      "selectedAcount",
      JSON.stringify({ id: selectedAccount.id, name: selectedAccount.name })
    );
    setSaving(false);
  };

  console.log("selected account", selectedAccount);

  return (
    <div className=" relative flex flex-col items-center justify-center h-auto lg:max-h-[565px] mt-10 py-[40px] bg-white w-full max-w-[400px] lg:max-w-[638px] mx-auto rounded-md shadow-md">
      <h2
        className={`font-[600] text-[20px] leading-[24px]  tracking-[0.04em] text-[#212121]`}
      >
        Create Account As
      </h2>
      {loading ? (
        <div className=" w-full flex items-center justify-center my-3 ">
          <div className="w-full mx-auto flex flex-col items-center justify-center ">
            <FaSpinner className="animate-spin h-8 w-8 text-[#2F9B4E] text-center" />
            <h2 className="text-center text-[16px] font-[600] mt-4">
              Loading Accounts....
            </h2>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-center mx-auto mt-[30px] gap-[8px] place-items-center">
          {accountTypes.map((accnt: any, indx) => {
            return (
              <div
                onClick={() =>
                  setSelectedAccount(selectedAccount === accnt ? {} : accnt)
                }
                key={indx}
                className={`relative flex flex-col items-center cursor-pointer ${
                  selectedAccount === accnt ? " bg-[#F7FFF8]" : " bg-[#FFFFFF]"
                }  border border-[#EEEEEE] w-[152px] lg:w-[182.5px] min-h-[113px] rounded-md  `}
              >
                <div className=" flex items-center justify-center ">
                  <span
                    className={`" cursor-pointer mt-[23px] ${
                      selectedAccount === accnt
                        ? "text-[#2F9B4E]"
                        : "text-[#858585]"
                    }  `}
                  >
                    {accnt.Icon}
                  </span>
                </div>

                {selectedAccount === accnt ? (
                  <FaCheckCircle className="absolute top-3 right-2 text-lg fill-[#2F9B4E] rounded-full text-white" />
                ) : (
                  <MdOutlineRadioButtonUnchecked className="absolute top-3 right-2 text-2xl text-[#BFBFBF]/70 " />
                )}
                <p
                  className={`my-[10px] max-w-[132px] w-full text-center ${
                    selectedAccount === accnt
                      ? "text-[#2F9B4E]"
                      : "text-[#212121]/50"
                  }  font-[700] text-[16px] leading-[22px] tracking-[-0.04em]`}
                >
                  {accnt.name}
                </p>
              </div>
            );
          })}
        </div>
      )}

      <button
        type="button"
        onClick={saveToLocalStorage}
        disabled={loading}
        className={`mt-[35px]  ${
          loading
            ? "bg-[#DBF3D9] cursor-not-allowed text-[#2F9B4E]"
            : "bg-[#2F9B4E] text-white"
        } max-w-[315px] lg:max-w-[560px] py-[14px] px-[24px] h-[50px] rounded-[5px]  w-full text-center text-[16px] leading-[22px] tracking-[-0.0em] ${
          satoshi.className
        }`}
      >
        Continue
      </button>
    </div>
  );
}

export default CreateAccountAs;
