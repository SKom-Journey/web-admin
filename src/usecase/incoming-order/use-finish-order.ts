import { useMutation } from "react-query";
import { finishOrder } from "@/repository/incoming-order/finish-order";
import { FinishOrderRequest } from "@/request/order";

export const useFinishOrder = () =>{
   return useMutation((payload: FinishOrderRequest) => {
      return finishOrder(payload)
   })
}