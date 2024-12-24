import { useQuery } from "react-query"
import { MenusResponse } from "@/response/menus";
import { getMenuOutsideCategories } from "@/repository/manage-category/get-menu-outside-categories";

export const useGetMenuOutsideCategories = (categoryId: string) => {
   return useQuery<MenusResponse[]>({
      queryKey: ['get-menu-outside-categories', categoryId],
      queryFn: () => getMenuOutsideCategoriesData(categoryId),
      retry: 1
  });
}

const getMenuOutsideCategoriesData = async (categoryId: string): Promise<MenusResponse[]> => {
   const data = await getMenuOutsideCategories(categoryId)
   return data;
}