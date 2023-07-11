import React from "react";

export default function SliderBlock ({ slider }) {
    return (
        <div className="w-[400px] h-[225px] bg-white shadow-[0_0px_20px_-0px_rgba(0,0,0,0.2)] rounded-[10px] relative flex flex-col mx-[20px]">

            <div className="m-[25px] flex flex-col justify-center">

                <img className="w-[64px] h-[64px] mb-[15px]" src={ slider.slider_img } alt="icon"/>

                <div className="text-[18px] leading-[21px] w-[340px] text-left" >{ slider.slider_description }</div>

            </div>

        </div>
    );
}