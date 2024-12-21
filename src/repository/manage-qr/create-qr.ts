import { QR } from "@/api/qr";
import { Http } from "@/config/http";
import { QrRequest } from "@/request/qr";
import { QrResponse } from "@/response/qr";
import { Response } from "@/response/common/response";

export const createQr = async (payload: QrRequest): Promise<QrRequest> => {
   try {
      const res = await Http.post<Response<QrResponse>>(
         QR.CreateQr(), 
         payload,
         {
            headers: {
               "Content-Type": "application/json",
            }
         }
      );

      const data: QrRequest = {
         table_number: res.data.data.table_number
      };

      return data;
   } catch (error) {
      console.error('Claim Error:', error);
      throw error;
   }
};
