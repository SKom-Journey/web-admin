import { Response } from "@/response/common/response";
import { AUTH } from "@/api/auth";
import { Session } from "@/response/auth";
import axios from "axios";
import { API_URL } from "@/config/env";

export const revokeSession = async (): Promise<Session> => {
   try {
      const res = await axios.delete<Response<Session>>(
         API_URL + AUTH.RevokeSession()
      );

      const data: Session = {
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
