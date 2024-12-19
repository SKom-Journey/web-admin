import { useGetQrs } from "@/usecase/manage-qr/use-get-qrs";
import { TableQr } from "./components/TableQr";

export function ManageQrPage() {
   const { data, isLoading, isError } = useGetQrs();

   if (isLoading) return <p>Loading...</p>;
   if (isError) return <p>Error fetching QR data.</p>;

   return <TableQr data={data} />;
}