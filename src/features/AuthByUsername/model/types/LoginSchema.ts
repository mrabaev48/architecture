export interface LoginSchema {
    id?: number;
    username: string;
    password: string;
    isLoading: boolean;
    error?: string;
}
