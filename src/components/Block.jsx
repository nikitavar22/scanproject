import React from "react";


export default function Block({ rat }) {
    return (
        <div className={'flex flex-col w-[415px] h-[540px] rounded-[10px] bg-white shadow-[0_0px_20px_-0px_rgba(0,0,0,0.2)] border-[2px] ' + rat.border_class}>
            <div id="name" className={'relative h-[132px] flex flex-col text-left rounded-t-lg ' + rat.header_bg_class }>
                <div className="m-[25px]">
                    <div className={'text-[30px] ' + rat.color_name }>
                        { rat.name }
                    </div>

                    <p className={'text-[18px] ' + rat.color_description }>
                        { rat.description }
                    </p>
                </div>

                <img className={'absolute  right-[20px] ' + rat.header_top_img } src={ rat.header_img } alt=""/>
            </div>
            <div id="price" className="relative h-[132px]">
                <div className="m-[25px]">
                    <div className="flex flex-row items-center font-medium">
                        <div className="text-[30px] mr-[5px]">
                            { rat.price }
                        </div>
                        <div className="line-through opacity-50 text-[25px] ml-[5px]">
                            { rat.base_price }
                        </div>
                    </div>
                    <p className="text-[18px]">
                        { rat.plan_price }
                    </p>
                </div>

                {
                    rat.active
                        ? (
                            <div className="right-[8px] top-[13px] absolute bg-[#3BA5E0] rounded-[10px] text-[14px] text-white h-[24px] w-[134px] flex items-center justify-center">
                                Текущий тариф
                            </div>
                        ) : null
                }

            </div>
            <div id="rates" className="text-left m-[25px] text-[20px]">
                <div className="font-medium">
                    В тариф входит:
                </div>
                {
                    rat.advantages.map((item, index) => {
                        return (
                            <div key={index} className="flex items-center text-[18px] font-normal">
                                <svg className="mr-[5px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink">
                                    <rect width="20" height="20" fill="url(#pattern0)"/>
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use href="#image0_3_32804" transform="scale(0.0104167)"/>
                                        </pattern>
                                        <image id="image0_3_32804" width="96" height="96" href="data:image/png;base64,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"/>
                                    </defs>
                                </svg>
                                { item }
                            </div>
                        );
                    })
                }
            </div>
            {
                rat.active
                    ? (
                        <button id="buy" className="m-auto w-[355px] h-[59px] bg-[#D2D2D2] rounded-[5px] text-[20px] items-center justify-center">
                            Перейти в личный кабинет
                        </button>
                    ) : (
                        <button id="buy" className="m-auto w-[355px] h-[59px] bg-[#5970FF] text-white rounded-[5px] text-[20px] items-center justify-center">
                            Подробнее
                        </button>
                    )
            }
        </div>
    );
}
