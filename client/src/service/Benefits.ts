import { IBenefit, IStatus } from '../interfaces'
import axios from 'axios'

class BenefitsService {
    static async getAll(
        offset: number,
        limit: number,
        search?: string,
        token?: string,
    ): Promise<IBenefit[]> {
        const { data } = await axios.get(
            'https://privilege-app-weak.herokuapp.com/api/v1/privilege',
        )
        return data
    }

    static async getByID(token?: string, id: number): Promise<IBenefit> {
        return new Promise((resolve) => {
            setTimeout(
                () =>
                    resolve({
                        id: 1,
                        title: 'Льгота',
                        category: 'Пенсионеры',
                        description: 'Бесплатный хроб',
                        requments: 'Быть страше 110 лет',
                        departament: 'ПФР',
                    }),
                1440,
            )
        })
    }

    static async create(
        token: string,
        title: string,
        category: string,
        description: string,
        requments: string,
        departament: string,
    ): Promise<IStatus> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ status: 'ok' })
            }, 1440)
        })
    }

    static async updateByID(token: string, benefit: IBenefit): Promise<IStatus> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ status: 'ok' })
            }, 1440)
        })
    }

    static async deleteByID(token: string, id: number): Promise<IStatus> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ status: 'ok' })
            }, 1440)
        })
    }
}

export default BenefitsService
