export enum TimelineTypes {
    LOAD_TIMELINE = '@timeline/LOAD_TIMELINE',
    LOAD_SUCCCES = '@timeline/LOAD_SUCCCES',
    ADD_ITEM = '@timeline/ADD_ITEM',
}

export interface author {
    id: number,
    name: string,
    email: string,
}

export interface Timeline {
    id: number,
    cardDate: number,
    cardType: string,
    expenseId: any,
    invoiceDate: any;
    status: string | null,
    notes: string | null,
    expenseTypeId: any,
    expenseTypeCode: any,
    expenseTypeIcon: any,
    currencyId: any,
    currencyCode: any,
    currencySymbol: any,
    resourceUrl: any,
    contentType: any,
    amountSpent: any,
    amountTotal: any,
    updatedOn: any,
    expenseEvaluation: any,
    author: author | null,
}

export interface TimelineState {
    data: Timeline[],
}