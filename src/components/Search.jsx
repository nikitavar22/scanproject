import imgSearch from "./img/Group 13.svg";
import React from "react";

export default function search () {
    return (
        <search>
            <div className="w-[1320px] h-[620px] mt-[20px] relative flex">
                <img className="absolute right-0 bottom-0" src={imgSearch} />
                <ul className="absolute text-left top-5">
                    <li className="font-serif font-black text-[60px] w-[743px] leading-[72px]">
                        СЕРВИС ПО ПОИСКУ ПУБЛИКАЦИЙ
                        О КОМПАНИЙ
                        ПО ЕГО ИНН
                    </li>
                    <li className="w-[534px] text-[20px]">
                        Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
                    </li>

                </ul>
                <button className="w-[335px] h-[59px] bg-[#5970FF] absolute text-white text-[22px] rounded-[5px] bottom-32">
                    Запросить данные
                </button>

            </div>
        </search>
        );
}