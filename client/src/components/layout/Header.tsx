import React from 'react'

import { Link } from 'react-router-dom'

interface Props {}

const Header = (props: Props) => {
    return (
        <header className="header">
            <div className="wrapper header__wrapper">
                <div className="header__start">
                    <a className="brand">Льгота.Ру</a>
                </div>
                <div className="header__middle">
                    <nav className="main-nav">
                        <ul className="nav__wrapper">
                            <li className="nav__item">
                                <Link to="/">
                                    <a>Главная</a>
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/anketa">
                                    <a>Анкетирование</a>
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/benefits">
                                    <a>Льготы</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__end">
                    <nav className="auth-nav">
                        <ul className="nav__wrapper">
                            <li className="nav__item">
                                <Link to="/login">
                                    <a>Войти</a>
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/sigup">
                                    <a>Зарегестрироваться</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
