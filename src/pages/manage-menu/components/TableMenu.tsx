import { Button } from "@/components/ui/button"
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table"
import { MenusResponse } from "@/response/menus"
import { Edit2, Trash2 } from "lucide-react"

interface TableMenuProps {
   data: MenusResponse[]
   onDelete: (id: string) => void
   onEdit: (menu: MenusResponse) => void
}

export const TableMenu: React.FC<TableMenuProps> = ({ data, onDelete, onEdit }) => {
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
            {data?.map((menu, index) => (
               <TableRow key={index}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell><img src={menu.img || ""} alt={menu.title} className="w-16 h-16 object-cover rounded-lg" /></TableCell>
                  <TableCell>{menu.title}</TableCell>
                  <TableCell>Rp {menu.price}</TableCell>
                  <TableCell>{menu.description}</TableCell>
                  <TableCell className="text-right">
                     <Button className="bg-transparent hover:bg-yellow-100 p-2 shadow-none" onClick={() => onEdit(menu)}>
                        <Edit2 className="text-yellow-600" />
                     </Button>
                     <Button className="bg-transparent hover:bg-red-100 p-2 shadow-none" onClick={() => onDelete(menu.id)}>
                        <Trash2 className="text-red-600" />
                     </Button>
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   )
}