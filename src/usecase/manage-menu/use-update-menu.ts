import { useMutation } from "react-query";
import { MenusRequest } from "@/request/menu";
import { updateMenu } from "@/repository/manage-menu/update-menu";

export const useUpdateMenu = (menu_id: string) =>{
   return useMutation((payload: MenusRequest) => {
      return updateMenu(payload, menu_id)
   })
}