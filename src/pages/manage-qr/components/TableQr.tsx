import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Printer, Trash2 } from "lucide-react";
import { QrResponse } from "@/response/qr";

interface TableQrProps {
   data: QrResponse[];
   onPrint: (tableNumber: string) => void;
   onDelete: (id: string) => void;
}

export const TableQr: React.FC<TableQrProps> = ({ data, onPrint, onDelete }) => {
   return (
      <>
         <Table>
            <TableHeader>
               <TableRow>
                  <TableHead className="w-[100px]">No</TableHead>
                  <TableHead>Table Number</TableHead>
                  <TableHead className="text-right">Action</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {data?.map((qr, index) => (
                  <TableRow key={qr.id}>
                     <TableCell className="font-medium">{index + 1}</TableCell>
                     <TableCell>{qr.table_number}</TableCell>
                     <TableCell className="text-right">
                        <Dialog>
                           <DialogTrigger asChild>
                              <Button
                                 className="bg-transparent hover:bg-green-100 p-2 shadow-none"
                                 onClick={() => onPrint(qr.table_number)}
                              >
                                 <Printer className="text-green-600" />
                              </Button>
                           </DialogTrigger>
                        </Dialog>
                        <Button
                           className="bg-transparent hover:bg-red-100 p-2 shadow-none"
                           onClick={() => onDelete(qr.id)}
                        >
                           <Trash2 className="text-red-600" />
                        </Button>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </>
   );
};