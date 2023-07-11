import React from 'react'
import logo from '../img/logoScanFooter.png';

function Footer() {
    return (
        <footer id="footer" className="flex font-inter items-center justify-between h-[137px] bg-[#029491]">
            <div>
                <img src={logo} className="m-5"/>
            </div>
            <div className="flex-col items-end">
                <ul className="flex-col items-end text-right text-white text-[14px] mx-14">
                    <li className="">
                        г. Москва, Цветной б-р, 40
                    </li>
                    <li className="">
                        +7 495 771 21 11
                    </li>
                    <li className="">
                        info@skan.ru
                    </li>
                    <li className="mt-2 text-[12px]">
                        Copyright. 2022
                    </li>
                </ul>
            </div>
        </footer>
    );
}


export default Footer;