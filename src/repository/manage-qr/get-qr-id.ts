import { QR } from "@/api/qr"
import { Http } from "@/config/http"
import { Response } from "@/response/common/response"
import { QrResponse } from "@/response/qr"

export async function getQrId(table_number: string): Promise<Response<QrResponse>> {
   try {
      const res = await Http.get<Response<QrResponse>>(QR.GetQrByTableNumber(table_number), {
         headers: {
            "Content-Type": "application/json",
         }
      })
   
      return res.data
   } catch (error) {
      console.error(error)
      throw error
   }
}