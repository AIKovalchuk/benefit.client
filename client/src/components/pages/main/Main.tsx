import React from 'react'
import Header from '../../layout/Header'

interface Props {}

const Main = (props: Props) => {
    return (
        <div className="main-page">
            <Header />
            <div className="block">
                <div className="block__title">Узнай свои льготы прямо сейчас</div>
                <div className="block__content">
                    <div className="text">Вы можете пройти опрос и узнать все свои льготы прямо сейчас!</div>
                    <button className="btn">Пройти опрос</button>
                </div>
            </div>
        </div>
    )
}

export default Main
