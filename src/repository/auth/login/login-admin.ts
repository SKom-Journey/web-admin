import { Http } from "@/config/http";
import { Response } from "@/response/common/response";
import { AUTH } from "@/api/auth";
import { LoginAdminRequest } from "@/request/auth";
import { LoginAdminResponse } from "@/response/auth";

export const loginAdmin = async (payload: LoginAdminRequest): Promise<LoginAdminResponse> => {
   try {
      const res = await Http.post<Response<LoginAdminResponse>>(
        AUTH.LoginAdmin(), 
         payload,
         {
            headers: {
               "Content-Type": "application/json",
            }
         }
      );

      const data: LoginAdminResponse = {
        username: res.data.data.username,
        password: res.data.data.password,
        created_at: res.data.data.created_at,
        id: res.data.data.id,
      };

      return data;
   } catch (error) {
      console.error('Claim Error:', error);
      throw error;
   }
};
