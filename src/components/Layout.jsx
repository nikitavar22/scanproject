import React from "react";
import Header from "./headers/Header";
import Footer from "./footers/Footer";


export default function Layout ({ children }) {
    return (
        <div className="h-screen flex flex-col bg-white w-[1440px] m-auto">
            <Header/>
            <main className="flex w-[1440px] flex-col items-center m-auto">
                {children}
            </main>
            <Footer/>
        </div>
    );
}