import React, {Component, useState} from "react";

import Slider from "react-slick";
import SliderBlock from "./SliderBlock";
import arrowsLeft from "../assets/arrows/left.png";
import arrowsRight from "../assets/arrows/right.png";
import sliderImg1 from "../assets/slider_img.png";
import sliderImg2 from "../assets/slider_img_2.png";
import sliderImg3 from "../assets/slider_img_3.png";

let sliders = [
    {
        "slider_img": sliderImg1,
        "slider_description": "Высокая и оперативная скорость обработки заявки",
    },
    {
        "slider_img": sliderImg2,
        "slider_description": "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
    },
    {
        "slider_img": sliderImg3,
        "slider_description": "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
    }
];

    const SimpleSlider = () => {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <img className="custom-prev-arrow w-[39px] h-[39px] " src={arrowsLeft} alt="Left" />,
            nextArrow: <img className="custom-next-arrow w-[39px] h-[39px]" src={arrowsRight} alt="Right" />,
        };
        const [getSlider, setSlider] = useState(sliders)

        return (
            <Slider className="w-[1320px] mb-[50px] relative flex flex-col"{...settings}>
                <div className="font-serif font-black text-[45px] leading-[54px] mb-[60px]">ПОЧЕМУ ИМЕННО МЫ</div>
                <div className="flex flex-row items-center" >
                    {
                        getSlider.map((slider, index) => {
                            return (
                                <SliderBlock key={index} slider={slider}/>
                            );
                        })
                    }
                </div>
            </Slider>
        );
    }

export default SimpleSlider;