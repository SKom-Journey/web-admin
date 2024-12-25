import { useMutation } from "react-query";
import { deleteMenuCategory } from "@/repository/manage-category/delete-menu-category";
import { DeleteMenuCategoryRequest } from "@/request/menu-category";

export const useDeleteMenuCategory = () =>{
   return useMutation((payload: DeleteMenuCategoryRequest) => {
      return deleteMenuCategory(payload)
   })
}