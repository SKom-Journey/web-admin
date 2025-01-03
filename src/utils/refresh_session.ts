import { refreshSession } from "@/repository/auth/login/refresh-session";
import { ResfreshSession } from "@/response/auth";

export default async function refreshSessionToken(): Promise<ResfreshSession> {
    return await refreshSession();
}