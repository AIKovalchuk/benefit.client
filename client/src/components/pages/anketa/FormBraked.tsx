import React from 'react'
import Props from './interface'

const FormBraked = (props: Props) => {
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
        if (e.target.value === '') {
            props.handleChange('breaked')(null)
            return
        }
        props.handleChange('breaked')(e.target.value)
    }

    return (
        <div className="card">
            <div className="quest">Имеети ли Вы инвалидность?</div>
            <div className="ans">
                <div className="filed">
                    <input
                        id="breaked_1"
                        type="radio"
                        name="breaked"
                        value="FIRST_DEGREE_DISABLED"
                        onChange={handle}
                    />
                    <label htmlFor="breaked_1">Первая категория</label>
                </div>
                <div className="filed">
                    <input
                        id="breaked_2"
                        type="radio"
                        name="breaked"
                        value="SECOND_DEGREE_DISABLED"
                        onChange={handle}
                    />
                    <label htmlFor="breaked_2">Вторая категория</label>
                </div>
                <div className="filed">
                    <input
                        id="breaked_3"
                        type="radio"
                        name="breaked"
                        value="THIRD_DEGREE_DISABLED"
                        onChange={props.handleChange('breaked')}
                    />
                    <label htmlFor="breaked_3">Третья категория</label>
                </div>
                <div className="filed">
                    <input type="radio" name="breaked" value="" onChange={handle} />
                    <label htmlFor="breaked_4">Нет</label>
                </div>
            </div>
            <div className="control">
                <button onClick={onPrev}>Назад</button>
                <button onClick={onNext}>Далее</button>
            </div>
        </div>
    )
}

export default FormBraked
