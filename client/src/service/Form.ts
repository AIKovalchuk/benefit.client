import axios from 'axios'
import { IBenefit } from '../interfaces'
import { headers_admin, headers_user, route } from './route'

export default class FormService {
    static async send(form: any): Promise<IBenefit[]> {
        const grades = Object.values(form).filter((val) => {
            if (val.length > 1) {
                return true
            }
            return false
        })
        const { data } = await axios.post(
            route('/api/v1/open/privilege/available'),
            { grades: grades },
            { headers: headers_user },
        )
        return data
    }
}
