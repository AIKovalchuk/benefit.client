import React from 'react'
import Props from './interface'

const FormGoverment = (props: Props) => {
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
            props.handleChange('goverment')('WORK_ON_GOVERNMENT')
        } else {
            props.handleChange('goverment')('')
        }
    }

    return (
        <div className="card">
            <div className="quest">Работаете ли Вы гос учереждении?</div>
            <div className="ans">
                <div className="filed">
                    <input
                        id="goverment_1"
                        type="radio"
                        name="goverment"
                        value="true"
                        onChange={handle}
                    />
                    <label htmlFor="goverment_1">Да</label>
                </div>

                <div className="filed">
                    <input
                        id="goverment_2"
                        type="radio"
                        name="goverment"
                        value="false"
                        onChange={handle}
                    />
                    <label htmlFor="goverment_2">Нет</label>
                </div>
            </div>

            <div className="control">
                <button onClick={onPrev}>Назад</button>
                <button onClick={onNext}>Далее</button>
            </div>
        </div>
    )
}

export default FormGoverment
