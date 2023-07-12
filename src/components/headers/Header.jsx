import React from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import logo from '../img/logoScanHeader.png';


export default function Header () {
    return (
        <header id="header" className="flex font-sans items-center justify-between h-[93px] ">
            <div>
                <img src={logo} className="m-14"/>
            </div>
            <ul className="flex justify-between text-[17px]">
                <li className="m-5">
                    <Link to="/">
                        Главная
                    </Link>
                </li>
                <li className="m-5">
                    <Link to="/rates">
                        Тарифы
                    </Link>
                </li>
                <li className="m-5">
                    <Link to="/faq">
                        FAQ
                    </Link>
                </li>
            </ul>
            <div>
                <ul id="regOrSign" className="font-inter flex justify-between items-center mx-14">
                    <li className="m-5 opacity-40">
                        <Link to="/register">
                            Зарегистрироваться
                        </Link>
                    </li >
                    <svg width="2" height="26" viewBox="0 0 2 26" fill="#029491" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.6" width="2" height="26" transform="matrix(-1 0 0 1 2 0)" fill="#029491"/>
                    </svg>
                    <button className="m-5 bg-[#7CE3E1] h-[26px] w-[65px] rounded-[5px]">
                        <Link to="/signIn">
                            Войти
                        </Link>
                    </button>
                </ul>
            </div>
        </header>
    );
}

function Home() {
    return <h1>Домашняя страница</h1>;
}

// Пример компонента Rates
function Rates() {
    return <h1>Страница тарифов</h1>;
}

// Пример компонента FAQ
function FAQ() {
    return <h1>Страница FAQ</h1>;
}

// Пример компонента Register
function Register() {
    return <h1>Страница регистрации</h1>;
}

// Пример компонента SignIn
function SignIn() {
    return <h1>Страница входа</h1>;
}