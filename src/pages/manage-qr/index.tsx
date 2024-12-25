import { useGetQrs } from "@/usecase/manage-qr/use-get-qrs";
import { TableQr } from "./components/TableQr";
import { DialogQr } from "./components/DialogQr";
import { useDeleteQr } from "@/usecase/manage-qr/use-delete.qr";
import { Button } from "@/components/ui/button";
import { Check, QrCode, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useCreateQr } from "@/usecase/manage-qr/use-create-qr";
import { QrRequest } from "@/request/qr";
import { useQrStore } from "@/store/qr-store";
import { LoaderComponent } from "@/components/common/LoaderComponent";
import toast from "react-hot-toast";

export function ManageQrPage() {
   const { data, isLoading, isError, refetch } = useGetQrs();
   const {
      tableNumber,
      setTableNumber,
      showField,
      toggleShowField,
      qrDetails,
      setQrDetails
   } = useQrStore(state => state);

   const { mutate: deleteQr } = useDeleteQr();
   const { mutate: createQr } = useCreateQr();

   if (isLoading) return <LoaderComponent />
   if (isError) return <p>Error fetching QR data.</p>;

   const handlePrint = (tableNumber: string) => {
      const qrDetail = data?.find((qr) => qr.table_number === tableNumber);
      if (qrDetail) {
         setQrDetails(qrDetail.table_number);
      } else {
         console.error("QR detail not found for table number:", tableNumber);
      }
   };

   const handleDelete = (id: string) => {
      deleteQr(id, {
         onSuccess: () => {
            toast.success('Success to delete QR')
            refetch();
         },
         onError: (error) => {
            toast.error('Failed to delete QR')
            console.error("Failed to delete QR:", error);
         },
      });
   };

   const handleCreate = () => {
      if (tableNumber) {
         const payload: QrRequest = { table_number: tableNumber };
         createQr(payload, {
            onSuccess: () => {
               toast.success('Success to Create Qr')
               refetch();
               toggleShowField();
               setTableNumber('');
            },
            onError: (error) => {
               toast.error('Failed to create QR')
               console.error("Failed to create QR:", error);
            },
         });
      } else {
         toast.error('Table number is required')
         console.error("Table number is required.");
      }
   };

   return (
      <>
         <div className="flex justify-end items-center mb-3">
            <Button className="text-center bg-primary hover:bg-red-700" onClick={toggleShowField}>
               New QR
               <QrCode />
            </Button>
         </div>
         {showField && (
            <div className="bg-white mb-3 flex gap-2">
               <Input
                  autoFocus
                  placeholder="Input Number of Table"
                  className="focus-visible:ring-none"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
               />
               <div className="flex gap-1">
                  <Button className="bg-green-500 hover:bg-green-600" onClick={handleCreate}>
                     <Check />
                  </Button>
                  <Button className="bg-primary hover:bg-red-700" onClick={toggleShowField}>
                     <X />
                  </Button>
               </div>
            </div>
         )}
         <div className="bg-white p-4 shadow rounded-lg">
            <TableQr
               data={data ?? []}
               onPrint={handlePrint}
               onDelete={handleDelete}
            />
            {qrDetails && (
               <DialogQr
                  table_number={qrDetails}
                  open={Boolean(qrDetails)}
                  onClose={() => setQrDetails(null)}
               />
            )}
         </div>
      </>
   );
}