"use client";

import { jost, satoshi } from "@/src/fonts/Fonts";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { useFormContext } from "../context/formstate";
import { useAppDispatch } from "../hooks/react-redux-hooks";
import { accountIcons } from "../lib/data/data";
import { getAccounts } from "../redux/actions/account.action";
import { Account } from "../types/types";
import Stepper from "./Stepper";

interface Props { }

function CreateAccountAs(props: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const { state, setState } = useFormContext();

  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submit, setSubmitting] = useState(false);
  const [accountTypes, setAccountTypes] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState<Account>({
    name: "",
    id: "",
  });

  useEffect(() => {
    //fetch accounts
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

  const saveToLocalStorage = async () => {
    setSubmitting(true)
    setState((prevState) => ({
      ...prevState,
      account: {
        id: selectedAccount?.id!,
        name: selectedAccount?.name!,
      },
    }));
    router.push("/auth/signup/interest");
    if (pathname !== "/auth/signup/createaccounts") {
      setSubmitting(false)
    }
  };

  const onClick = (accnt: any) => {
    setSelectedAccount(selectedAccount === accnt ? {} : accnt);
  };

  useEffect(() => {
    if (state.account.id) {
      setSelectedAccount({
        id: state.account.id,
        name: state.account.name,
      });
    }
  }, [state.account]);

  return (
    <div className="flex-col items-center justify-center bg-white w-full max-w-[400px] lg:max-w-[638px] mx-auto">
      <Stepper />
      <div className=" border-t border-t-slate-300 relative flex flex-col items-center justify-center h-auto lg:max-h-[565px] py-[20px] bg-white w-full max-w-[400px] lg:max-w-[638px] mx-auto">
        <div className="relative flex  gap-[14px]  w-full ">
          <h2
            className={`font-[600] text-start mx-[15px] lg:mx-[40px] text-[20px] lg:text-[24px] leading-[24px]  tracking-[0.04em] text-[#212121] ${jost.className}`}
          >
            Select what describes you best.
          </h2>
        </div>
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
                  onClick={() => onClick(accnt)}
                  key={indx}
                  className={`relative flex flex-col items-center cursor-pointer ${selectedAccount.id === accnt.id
                    ? " bg-[#F7FFF8]"
                    : " bg-[#FFFFFF]"
                    }  border border-[#EEEEEE] w-[152px] lg:w-[182.5px] min-h-[113px] rounded-md  `}
                >
                  <div className=" flex items-center justify-center ">
                    <span
                      className={`" cursor-pointer mt-[23px] ${selectedAccount.id === accnt.id
                        ? "text-[#2F9B4E]"
                        : "text-[#858585]"
                        }  `}
                    >
                      {accnt.Icon}
                    </span>
                  </div>

                  {selectedAccount.id === accnt.id ? (
                    <FaCheckCircle className="absolute top-3 right-2 text-lg fill-[#2F9B4E] rounded-full text-white" />
                  ) : (
                    <MdOutlineRadioButtonUnchecked className="absolute top-3 right-2 text-2xl text-[#BFBFBF]/70 " />
                  )}
                  <p
                    className={`my-[10px] max-w-[132px] w-full text-center ${selectedAccount.id === accnt.id
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
          className={`mt-[35px] bg-[#2F9B4E] text-white max-w-[315px] lg:max-w-[560px] py-[14px] flex items-center justify-center px-[24px] h-[50px] rounded-[5px]  w-full text-center text-[16px] leading-[22px] tracking-[-0.0em] ${satoshi.className
            }`}
        >
          {submit ? (
            <FaSpinner className="animate-spin max-h-10 max-w-10 text-white" />
          ) : "Continue"}
        </button>
      </div>
    </div>
  );
}

export default CreateAccountAs;
