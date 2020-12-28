import React from 'react'
import Props from './interface'

const FormAge = (props: Props) => {
    const onNext = (e: any) => {
        e.preventDefault()
        props.nextStep()
    }

    const handle = (e: any) => {
        // console.log(e)
        // props.handleChange('age')(e.target.value)
    }

    return (
        <div className="card">
            <div className="quest">Сколько Вам лет?</div>
            <div className="ans">
                <input onChange={handle} />
            </div>

            <div className="control">
                <button onClick={onNext}>Далее</button>
            </div>
        </div>
    )
}

export default FormAge
