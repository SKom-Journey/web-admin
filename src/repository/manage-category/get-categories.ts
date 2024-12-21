import { CATEGORY } from "@/api/category"
import { Http } from "@/config/http"
import { CategoryResponse } from "@/response/category"
import { Response } from "@/response/common/response"

export async function getCategories(): Promise<CategoryResponse[]> {
   try {
      const res = await Http.get<Response<CategoryResponse[]>>(CATEGORY.GetCategories(), {
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