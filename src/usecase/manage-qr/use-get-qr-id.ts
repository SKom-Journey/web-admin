import { useQuery } from "react-query"
import { QrResponse } from "@/response/qr";
import { getQrId } from "@/repository/manage-qr/get-qr-id";
import { Response } from "@/response/common/response";

export const useGetQrId = (table_number: string) => {
   return useQuery<Response<QrResponse>>({
      queryKey: ['get-qrs-id', table_number],
      queryFn: () => getQrIdData(table_number),
      retry: 1
  });
}

const getQrIdData = async (table_number: string): Promise<Response<QrResponse>> => {
   const data = await getQrId(table_number)
   return data as Response<QrResponse>;
}