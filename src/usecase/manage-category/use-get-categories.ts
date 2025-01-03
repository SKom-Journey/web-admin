import { useQuery } from "react-query"
import { getCategories } from "@/repository/manage-category/get-categories";
import { CategoryResponse } from "@/response/category";

export const useGetCategories = () => {
   return useQuery<CategoryResponse[]>({
      queryKey: ['get-categories'],
      queryFn: getCategoriesData,
      retry: 1
  });
}

const getCategoriesData = async (): Promise<CategoryResponse[]> => {
   const data = await getCategories()
   return data;
}