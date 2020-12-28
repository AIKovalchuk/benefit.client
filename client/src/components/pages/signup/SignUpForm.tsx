import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Select from 'react-select'

import { IUser, IUser2 } from '../../../interfaces'
import AuthService from '../../../service/Auth'
import { registerContext } from '../../../providers/RegisterProvider'

interface Props {}

const SignUpForm: React.FC = (props: Props) => {
    const { setPerson } = React.useContext(registerContext)
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            middleName: '',
            categories: null,
            mail: '',
            password: '',
            passport: '',
            legalAddress: '',
        },
        onSubmit: (values: IUser) => {
            const ans: IUser2 = {
                ...values,
                categories: values.categories!.map((val) => val.value),
            }
            AuthService.signup(ans).then((res) => {
                console.log(res)
                setPerson(res)
            })
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">Имя</label>

            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />

            <label htmlFor="lastName">Фамилия</label>

            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />

            <label htmlFor="middleName">Отчество</label>

            <input
                id="middleName"
                name="middleName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.middleName}
            />

            <label htmlFor="categories">Ваше положение</label>

            <Select
                id="categories"
                isMulti={true}
                onChange={(e) => formik.setFieldValue('categories', e)}
                value={formik.values.categories}
                className="multiply"
                options={[
                    {
                        value: 'FIRST_DEGREE_DISABLED',
                        label: 'Первая категория инвалидности',
                    },
                    {
                        value: 'SECOND_DEGREE_DISABLED',
                        label: 'Вторая категория инвалидности',
                    },
                    {
                        value: 'THIRD_DEGREE_DISABLED',
                        label: 'Третья категория инвалидности',
                    },
                    { value: 'WAR_VETERAN', label: 'Ветеран войны' },
                    { value: 'STUDENT', label: 'Студент' },
                    { value: 'EMERGENCY_LIQUIDATOR', label: 'Ликвидатор' },
                    { value: 'ASSIGNED_TO_STATE_AWARD', label: 'Есть гос. награда' },
                ]}
            />

            <label htmlFor="mail">Email почта</label>

            <input
                id="mail"
                name="mail"
                type="mail"
                onChange={formik.handleChange}
                value={formik.values.mail}
            />

            <label htmlFor="password">Пароль</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />

            <label htmlFor="passport">Паспорт</label>
            <input
                id="passport"
                name="passport"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.passport}
            />

            <label htmlFor="legalAddres">Адрес</label>
            <input
                id="legalAddress"
                name="legalAddress"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.legalAddress}
            />

            <button type="submit">Зарегистрироваться</button>
        </form>
    )
}

export default SignUpForm
