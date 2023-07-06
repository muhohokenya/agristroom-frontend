"use client";

import { PostQuestion } from "@/src/components/PostQuestion";
import { DashboardShell } from "@/src/components/shell";
import { useAppDispatch, useAppSelector } from "@/src/hooks/react-redux-hooks";
import { toast } from "@/src/hooks/use-toast";
import { getLoggedInUserToken } from "@/src/lib/utils";
import { RootState } from "@/src/redux";
import { getAccounts } from "@/src/redux/actions/account.action";
import { getCurrentUser } from "@/src/redux/actions/auth.action";
import { getInterests } from "@/src/redux/actions/interest.action";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {}

function Dashboard(props: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const result = useAppSelector((state: RootState) => state.auth);
  const error = useAppSelector((state: RootState) => state.notifications);
  const [currentUser, setCurrentUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      const { payload }: any = await dispatch(getCurrentUser());
      if (payload?.success) {
        setCurrentUser(payload.user);
        setLoading(false);
        return payload.user;
      }
      if (!payload.success) {
        router.push("/login");
        toast({
          description: "Please login in",
          variant: "destructive"
        })
      }
    };
    getUser();
  }, [router,dispatch]);

  console.log("my current usre%%%^^^^", currentUser[0]);

  useEffect(() => {
    const getInterest = async() => {
      let res:any = await dispatch(getInterests())
      console.log("interests", res.payload.interests);
    };
    getInterest()
  },[dispatch])

  useEffect(() => {
    const fetchAccounts = async()=> {
      let res:any = await dispatch(getAccounts())
      console.log("accnts", res.payload.accounts);
    };
    fetchAccounts();
  },[dispatch])

  return (
    <div className="px-[15px] py-[30px]  max-w-[1200px] mx-auto bg-white ">
      <DashboardShell>
        <PostQuestion />
      </DashboardShell>
    </div>
  );
}

export default Dashboard;
