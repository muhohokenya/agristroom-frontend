"use client"
import React from 'react'
import { satoshi } from '../utils/Fonts'

interface Props {
    text: string;
    minWidth?: string;
    maxWidth?: string;
}

function Button(props: Props) {
    const {text, minWidth="[315px]", maxWidth="[394px]"} = props

    return (
        <button className={`mt-[35px] bg-[#2F9B4E] max-w-[315px] lg:min-w-[394px] py-[14px] px-[24px] h-[50px] rounded-[5px] text-white w-full text-center text-[16px] leading-[22px] tracking-[-0.0em] ${satoshi.className}`}>
            {text}
        </button>
    )
}

export default Button
