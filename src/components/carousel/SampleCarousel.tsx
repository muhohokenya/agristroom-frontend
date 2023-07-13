import React, { useState } from 'react'
import "./SampleCarousel.css"

type SampleCarouselItemProp = {
    children: React.ReactNode,
    width?: string
}


export const SampleCarouselItem = ({children, width}: SampleCarouselItemProp) => {
  return (
    <div className='carousel-item max-w-full ' style={{width: width}}>{children}</div>
  )
}

const SampleCarousel = ({children}:any) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const updateIndex = (newIndex:number) => {
        if(newIndex < 0){
            newIndex = 0;
        }else if(newIndex >= children.length){
            newIndex = children.length - 1
        }
        setActiveIndex(newIndex)
    }
    return (
        <div className="carousel ">
            <div className="inner " style={{transform: `translateX(-${activeIndex * 100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: "100%"})
                })}
            </div>
            <div className="indecators">
                <button onClick={() => {
                    updateIndex(activeIndex - 1)
                }}>
                    prev
                </button>
                <button onClick={() => {
                    updateIndex(activeIndex + 1)
                }}>
                    nex
                </button>
            </div>
        </div>
    )
}

export default SampleCarousel;
