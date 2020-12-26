import { IOrder, IStatus } from '../interfaces'

export class Order {
    static async getAll(
        offset: number,
        limit: number,
        search: string,
        token?: string,
    ): Promise<IOrder[]> {
        return new Promise((resolve) => {
            setTimeout(
                () =>
                    resolve([
                        {
                            id: 1,
                            benefit: 'Получить хроб',
                            createdAt: 12019312903821093,
                            status: 'На подтверждении',
                            comment: '',
                        },
                        {
                            id: 1,
                            benefit: 'Получить хроб',
                            createdAt: 12019312903821093,
                            status: 'Подтвержденно',
                            comment: 'Посетите МФЦ 31.02.2021',
                        },
                    ]),
                1440,
            )
        })
    }

    static async getByID(token: string, id: number): Promise<IOrder> {
        return new Promise((resolve) => {
            setTimeout(
                () =>
                    resolve({
                        id: 1,
                        benefit: 'Получить хроб',
                        createdAt: 12019312903821093,
                        status: 'Подтвержденно',
                        comment: 'Посетите МФЦ 31.02.2021',
                    }),
                1440,
            )
        })
    }

    static async create(token: string): Promise<IOrder> {
        return new Promise((resolve) => {
            setTimeout(
                () =>
                    resolve({
                        id: 1,
                        benefit: 'Получить хроб',
                        createdAt: 12019312903821093,
                        status: 'Подтвержденно',
                        comment: 'Посетите МФЦ 31.02.2021',
                    }),
                1440,
            )
        })
    }

    static async update(token: string, status: string): Promise<IOrder> {
        return new Promise((resolve) => {
            setTimeout(
                () =>
                    resolve({
                        id: 1,
                        benefit: 'Получить хроб',
                        createdAt: 12019312903821093,
                        status: 'Подтвержденно',
                        comment: 'Посетите МФЦ 31.02.2021',
                    }),
                1440,
            )
        })
    }

    static async delete(token: string, status: string): Promise<IStatus> {
        return new Promise((resolve) => {
            setTimeout(() => resolve({ status: 'Удалено' }), 1440)
        })
    }
}
