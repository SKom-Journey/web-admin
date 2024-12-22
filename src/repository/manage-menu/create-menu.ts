import { Http } from "@/config/http";
import { Response } from "@/response/common/response";
import { MenusRequest } from "@/request/menu";
import { MENU } from "@/api/menus";
import { MenusResponse } from "@/response/menus";

export const createMenu = async (payload: MenusRequest): Promise<MenusRequest> => {
   try {
      const res = await Http.post<Response<MenusResponse>>(
         MENU.CreateMenu(), 
         payload,
         {
            headers: {
               "Content-Type": "application/json",
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
      console.error('Claim Error:', error);
      throw error;
   }
};
