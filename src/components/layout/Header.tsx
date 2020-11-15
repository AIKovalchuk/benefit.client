import React from 'react'

interface Props {}

const Header = (props: Props) => {
    return (
        <header className="header">
            <div className="title">Льгота.Ру</div>
            <ul className="nav">
                <li>
                    <a>Главная</a>
                </li>
                <li>
                    <a>Анкетирование</a>
                </li>
                <li>
                    <a>Льготы</a>
                </li>
            </ul>
            <ul className="auth">
                <li>
                    <a>Войти</a>
                </li>
                <li>
                    <a>Зарегестрироваться</a>
                </li>
            </ul>
        </header>
    )
}

export default Header
