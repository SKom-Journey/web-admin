import { MENU } from "@/api/menus"
import { Http } from "@/config/http"

export async function deleteMenu(id: string) {
   try {
      const res = await Http.delete(MENU.DeleteMenu(id), {
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