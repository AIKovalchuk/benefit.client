import axios from 'axios'
import { IUser2, IUserExtend } from '../interfaces'
import { headers_user, route } from './route'

class AuthService {
    static async login(login: string, password: string): Promise<IUserExtend> {
        const { data } = await axios.post(
            route('/api/v1/user/login'),
            { username: login, password: password },
            { headers: headers_user },
        )
        return data
    }

    static async signup(user: IUser2): Promise<IUserExtend> {
        const { data } = await axios.post(
            route('/api/v1/user/create'),
            { ...user },
            { headers: headers_user },
        )
        return data
    }

    static async active(id: number, factor: string): Promise<void> {
        axios.post(
            route('/api/v1/user/activate'),
            { userId: id, factor },
            { headers: headers_user },
        )
    }
}

export default AuthService
