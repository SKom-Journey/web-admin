import { useMutation } from "react-query";
import { UpdateCategoryRequest } from "@/request/category";
import { updateCategory } from "@/repository/manage-category/update-category";

export const useUpdateCategory = () =>{
   return useMutation((payload: UpdateCategoryRequest) => {
      return updateCategory(payload)
   })
}