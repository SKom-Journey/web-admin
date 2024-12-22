import { Button } from "@/components/ui/button"
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table"
import { Edit2, Trash2 } from "lucide-react"


export const TableMenu = () => {
   return (
      <Table>
         <TableHeader>
            <TableRow>
               <TableHead>No.</TableHead>
               <TableHead>Image</TableHead>
               <TableHead>Name</TableHead>
               <TableHead>Price</TableHead>
               <TableHead>Description</TableHead>
               <TableHead className="text-right">Actions</TableHead>
            </TableRow>
         </TableHeader>
         <TableBody>
            <TableRow>
               <TableCell className="font-medium">1</TableCell>
               <TableCell>
                  <img src="" alt="" />
               </TableCell>
               <TableCell>Credit Card</TableCell>
               <TableCell>Credit Card</TableCell>
               <TableCell>Credit Card</TableCell>
               <TableCell className="text-right">
                  <Button className="bg-transparent hover:bg-yellow-100 p-2 shadow-none" onClick={() => { }}>
                     <Edit2 className="text-yellow-600" />
                  </Button>
                  <Button className="bg-transparent hover:bg-red-100 p-2 shadow-none" onClick={() => { }}>
                     <Trash2 className="text-red-600" />
                  </Button>
               </TableCell>
            </TableRow>
         </TableBody>
      </Table>
   )
}