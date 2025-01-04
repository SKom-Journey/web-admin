import { revokeSession } from "@/repository/auth/revoke-session";

export default async function clearSession() {
    try {
        await revokeSession();
        localStorage.clear();
        sessionStorage.clear();
        location.href = '/auth/login';
    } catch (error) {
        localStorage.clear();
        sessionStorage.clear();
        location.href = '/auth/login';
    }
}