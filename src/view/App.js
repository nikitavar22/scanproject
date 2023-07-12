import React from 'react'
import Layout from "../components/Layout";
import Search from "../components/Search";
import Rates from "../components/Rates";
import imgHome from "../components/img/Group 14.png";
import Carousel from "../components/Carousel";
import SimpleSlider from "../components/SliderSlick";


function App () {
    return (
        <Layout>
            <Search/>
            <Carousel/>
            <img src={imgHome}/>
            <Rates/>
        </Layout>
    );
}

export default App;