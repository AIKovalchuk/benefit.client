import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Select from 'react-select'

import './sigupform.scss'

interface Props {}

interface Categorie {
    label: string
    value: string
}

const SignUpScheme = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Слишком короткий!')
        .max(30, 'Слишком длинный!')
        .required('Обязательно заполните!'),
    lastName: Yup.string()
        .min(2, 'Слишком короткий!')
        .max(30, 'Слишком длинный!')
        .required('Обязательно заполните!'),
    middleName: Yup.string()
        .min(2, 'Слишком короткий!')
        .max(30, 'Слишком длинный!')
        .required('Обязательно заполните!'),
    email: Yup.string().email('Не верная почта').required('Обязательно заполните!'),
    password: Yup.string()
        .min(2, 'Слишком короткий!')
        .max(30, 'Слишком длинный!')
        .required('Обязательно заполните!'),
    passport: Yup.string()
        .min(2, 'Слишком короткий!')
        .max(30, 'Слишком длинный!')
        .required('Обязательно заполните!'),
    legalAddres: Yup.string()
        .min(2, 'Слишком короткий!')
        .max(30, 'Слишком длинный!')
        .required('Обязательно заполните!'),
})

interface formI {
    firstName: string
    lastName: string
    middleName: string
    categories: null | Categorie[]
    email: string
    password: string
    passport: string
    legalAddress: string
}

const SignUpForm = (props: Props) => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            middleName: '',
            categories: null,
            email: '',
            password: '',
            passport: '',
            legalAddress: '',
        },
        onSubmit: (values: formI) => {
            const ans = { ...values, categories: values.categories!.map((val) => val.value) }
            alert(JSON.stringify(ans, null, 2))
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>

            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />

            <label htmlFor="lastName">Last Name</label>

            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />

            <label htmlFor="middleName">middle Name</label>

            <input
                id="middleName"
                name="middleName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.middleName}
            />

            <label htmlFor="categories">categories</label>

            <Select
                id="categories"
                isMulti={true}
                onChange={(e) => formik.setFieldValue('categories', e)}
                value={formik.values.categories}
                options={[
                    { value: 'FIRST_DEGREE_DISABLED', label: 'Первая категория инвалидности' },
                    { value: 'SECOND_DEGREE_DISABLED', label: 'Вторая категория инвалидности' },
                    { value: 'THIRD_DEGREE_DISABLED', label: 'Третья категория инвалидности' },
                    { value: 'WAR_VETERAN', label: 'Ветеран войны' },
                    { value: 'STUDENT', label: 'Студент' },
                    { value: 'EMERGENCY_LIQUIDATOR', label: 'Хуила?' },
                    { value: 'RETIREE', label: 'Педрила?' },
                    { value: 'ASSIGNED_TO_STATE_AWARD', label: 'Хуила + Педрила?' },
                ]}
            />

            <label htmlFor="email">Email Address</label>

            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            <label htmlFor="password">Пароль</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />

            <label htmlFor="passport">Passport</label>
            <input
                id="passport"
                name="passport"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.passport}
            />

            <label htmlFor="legalAddres"> Address</label>
            <input
                id="legalAddress"
                name="legalAddress"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.legalAddress}
            />

            <button type="submit">Submit</button>
        </form>
    )
}

export default SignUpForm
