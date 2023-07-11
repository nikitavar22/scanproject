import React from 'react'
import Layout from "../components/Layout";
import Search from "../components/Search";
import Rates from "../components/Rates";
import imgHome from "../components/img/Group 14.png";
import Slider from "../components/Carousel";


function App () {
    return (
        <Layout>
            <Search/>
            <Slider/>
            <img src={imgHome}/>
            <Rates/>
        </Layout>
    );
}

export default App;