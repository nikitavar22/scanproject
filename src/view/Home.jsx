import Search from "../components/Search";
import SimpleSlider from "../components/SliderSlick";
import imgHome from "../components/img/Group 14.png";
import Rates from "../components/Rates";
import React from "react";


export default function Home () {
    return(
        <div>
            <Search/>
            <SimpleSlider/>
            <img src={imgHome}/>
            <Rates/>
        </div>
    );
}