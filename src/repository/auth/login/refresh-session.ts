import { Http } from "@/config/http";
import { Response } from "@/response/common/response";
import { AUTH } from "@/api/auth";
import { ResfreshSession } from "@/response/auth";

export const refreshSession = async (): Promise<ResfreshSession> => {
   try {
      const res = await Http.post<Response<ResfreshSession>>(
         AUTH.RefreshSession(), 
         {
            headers: {
               "Content-Type": "application/json",
            }
         }
      );

      const data: ResfreshSession = {
         access_token: res.data.data.access_token,
         created_at: res.data.data.created_at,
         id: res.data.data.id,
         type: res.data.data.type,
         user_id: res.data.data.user_id,
      };

      return data;
   } catch (error) {
      console.error('Claim Error:', error);
      throw error;
   }
};
