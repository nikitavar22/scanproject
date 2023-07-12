import React from 'react'
import Home from "../components/Home"
import SingIn from "../components/SingIn";
import Layout from "../components/Layout";
import Rates from "../components/Rates";
import {Route, Routes} from "react-router-dom";


function App () {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/signIn" element={<SingIn />} />
            </Routes>
        </Layout>
    );
}

export default App;