import { Http } from "@/config/http";
import { Response } from "@/response/common/response";
import { MENU_CATEGORY } from "@/api/menu-category";
import { MenuCategoryResponse } from "@/response/menu-category";
import { CreateMenuCategoryRequest } from "@/request/menu-category";

export const createMenuCategory = async (payload: CreateMenuCategoryRequest): Promise<MenuCategoryResponse> => {
   try {
      const res = await Http.post<Response<MenuCategoryResponse>>(
         MENU_CATEGORY.CreateMenuCategory(), 
         payload,
         {
            headers: {
               "Content-Type": "application/json",
            }
         }
      );

      const data: MenuCategoryResponse = {
         category_id: res.data.data.category_id,
         created_at: res.data.data.created_at,
         menu_id: res.data.data.menu_id,
         id: res.data.data.id,
      };

      return data;
   } catch (error) {
      console.error('Claim Error:', error);
      throw error;
   }
};
