import { useMutation } from "react-query";
import { deleteMenu } from "@/repository/manage-menu/delete-menu";

export const useDeleteMenu = () => {
   return useMutation({
      mutationKey: ["delete-menu"],
      mutationFn: async (id: string) => {
         if (!id) throw new Error("ID is required to delete Menu");
         return await deleteMenu(id);
      },
   });
};