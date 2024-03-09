interface Address {
    city: string;
}

export interface DataItem {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    address?: Address[];
}

export interface searchSchema {
    result?: DataItem[];
    isLoading: boolean;
    error?: string;
    searchInput?: string;
}
