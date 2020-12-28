import React from 'react'
import FormAge from './FormAge'
import FormBraked from './FormBraked'
import FormFamily from './FormFamily'
import FormAward from './FormAward'
import FormWar from './FormWar'
import FormWorking from './FormWorking'
import FormLiquidator from './FormLiquidator'
import FormStudent from './FormStudent'
import FormGoverment from './FormGoverment'
import Success from './Success'

interface Props {}

const FormUser = (props: Props) => {
    const [step, setStep] = React.useState<number>(1)
    const [formUser, setFormUser] = React.useState({
        age: 0,
        breaked: '',
        veteran: '',
        student: '',
        working: '',
        award: '',
        goverment: '',
        family: '',
        liquidator: '',
    })
    // const [age, setAge] = React.useState<number>(0)
    // const [breaked, setBreaked] = React.useState<string | null>(null)
    // const [veteran, setVeteran] = React.useState<boolean>(false)
    // const [student, setStudent] = React.useState<boolean>(false)
    // const [working, setWorking] = React.useState<boolean>(false)
    // const [award, setAward] = React.useState<boolean>(false)
    // const [goverment, setGoverment] = React.useState<boolean>(false)
    // const [family, setFamily] = React.useState<boolean>(false)

    const nextStep = () => {
        setStep(step + 1)
    }

    const prevStep = () => {
        setStep(step - 1)
    }

    const handleFieldChange = (input) => (e) => {
        setFormUser({ ...formUser, [input]: e })
    }

    switch (step) {
        case 1:
            return (
                <FormAge prevStep={prevStep} nextStep={nextStep} handleChange={handleFieldChange} />
            )
        case 2:
            return (
                <FormBraked
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleFieldChange}
                />
            )
        case 3:
            return (
                <FormFamily
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleFieldChange}
                />
            )
        case 4:
            return (
                <FormStudent
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleFieldChange}
                />
            )
        case 5:
            return (
                <FormWorking
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleFieldChange}
                />
            )
        case 6:
            return (
                <FormGoverment
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleFieldChange}
                />
            )
        case 7:
            return (
                <FormLiquidator
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleFieldChange}
                />
            )
        case 8:
            return (
                <FormAward
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleFieldChange}
                />
            )
        case 9:
            return (
                <FormWar prevStep={prevStep} nextStep={nextStep} handleChange={handleFieldChange} />
            )
        case 10:
            return <Success value={formUser} />

        default:
            break
    }

    return <div>{step}</div>
}

export default FormUser
