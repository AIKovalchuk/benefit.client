import React from 'react'
import Header from '../../layout/Header'

interface Props {}

const Main = (props: Props) => {
    return (
        <div className="main-page">
            <Header />
            <h1 className="__title">Main Page</h1>
            <div className="block">
                <div className="info">
                    <div className="info-text">
                        Это какой-то текст, который будет выводиться на главной странице. Он нужен,
                        чтобы заинтересовать пользователя
                    </div>
                    <div className="info-links">
                        <ul className="btn-group">
                            <li>
                                <a>Пройти анкетирование</a>
                            </li>
                            <li>
                                <a>Посмотреть льготы</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <img src="" alt="" className="img" />
            </div>
        </div>
    )
}

export default Main
