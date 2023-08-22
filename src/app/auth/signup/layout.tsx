import { ReactNode } from "react";
import React from "react";

type Props = {
    children: ReactNode
}
export default function Layout({children}: Props){
  return(
    <div className="flex flex-col bg-red-400">
        <div className="flex">
            <h1>The steps to register</h1>
        </div>
      {children}
    </div>
  )
}
