"use client";

import { PostQuestion } from "@/src/components/PostQuestion";
import { DashboardShell } from "@/src/components/shell";
import { useAppDispatch, useAppSelector } from "@/src/hooks/react-redux-hooks";
import { toast } from "@/src/hooks/use-toast";
import { getLoggedInUserToken } from "@/src/lib/utils";
import { RootState } from "@/src/redux";
import { getCurrentUser } from "@/src/redux/actions/auth.action";
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
      console.log("current User", payload);
      if (payload?.success) {
        setCurrentUser(payload.user);
        setLoading(false);
        return payload.user;
      }
      if (!payload.success) {
        router.push("/loginn");
        toast({
          description: "Please login in",
          variant: "destructive"
        })
      }
    };
    getUser();
  }, [router,dispatch]);

  console.log("my current usre%%%^^^^", currentUser[0]);

  return (
    <div className="px-[15px] py-[30px]  max-w-[1200px] mx-auto bg-white ">
      <DashboardShell>
        <PostQuestion />
      </DashboardShell>
    </div>
  );
}

export default Dashboard;
