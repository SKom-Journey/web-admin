import { useQuery } from "react-query"
import { MenusResponse } from "@/response/menus";
import { getMenus } from "@/repository/manage-menu/get-menus";

export const useGetMenus = () => {
   return useQuery<MenusResponse[]>({
      queryKey: ['get-menus'],
      queryFn: getMenusData,
      retry: 1
  });
}

const getMenusData = async (): Promise<MenusResponse[]> => {
   const data = await getMenus()
   return data;
}