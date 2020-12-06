import React from 'react'

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
                                <a>Главная</a>
                            </li>
                            <li className="nav__item">
                                <a>Анкетирование</a>
                            </li>
                            <li className="nav__item">
                                <a>Льготы</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__end">
                    <nav className="auth-nav">
                        <ul className="nav__wrapper">
                            <li className="nav__item">
                                <a>Войти</a>
                            </li>
                            <li className="nav__item">
                                <a>Зарегестрироваться</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
