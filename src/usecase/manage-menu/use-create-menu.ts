import { useMutation } from "react-query";
import { MenusRequest } from "@/request/menu";
import { createMenu } from "@/repository/manage-menu/create-menu";

export const useCreateMenu = () =>{
   return useMutation((payload: MenusRequest) => {
      return createMenu(payload)
   })
}