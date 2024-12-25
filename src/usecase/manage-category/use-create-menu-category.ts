import { useMutation } from "react-query";
import { CreateMenuCategoryRequest } from "@/request/menu-category";
import { createMenuCategory } from "@/repository/manage-category/create-menu-category";

export const useCreateMenuCategory = () =>{
   return useMutation((payload: CreateMenuCategoryRequest) => {
      return createMenuCategory(payload)
   })
}