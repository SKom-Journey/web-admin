import { QR } from "@/api/qr"
import { Http } from "@/config/http"
import { Response } from "@/response/common/response"
import { QrResponse } from "@/response/qr"

export async function getQrs(): Promise<QrResponse[]> {
   try {
      const res = await Http.get<Response<QrResponse[]>>(QR.GetQrs(), {
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