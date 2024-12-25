import { MENU_CATEGORY } from "@/api/menu-category"
import { Http } from "@/config/http"
import { DeleteMenuCategoryRequest } from "@/request/menu-category";
import { Response } from "@/response/common/response";

export const deleteMenuCategory = async (payload: DeleteMenuCategoryRequest): Promise<number> => {
   try {
      const res = await Http.delete<Response<number>>(
         MENU_CATEGORY.DeleteMenuCategory(), 
         {
            data: payload
         }
      );

      const data: number = res.data.data;

      return data;
   } catch (error) {
      console.error('Claim Error:', error);
      throw error;
   }
};