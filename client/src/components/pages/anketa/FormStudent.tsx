import React from 'react'
import Props from './interface'

const FormStudent = (props: Props) => {
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
            props.handleChange('student')('STUDENT')
        } else {
            props.handleChange('student')('')
        }
    }

    return (
        <div className="card">
            <div className="quest">Являетесь ли Вы студентом?</div>
            <div className="ans">
                <div className="filed">
                    <input
                        id="student_1"
                        type="radio"
                        name="student"
                        value="true"
                        onChange={handle}
                    />
                    <label htmlFor="student_1">Да</label>
                </div>
                <div className="filed">
                    <input
                        id="student_2"
                        type="radio"
                        name="student"
                        value="false"
                        onChange={handle}
                    />
                    <label htmlFor="student_2">Нет</label>
                </div>
            </div>

            <div className="control">
                <button onClick={onPrev}>Назад</button>
                <button onClick={onNext}>Далее</button>
            </div>
        </div>
    )
}

export default FormStudent
