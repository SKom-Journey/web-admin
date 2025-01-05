import { Http } from "@/config/http";
import { Response } from "@/response/common/response";
import { ORDER } from "@/api/order";
import { FinishOrderRequest } from "@/request/order";
import { OrderResponse } from "@/response/order";

export const finishOrder = async (payload: FinishOrderRequest): Promise<OrderResponse[]> => {
   try {
      const res = await Http.put<Response<OrderResponse[]>>(
         ORDER.FinishOrders(payload.id), 
         payload,
         {
            headers: {
               "Content-Type": "application/json",
            }
         }
      );

      return res.data.data;
   } catch (error) {
      console.error('Claim Error:', error);
      throw error;
   }
};
