import React from 'react'

import { Link } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvide'
import Button from '../base/Button'

interface Props {}

const Header = (props: Props) => {
    const { isLoggedIn, person } = React.useContext(AuthContext)
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
                    {!isLoggedIn ? (
                        <nav className="auth-nav">
                            <ul className="nav__wrapper">
                                <li className="nav__item">
                                    <Button outline href="/login">
                                        Войти
                                    </Button>
                                    {/* <Link to="/login">
                                        <a>Войти</a>
                                    </Link> */}
                                </li>
                                <li className="nav__item">
                                    <Button blue href="/signup">
                                        Зарегистрироваться
                                    </Button>
                                    {/* <Link to="/signup">
                                        <a></a>
                                    </Link> */}
                                </li>
                            </ul>
                        </nav>
                    ) : // <div>
                    //     <Link to="/">
                    //         <a>Личный кабинет</a>
                    //     </Link>
                    // </div>
                    null}
                </div>
            </div>
        </header>
    )
}

export default Header
