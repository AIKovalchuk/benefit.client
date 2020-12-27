export interface IBenefit {
    id: number
    legalMinistry: string
    text: string
    timeCreated: string
    availableForAssignment: boolean
    gradesRequired: string[]
}

export interface IStatus {
    status: string
}

export interface IOrder {
    id: number
    benefit: string
    createdAt: number
    status: string
    comment: string
}

export interface IRelative {
    id: number
    firstName: string
    lastName: string
    birthday: number
}

export interface Categorie {
    label: string
    value: string
}

export interface IUser {
    firstName: string
    lastName: string
    middleName: string
    categories: null | Categorie[]
    mail: string
    password: string
    passport: string
    legalAddress: string
}

export interface IUser2 {
    firstName: string
    lastName: string
    middleName: string
    categories: null | string[]
    mail: string
    password: string
    passport: string
    legalAddress: string
}

export interface IUserExtend extends IUser {
    id: number,
    privileges: IBenefit[],
    grades: string[],
    timeCreated: string[],
    active: boolean
}
