import React, { useState } from 'react';
import axios from 'axios';
import imgReg from './img/Characters.png';
import imgForum from './img/icons/Group 1171274237.png';
import imgGoogle from './img/icons/Google.png';
import imgFacebook from './img/icons/Facebook.png';
import imgYandex from './img/icons/Yandex.png';

export default function SignIn() {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isBorderActive, setIsBorderActive] = useState(false);

    const handleSingClick = () => {
        setIsLogin(true);
        setIsBorderActive(true);
    };

    const handleRegistrationClick = () => {
        setIsLogin(false);
        setIsBorderActive(false);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Send a POST request to the server with the username and password
            const response = await axios.post('/login', {
                username,
                password
            });

            // Check the response status or data to determine if login was successful
            if (response.status === 200) {
                setIsLoggedIn(true);
            } else {
                // Handle incorrect credentials case
                alert('Неверное имя пользователя или пароль');
            }
        } catch (error) {
            // Handle any error that occurred during the request
            console.error(error);
            alert('При входе в систему возникла ошибка');
        }
    };

    if (isLoggedIn) {
        // Render the component after successful login
        return <div>You are logged in!</div>;
    }

    return (
        <div className="flex flex-row">
            <div>
                <div className="font-serif font-black text-[40px] w-[800px] leading-[48px]">
                    Для оформления подписки на тариф, необходимо авторизоваться.
                </div>
                <img src={imgReg} />
            </div>
            <div className="relative w-[480px] h-[578px]">
                <div className="absolute right-0 bottom-0 w-[429px] h-[523px] shadow-[0_0px_20px_-0px_rgba(0,0,0,0.15)] border-[1px] rounded-[10px] flex flex-col items-center ">
                    <div className="text-[#029491] my-[25px]">
                        <button
                            id="sing"
                            className={`text-[#029491] ${isBorderActive ? 'border-b-4 border-[#029491]' : ''} w-[151px] h-[29px]`}
                            style={{ opacity: isLogin ? 1 : 0.5 }}

                            onClick={handleSingClick}
                        >
                            Войти
                        </button>
                        <button
                            id="registr"
                            className={`text-[#029491] ${isBorderActive ? '' : 'border-b-4 border-[#029491]'} w-[213px] h-[29px]`}
                            style={{ opacity: isLogin ? 0.5 : 1 }}
                            onClick={handleRegistrationClick}
                        >
                            Зарегистрироваться
                        </button>
                        <form className="loginForm flex flex-col" onSubmit={handleLogin}>
                            <label htmlFor="username" className="text-[#029491] mt-[25px]">
                                Логин или номер телефона:
                            </label>
                            <input className="w-[379px] h-[43px] border-[#C7C7C7] rounded-[5px] border-[1px] shadow-[0_0px_20px_-0px_rgba(0,0,0,0.05)] my-[15px]"
                                type="text"
                                name="username"
                                id="username"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label htmlFor="password" className="text-[#029491]">
                                Пароль:
                            </label>
                            <input className="w-[379px] h-[43px] border-[#C7C7C7] rounded-[5px] border-[1px] shadow-[0_0px_20px_-0px_rgba(0,0,0,0.05)] my-[15px] mb-[40px]"
                                type="password"
                                name="password"
                                id="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="flex flex-col items-center">
                                <button className="bg-[#5970FF] rounded-[5px] text-white text-[22px] w-[379px] h-[59px] mb-[10px] opacity-50">
                                    {isLogin ? 'Войти' : 'Зарегистрироваться'}
                                </button>
                                <p className="text-[14px] text-[#5970FF] underline">Восстановить пароль</p>
                            </div>
                        </form>
                        <div className="w-[380px] h-[65px]">
                            <div className="text-[#949494] my-[10px]">Войти через:</div>
                            <div className="flex flex-grow">
                                <button className="px-[20px] py-[5px] mr-[10px] rounded-[3px] border-[1px] border-[#5970FF82] flexitems-center" >
                                    <img src={imgGoogle} alt="Google"/>
                                </button>
                                <button className="px-[20px] py-[5px] rounded-[3px] border-[1px] border-[#5970FF82]" >
                                    <img src={imgFacebook} alt="Facebook"/>
                                </button>
                                <button className="px-[20px] py-[5px] ml-[10px] rounded-[3px] border-[1px] border-[#5970FF82] flex items-center" >
                                    <img src={imgYandex} alt="Yandex"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="absolute left-0 top-0" src={imgForum} alt="Forum" />
            </div>
        </div>
    );
}