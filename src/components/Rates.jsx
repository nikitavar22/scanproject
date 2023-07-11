import { useState } from 'react';
import Block from "./Block";

let tarifs = [
    {
        "name": "Beginner",
        "color_name": "text-black",
        "description": "Для небольшого исследования",
        "color_description": "text-black",
        "header_img": require("../assets/img.png"),
        "header_top_img": "top-[20px]",
        "header_bg_class": "bg-[#FFB64F]",
        "border_class": "border-[#FFB64F]",
        "price": "799 ₽",
        "base_price": "1 200 ₽",
        "plan_price": "или 150 ₽/мес. при рассрочке на 24 мес.",
        "advantages": [
            "Безлимитная история запросов",
            "Безопасная сделка",
            "Поддержка 24/7"
        ],
        "active": true
    },
    {
        "name": "Pro",
        "color_name": "text-black",
        "description": "Для HR и фрилансеров",
        "color_description": "text-black",
        "header_img": require("../assets/img-2.png"),
        "header_top_img": "top-0",
        "header_bg_class": "bg-[#7CE3E1]",
        "border_class": null,
        "price": "1 299 ₽",
        "base_price": "2 600 ₽",
        "plan_price": "или 279 ₽/мес. при рассрочке на 24 мес.",
        "advantages": [
            "Все пункты тарифа Beginner",
            "Экспорт истории",
            "Рекомендации по приоритетам"
        ],
        "active": false
    },
    {
        "name": "Business",
        "color_name": "text-white",
        "description": "Для небольшого исследования",
        "color_description": "text-white",
        "header_img": require("../assets/img-3.png"),
        "header_top_img": "top-[20px]",
        "header_bg_class": "bg-black",
        "border_class": null,
        "price": "2 379 ₽",
        "base_price": "3 700 ₽",
        "plan_price": null,
        "advantages": [
            "Все пункты тарифа Pro",
            "Безлимитное количество запросов",
            "Приоритетная поддержка"
        ],
        "active": false
    }
]

export default function Rates () {
    const [getTarifs, setTarif] = useState(tarifs)

    return (
        <rates>
            <div className="w-[1320px] h-[620px] relative flex flex-col my-[110px]">
                <div className="font-serif font-black text-[45px] w-[743px] leading-[54px] mb-[50px]">
                    Наши тарифы
                </div>
                <div className="flex flex-row justify-between">
                    {
                        getTarifs.map((tarif, index) => {
                            return (
                                <Block key={index} tarif={tarif}/>
                            );
                        })
                    }
                </div>
            </div>
        </rates>
    );
}