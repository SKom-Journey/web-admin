import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Printer, Trash2 } from "lucide-react";

export const TableQr = ({ data }) => {
   return (
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
                     <Button
                        className="bg-transparent hover:bg-green-100 p-2 shadow-none"
                        onClick={() => console.log(`Printing QR for table ${qr.table_number}`)}
                     >
                        <Printer className="text-green-600" />
                     </Button>
                     <Button
                        className="bg-transparent hover:bg-red-100 p-2 shadow-none"
                        onClick={() => console.log(`Deleting QR for table ${qr.table_number}`)}
                     >
                        <Trash2 className="text-red-600" />
                     </Button>
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
}