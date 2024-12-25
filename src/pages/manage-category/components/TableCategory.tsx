import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
 } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Check, Edit2, Trash2, X } from "lucide-react";
import { CategoryResponse } from "@/response/category";
import { Input } from "@/components/ui/input";
import { FormEvent } from "react";
 
 interface TableCategoryProps {
    data: CategoryResponse[];
    onDelete: (id: string) => void;
    onUpdate: (e: FormEvent<HTMLFormElement>) => void;
    editSelectedCategoryId: string | null;
    setSelectedCategoryId: (id: string) => void;
    setEditedCategoryName: (id: string) => void;
    setEditSelectedCategoryId: (id: string | null) => void;
 }
 
 export const TableCategory: React.FC<TableCategoryProps> = ({ data, onDelete, onUpdate, setEditSelectedCategoryId, editSelectedCategoryId, setEditedCategoryName, setSelectedCategoryId }) => {
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
                  {
                     editSelectedCategoryId == category.id && <>
                        <TableCell colSpan={3}>
                           <form onSubmit={(e) => onUpdate(e)} className="flex">
                              <div className="w-full">
                                 <Input autoFocus defaultValue={category.name} onChange={(e) => setEditedCategoryName(e.currentTarget.value)} />
                              </div>

                              <div className="w-full text-right">
                                 <Button
                                    className="bg-transparent hover:bg-red-100 p-2 shadow-none"
                                 >
                                    <Check className="text-yellow-600" />
                                 </Button>
                                 <Button
                                    className="bg-transparent hover:bg-red-100 p-2 shadow-none"
                                    onClick={() => setEditSelectedCategoryId(null)}
                                 >
                                    <X className="text-red-600" />
                                 </Button>
                              </div>
                           </form>
                        </TableCell>
                     </>
                  }

                  {
                     editSelectedCategoryId != category.id && <>
                        <TableCell>{category.name}</TableCell>
                        <TableCell>
                           <a href="#" className="underline text-blue-400" onClick={() => setSelectedCategoryId(category.id)}>
                              {category.total_menu}
                           </a>
                        </TableCell>
                        <TableCell className="text-right">
                           <Button
                              className="bg-transparent hover:bg-red-100 p-2 shadow-none"
                              onClick={() => setEditSelectedCategoryId(category.id)}
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
                     </>
                  }
               </TableRow>
            ))}
         </TableBody>
       </Table>
    );
 }