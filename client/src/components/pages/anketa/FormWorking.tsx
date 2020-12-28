import React from 'react'
import Props from './interface'

const FormWorking = (props: Props) => {
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
            props.handleChange('working')('WORKING')
        } else {
            props.handleChange('working')('')
        }
    }

    return (
        <div className="card">
            <div className="quest">Имеете ли Вы работу?</div>
            <div className="ans">
                <div className="filed">
                    <input
                        id="working_1"
                        type="radio"
                        name="working"
                        value="true"
                        onChange={handle}
                    />
                    <label htmlFor="working_1">Да</label>
                </div>

                <div className="filed">
                    <input
                        id="working_2"
                        type="radio"
                        name="working"
                        value="false"
                        onChange={handle}
                    />
                    <label htmlFor="working_2">Нет</label>
                </div>
            </div>

            <div className="control">
                <button onClick={onPrev}>Назад</button>
                <button onClick={onNext}>Далее</button>
            </div>
        </div>
    )
}

export default FormWorking
