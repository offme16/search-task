export interface DataItem {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    city: string;
}

export interface searchSchema {
    result?: DataItem[];
    isLoading: boolean;
    error?: string;
    searchInput?: string;
}
