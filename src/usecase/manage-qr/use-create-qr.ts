import { useMutation } from "react-query";
import { QrRequest } from "@/request/qr";
import { createQr } from "@/repository/manage-qr/create-qr";

export const useCreateQr = () =>{
   return useMutation((payload: QrRequest) => {
      return createQr(payload)
   })
}