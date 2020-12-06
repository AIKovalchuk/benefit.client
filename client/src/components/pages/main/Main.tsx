import React from 'react'
import Button from '../../base/Button'
import Header from '../../layout/Header'

interface Props {}

const Main = (props: Props) => {
    return (
        <div className="page">
            <Header />
            <div className="container">
                <div className="banner blue">
                    <div className="banner__title">Узнайте свои льготы прямо сейчас</div>
                    <div className="banner__content">
                        <div className="info__text">
                            Ответье на несколько вопросов и сервис подберет Вам подходящие льготы
                        </div>
                        <div className="info__submit">
                            <Button>Пройти анкету</Button>
                        </div>
                    </div>
                </div>
                <div className="banner">
                    <div className="banner__title">Все льготы в одном месте</div>
                    <div className="banner__content">
                        <div className="info">
                            <div className="info__text">
                                Ответье на несколько вопросов и сервис подберет Вам подходящие
                                льготы
                            </div>
                            <div className="info__submit">
                                <Button>Пройти анкету</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner blue">
                    <div className="banner__title">Работа с родственниками</div>
                    <div className="banner__content">
                        <div className="info">
                            <div className="info__text">
                                Ответье на несколько вопросов и сервис подберет Вам подходящие
                                льготы
                            </div>
                            <div className="info__submit">
                                <Button>Пройти анкету</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
