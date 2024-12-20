import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
 } from "@/components/ui/table";
 import { Button } from "@/components/ui/button";
 import { Edit2, Trash2 } from "lucide-react";
import { CategoryResponse } from "@/response/category";
 
 interface TableCategoryProps {
    data: CategoryResponse[];
    onDelete: (id: string) => void;
 }
 
 export const TableCategory: React.FC<TableCategoryProps> = ({ data, onDelete }) => {
    return (
       <Table>
          <TableHeader>
            <TableRow>
               <TableHead>
                  No.
               </TableHead>
               <TableHead>
                  Name
               </TableHead>
               <TableHead>
                  Total Menu Inside
               </TableHead>
               <TableHead className="text-right">
                  Actions
               </TableHead>
            </TableRow>
         </TableHeader>

         <TableBody>
            {data?.map((category, index) => (
               <TableRow key={category.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>{category.total_menu}</TableCell>
                  <TableCell className="text-right">
                     <Button
                        className="bg-transparent hover:bg-red-100 p-2 shadow-none"
                        onClick={() => onDelete(category.id)}
                     >
                        <Edit2 className="text-yellow-600" />
                     </Button>
                     <Button
                        className="bg-transparent hover:bg-red-100 p-2 shadow-none"
                        onClick={() => onDelete(category.id)}
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