import { Http } from "@/config/http";
import { Response } from "@/response/common/response";
import { MenusRequest } from "@/request/menu";
import { MENU } from "@/api/menus";
import { MenusResponse } from "@/response/menus";

export const updateMenu = async (payload: MenusRequest, menu_id: string): Promise<MenusRequest> => {
   try {
      const res = await Http.put<Response<MenusResponse>>(
         MENU.UpdateMenu(menu_id), 
         payload,
         {
            headers: {
               "Content-Type": "multipart/form-data",
            }
         }
      );

      const data: MenusRequest = {
         title: res.data.data.title,
         img: res.data.data.img,
         price: res.data.data.price,
         description: res.data.data.description
      };

      return data;
   } catch (error) {
      console.error(error);
      throw error;
   }
};
