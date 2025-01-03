import { useMutation } from "react-query";
import { CategoryRequest } from "@/request/category";
import { createCategory } from "@/repository/manage-category/create-category";

export const useCreateCategory = () =>{
   return useMutation((payload: CategoryRequest) => {
      return createCategory(payload)
   })
}