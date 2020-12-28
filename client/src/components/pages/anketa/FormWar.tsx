import React from 'react'
import Props from './interface'

const FormWar = (props: Props) => {
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
            props.handleChange('war')('WAR_VETERAN')
        } else {
            props.handleChange('war')('')
        }
    }

    return (
        <div className="card">
            <div className="quest">Являетесь ли Вы участником войны?</div>
            <div className="ans">
                <div className="filed">
                    <input id="war_2" type="radio" name="war" value="true" onChange={handle} />
                    <label htmlFor="war_1">Да</label>
                </div>
                <div className="filed">
                    <input id="war_2" type="radio" name="war" onChange={handle} />
                    <label htmlFor="war_2">Нет</label>
                </div>
            </div>

            <div className="control">
                <button onClick={onPrev}>Назад</button>
                <button onClick={onNext}>Далее</button>
            </div>
        </div>
    )
}

export default FormWar
