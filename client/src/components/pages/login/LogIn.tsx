import React from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import AuthService from '../../../service/Auth'
import { AuthContext } from '../../../providers/AuthProvide'
interface Props {}

const LogIn = (props: Props) => {
    const { getPerson, login } = React.useContext(AuthContext)
    const history = useHistory()

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        onSubmit: (values) => {
            AuthService.login(values.login, values.password).then((res) =>
                login(res.id, res, undefined),
            )
            history.push('/')
        },
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="login">login</label>

                <input
                    id="login"
                    name="login"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.login}
                />

                <label htmlFor="password">password</label>

                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <button type="submit">Войти</button>
            </form>
        </div>
    )
}

export default LogIn
