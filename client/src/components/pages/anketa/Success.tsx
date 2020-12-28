import React from 'react'
import FormService from '../../../service/Form'

interface Props {
    value: any
}

const Success = (props: Props) => {
    const [benefits, setBenefits] = React.useState([])
    const onShow = (e: any) => {
        e.preventDefault()
        FormService.send(props.value).then((res) => console.log(res))
    }
    return (
        <>
            <div className="card">
                <div>Спасибо</div>
                <button onClick={onShow}>Показать результаты</button>
            </div>
            <div>
                {benefits.map((ben: any, id) => {
                    return (
                        <div key={id} className="benefit">
                            <div className="title">{ben.name}</div>
                            <div className="desc">{ben.description}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Success
