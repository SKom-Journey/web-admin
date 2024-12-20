import { useGetQrs } from "@/usecase/manage-qr/use-get-qrs";
import { TableQr } from "./components/TableQr";
import { useState } from "react";
import { QrResponse } from "@/response/qr";

export function ManageQrPage() {
   const { data, isLoading, isError } = useGetQrs();
   const [qrDetails, setQrDetails] = useState<QrResponse | null>(null);

   if (isLoading) return <p>Loading...</p>;
   if (isError) return <p>Error fetching QR data.</p>;

   const handlePrint = (tableNumber) => {
      const qrDetail = data?.find((qr) => qr.table_number === tableNumber);

      if (qrDetail) {
         setQrDetails(qrDetail);
         alert(qrDetails)
      } else {
         console.error("QR detail not found for table number:", tableNumber);
      }
   };

   return <TableQr data={data ?? []} onPrint={handlePrint} onDelete={() => { }} />;
}