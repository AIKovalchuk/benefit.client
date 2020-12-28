import React from 'react'
import Props from './interface'

const FormLiquidator = (props: Props) => {
    const onNext = (e: any) => {
        e.preventDefault()
        props.nextStep()
    }

    const onPrev = (e: any) => {
        e.preventDefault()
        props.prevStep()
    }

    const handle = (e: any) => {
        console.log(e)
        if (e.target.value === 'true') {
            props.handleChange('liquidator')('EMERGENCY_LIQUIDATOR')
        } else {
            props.handleChange('liquidator')('')
        }
    }

    return (
        <div className="card">
            <div className="quest">Принимали ли Вы участия в ликвидациях бедствий?</div>
            <div className="ans">
                <div className="filed">
                    <input
                        id="liquidator_1"
                        type="radio"
                        name="liquidator"
                        value="true"
                        onChange={handle}
                    />
                    <label htmlFor="liquidator_1">Да</label>
                </div>

                <div className="filed">
                    <input
                        id="liquidator_2"
                        type="radio"
                        name="liquidator"
                        value="false"
                        onChange={handle}
                    />
                    <label htmlFor="liquidator_2">Нет</label>
                </div>
            </div>

            <div className="control">
                <button onClick={onPrev}>Назад</button>
                <button onClick={onNext}>Далее</button>
            </div>
        </div>
    )
}

export default FormLiquidator
