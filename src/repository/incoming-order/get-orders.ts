import { ORDER } from "@/api/order"
import { Http } from "@/config/http"
import { Response } from "@/response/common/response"
import { OrderResponse } from "@/response/order"

export async function getOrders(): Promise<OrderResponse[]> {
   try {
      const res = await Http.get<Response<OrderResponse[]>>(ORDER.GetOrders(), {
         headers: {
            "Content-Type": "application/json",
         }
      })
   
      return res.data.data
   } catch (error) {
      console.error(error)
      throw error
   }
}