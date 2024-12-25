import { MENU } from "@/api/menus"
import { Http } from "@/config/http"
import { Response } from "@/response/common/response"
import { MenusResponse } from "@/response/menus"

export async function getMenuOutsideCategories(categoryId: string): Promise<MenusResponse[]> {
   try {
      const res = await Http.get<Response<MenusResponse[]>>(MENU.GetMenuOutsideCategory(categoryId), {
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