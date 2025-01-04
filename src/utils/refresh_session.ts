import { refreshSession } from "@/repository/auth/refresh-session";
import { ResfreshSession } from "@/response/auth";

export default async function refreshSessionToken(): Promise<ResfreshSession> {
    return await refreshSession();
}