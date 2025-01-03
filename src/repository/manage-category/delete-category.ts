import { CATEGORY } from "@/api/category"
import { Http } from "@/config/http"

export async function deleteCategory(id: string) {
   try {
      const res = await Http.delete(CATEGORY.DeleteCategory(id), {
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