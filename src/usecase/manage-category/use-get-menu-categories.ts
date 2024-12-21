import { useQuery } from "react-query"
import { getMenuCategories } from "@/repository/manage-category/get-menu-categories";
import { MenusResponse } from "@/response/menus";

export const useGetMenuCategories = (categoryId: string) => {
   return useQuery<MenusResponse[]>({
      queryKey: ['get-menu-categories', categoryId],
      queryFn: () => getCategoriesData(categoryId),
      retry: 1
  });
}

const getCategoriesData = async (categoryId: string): Promise<MenusResponse[]> => {
   const data = await getMenuCategories(categoryId)
   return data;
}