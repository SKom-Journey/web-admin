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

export const CardOrder = () => {
   return (
      <Card>
         <CardHeader>
            <div className="flex items-center gap-2">
               <img src={RyomuLogo} alt="avatar" className="w-12" />
               <div>
                  <CardTitle>Customer Name</CardTitle>
                  <div className="flex items-center gap-1">
                     <User size={14} className="text-gray-600" />
                     <CardDescription className="text-gray-600 text-md">mhdusop</CardDescription>
                  </div>
               </div>
            </div>
         </CardHeader>
         <CardContent className="space-y-2">
            <div>
               <Label>Time Order</Label>
               <div className="flex items-center gap-1">
                  <Clock size={14} className="text-green-500" />
                  <p className="text-sm text-green-500">22:37:01</p>
               </div>
            </div>
            <div>
               <Label>Table Number</Label>
               <div className="flex items-center gap-1">
                  <Table size={14} className="text-green-500" />
                  <p className="text-sm text-green-500">1</p>
               </div>
            </div>
         </CardContent>
         <CardFooter>
            <Button className="w-full hover:bg-red-700">Finish Order</Button>
         </CardFooter>
      </Card>
   )
}