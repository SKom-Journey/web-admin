import { QR } from "@/api/qr"
import { Http } from "@/config/http"

export async function deleteQr(id: string) {
   try {
      const res = await Http.delete(QR.DeleteQr(id), {
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