export enum SidebarTypes {
    LOAD_SIDEBAR = '@sidebar/LOAD_SIDEBAR',
    LOAD_SUCCCES = '@sidebar/LOAD_SUCCCES',
}

export interface currency {
    id: number,
    name: string,
    code: string,
    symbol: string,
}

export interface Sidebar {
    currency: currency,
    accountabilityId: number;
    declared: number;
    approved: number;
    received: number;
    returned: number;
    balance: number;
    pdatedOn: number;
}

export interface SidebarState {
    data: Sidebar[],
}