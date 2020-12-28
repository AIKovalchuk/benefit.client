import React from 'react'
import Button from '../../base/Button'
import Header from '../../layout/Header'
import Img1 from '../../../assets/image_1.png'
import Img2 from '../../../assets/image_2.png'

interface Props {}

const Main = (props: Props) => {
    return (
        <div className="page">
            <Header />
            <div className="container">
                <div className="banner blue">
                    <div className="banner__content content">
                        <div className="content__title">
                            <h1 className="title__main">Пройдите анкету</h1>
                            <h2 className="title__sub"> и узнайте обо всех доступных льготах</h2>
                        </div>
                        <div className="content__text">
                            <div className="description">
                                Анкетирование поможет быстро занести данные в систему, сопоставить
                                их с требованиями для доступных льгот и предложить актуальные
                                персонально для гражданина
                            </div>
                        </div>
                        <div className="content__control">
                            <Button blue href="/">
                                Пройти опрос
                            </Button>
                        </div>
                    </div>
                    <div className="banner__img">
                        <img src={Img1} />
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
                    <div className="banner__content content">
                        <div className="content__title">
                            <h1 className="title__main">Пройдите анкету</h1>
                            <h2 className="title__sub"> и узнайте обо всех доступных льготах</h2>
                        </div>
                        <div className="content__text">
                            <div className="description">
                                Анкетирование поможет быстро занести данные в систему, сопоставить
                                их с требованиями для доступных льгот и предложить актуальные
                                персонально для гражданина
                            </div>
                        </div>
                        <div className="content__control">
                            <Button>пройти опрос</Button>
                        </div>
                    </div>
                    <div className="banner__img">
                        <img src={Img2} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
