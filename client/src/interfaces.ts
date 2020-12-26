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
