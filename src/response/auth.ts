export interface LoginAdminResponse {
    id: string;
    username: string;
    password: number;
    created_at: string;
}

export interface ResfreshSession {
    id: string;
    access_token: string;
    user_id: string;
    type: string;
    created_at: string;
}