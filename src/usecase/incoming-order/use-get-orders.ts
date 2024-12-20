import { useQuery } from "react-query"
import { OrderResponse } from "@/response/order";
import { getOrders } from "@/repository/incoming-order/get-orders";

export const useGetOrders = () => {
   return useQuery<OrderResponse[]>({
      queryKey: ['get-orders'],
      queryFn: getOrdersData,
      retry: 1
  });
}

const getOrdersData = async (): Promise<OrderResponse[]> => {
   const data = await getOrders()
   return data;
}