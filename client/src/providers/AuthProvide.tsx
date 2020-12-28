import React from 'react'
import { IUserExtend } from '../interfaces'

export const AuthContext = React.createContext({
    isLoggedIn: false,
    token: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    login: (token: number, person: IUserExtend, expirationTime: Date | undefined) => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    logout: () => {},
    getPerson: () => {
        return {} as IUserExtend | null
    },
})

let logoutTimer: NodeJS.Timeout

const AuthProvider: React.FC = ({ children }: any) => {
    const authContext = React.useContext(AuthContext)
    const [token, setToken] = React.useState<number | null>(null)
    const [_person, setPerson] = React.useState<IUserExtend | null>(null)
    const [tokenExpirationDate, setTokenExpirationDate] = React.useState<Date | null>()

    const login = React.useCallback(
        (token: number, expirationTime: Date | undefined, newPerson: IUserExtend) => {
            console.log(token, expirationTime)
            setToken(token)

            setPerson(newPerson)

            const expiration = expirationTime || new Date(new Date().getTime() + 1000 * 60 * 60)

            setTokenExpirationDate(expiration)

            localStorage.setItem(
                'userData',
                JSON.stringify({
                    token,
                    expirationTime: expiration.toISOString(),
                    person: newPerson,
                }),
            )
        },
        [],
    )

    const logout = React.useCallback(() => {
        setToken(null)
        setTokenExpirationDate(null)
        setPerson(null)
        localStorage.removeItem('userData')
    }, [])

    const getPerson = () => {
        if (!!token) {
            return _person
        } else {
            return null
        }
    }

    React.useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData') || '{}')
        if (storedData && storedData.token && new Date(storedData.expirationTime) > new Date()) {
            login(storedData.token, new Date(storedData.expirationTime), storedData.person)
        }
    }, [login])

    React.useEffect(() => {
        if (token && tokenExpirationDate) {
            const remainingTime = tokenExpirationDate.getTime() - new Date().getTime()
            logoutTimer = setTimeout(logout, remainingTime)
        } else {
            clearTimeout(logoutTimer)
        }
    }, [token, logout, tokenExpirationDate])

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: !!token,
                token: null,
                login: login,
                logout: logout,
                getPerson: getPerson,
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
