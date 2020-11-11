export enum HeaderTypes {
    LOAD_HEADER = '@header/LOAD_HEADER',
    LOAD_SUCCCES = '@header/LOAD_SUCCCES',
}

export interface Header {
    id: number,
    name: string,
    email: string,
    justification: string,
    purpose: string,
    project: string,
    createdOn: number,
    amountOfPeople: number,
    budgetForBreakfast: null | boolean
}

export interface HeaderState {
    data: Header,
}