import React from 'react'
import Home from "./view/Home"
import SingIn from "./view/SingIn";
import Layout from "./components/Layout";
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