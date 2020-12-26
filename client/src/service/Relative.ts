import { IRelative, IStatus } from '../interfaces'

export class Relative {
    static async getAll(token: string): Promise<IRelative[]> {
        return new Promise((resolve) => {
            setTimeout(
                () =>
                    resolve([
                        {
                            id: 1,
                            firstName: 'Loly',
                            lastName: 'Pepe',
                            birthday: 12312313131,
                        },
                        {
                            id: 2,
                            firstName: 'Kik',
                            lastName: 'Pepe',
                            birthday: 12312313131,
                        },
                    ]),
                1440,
            )
        })
    }

    static async getByID(token: string, id: number): Promise<IRelative> {
        return new Promise((resolve) => {
            setTimeout(
                () =>
                    resolve({
                        id: 2,
                        firstName: 'Kik',
                        lastName: 'Pepe',
                        birthday: 12312313131,
                    }),
                1440,
            )
        })
    }

    static async create(
        token: string,
        firstName: string,
        lastName: string,
        birthday: number,
    ): Promise<IStatus> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ status: 'ok' })
            }, 1440)
        })
    }

    static async updateById(token: string, relativ: IRelative): Promise<IStatus> {
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
