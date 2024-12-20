import { useMutation } from "react-query";
import { deleteQr } from "@/repository/manage-qr/delete-qr";
import { QrResponse } from "@/response/qr";
import { Response } from "@/response/common/response";

export const useDeleteQr = () => {
   return useMutation<Response<QrResponse>, Error, string>({
      mutationKey: ["delete-qr"],
      mutationFn: async (id: string) => {
         if (!id) throw new Error("ID is required to delete QR");
         return await deleteQr(id);
      },
   });
};