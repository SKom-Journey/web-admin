import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Clock, Table, User } from "lucide-react"
import RyomuLogo from "@/assets/logo/ryomu-logo.png"
import { Button } from "@/components/ui/button"

interface CardOrderProps {
   user_name: string;
   time_order: string;
   table_number: string;
   finishOrder: () => void;
}

export const CardOrder: React.FC<CardOrderProps> = ({ user_name, time_order, table_number, finishOrder }) => {
   return (
      <Card>
         <CardHeader>
            <div className="flex items-center gap-2">
               <img src={RyomuLogo} alt="avatar" className="w-12" />
               <div>
                  <CardTitle>Customer Name</CardTitle>
                  <div className="flex items-center gap-1">
                     <User size={14} className="text-gray-600" />
                     <CardDescription className="text-gray-600 text-md">{user_name}</CardDescription>
                  </div>
               </div>
            </div>
         </CardHeader>
         <CardContent className="space-y-2">
            <div>
               <Label>Time Order</Label>
               <div className="flex items-center gap-1">
                  <Clock size={14} className="text-green-500" />
                  <p className="text-sm text-green-500">{time_order}</p>
               </div>
            </div>
            <div>
               <Label>Table Number</Label>
               <div className="flex items-center gap-1">
                  <Table size={14} className="text-green-500" />
                  <p className="text-sm text-green-500">{table_number}</p>
               </div>
            </div>
         </CardContent>
         <CardFooter>
            <Button className="w-full hover:bg-red-700" onClick={finishOrder}>Finish Order</Button>
         </CardFooter>
      </Card>
   )
}