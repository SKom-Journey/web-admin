import { useQuery } from "react-query"
import { QrResponse } from "@/response/qr";
import { getQrs } from "@/repository/manage-qr/get-qrs";

export const useGetQrs = () => {
   return useQuery<QrResponse>({
      queryKey: ['get-qrs'],
      queryFn: getQrsData,
      retry: 1
  });
}

const getQrsData = async (): Promise<QrResponse> => {
   const data = await getQrs()
   return data;
}