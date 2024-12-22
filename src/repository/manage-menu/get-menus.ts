import { MENU } from "@/api/menus"
import { Http } from "@/config/http"
import { Response } from "@/response/common/response"
import { MenusResponse } from "@/response/menus"

export async function getMenus(): Promise<MenusResponse[]> {
   try {
      const res = await Http.get<Response<MenusResponse[]>>(MENU.GetMenus(), {
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