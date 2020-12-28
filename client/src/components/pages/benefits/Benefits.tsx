import React from 'react'
import { IBenefit } from '../../../interfaces'
import BenefitsService from '../../../service/Benefits'

import Header from '../../layout/Header'

interface Props {}

const Benefits = (props: Props) => {
    const [benefits, setBenefits] = React.useState<IBenefit[]>([])

    const getBenefits = async () => {
        try {
            const benes = await BenefitsService.getAll()
            setBenefits(benes)
        } catch (error) {
            console.warn(error.message)
        }
    }

    React.useEffect(() => {
        getBenefits()
    }, [])

    return (
        <>
            <div className="benefit-list">
                {benefits.map((ben: any, id) => (
                    <div key={id} className="benefit">
                        <div className="title">{ben.name}</div>
                        <div className="desc">{ben.description}</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Benefits
