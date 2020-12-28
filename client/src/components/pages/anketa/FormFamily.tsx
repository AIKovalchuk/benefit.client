import React from 'react'
import Props from './interface'

const FormFamily = (props: Props) => {
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
            props.handleChange('family')('')
        } else {
            props.handleChange('family')('NOT_FULL_FAMILY')
        }
    }

    return (
        <div className="card">
            <div className="quest">У Вас полная семья?</div>
            <div className="ans">
                <div className="filed">
                    <input
                        id="family_1"
                        type="radio"
                        name="family"
                        onChange={handle}
                        value="true"
                    />
                    <label htmlFor="family_1">да</label>
                </div>
                <div className="filed">
                    <input id="family_2" type="radio" name="family" onChange={handle} />
                    <label htmlFor="family_2">нет</label>
                </div>
            </div>

            <div className="control">
                <button onClick={onPrev}>Назад</button>
                <button onClick={onNext}>Далее</button>
            </div>
        </div>
    )
}

export default FormFamily
