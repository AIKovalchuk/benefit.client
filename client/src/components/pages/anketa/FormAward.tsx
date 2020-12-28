import React from 'react'
import Props from './interface'

const FormAward = (props: Props) => {
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
            props.handleChange('award')('ASSIGNED_TO_STATE_AWARD')
        } else {
            props.handleChange('award')('')
        }
    }

    return (
        <div className="card">
            <div className="quest">Имеети ли Вы государственные награды?</div>
            <div className="ans">
                <div className="filed">
                    <input
                        id="award_true"
                        type="radio"
                        name="award"
                        value="true"
                        onChange={handle}
                    />
                    <label htmlFor="award_true">Да</label>
                </div>
                <div className="filed">
                    <input
                        id="award_false"
                        type="radio"
                        name="award"
                        value="false"
                        onChange={handle}
                    />
                    <label htmlFor="award_false">нет</label>
                </div>
            </div>
            <div className="control">
                <button onClick={onPrev}>Назад</button>
                <button onClick={onNext}>Далее</button>
            </div>
        </div>
    )
}

export default FormAward
