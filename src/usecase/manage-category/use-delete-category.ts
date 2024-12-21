import { useMutation } from "react-query";
import { Response } from "@/response/common/response";
import { CategoryResponse } from "@/response/category";
import { deleteCategory } from "@/repository/manage-category/delete-category";

export const useDeleteCategory = () => {
   return useMutation<Response<CategoryResponse>, Error, string>({
      mutationKey: ["delete-category"],
      mutationFn: async (id: string) => {
         if (!id) throw new Error("ID is required to delete Category");
         return await deleteCategory(id);
      },
   });
};