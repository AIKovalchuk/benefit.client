import React from 'react'

interface Props {}

const Form = (props: Props) => {
    return (
        <div className="auth-form">
            <label className="auth-form__label-login" htmlFor="login">
                Почта или телефон
            </label>
            <input className="auth-form__input-login" id="login" />
            <label className="auth-form__label-pwd" htmlFor="pwd">
                Пароль
            </label>
            <input className="auth-form__input-pwd" id="pwd" />
        </div>
    )
}

export default Form
