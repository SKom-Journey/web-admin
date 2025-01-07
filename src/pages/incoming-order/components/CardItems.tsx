import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle
} from "@/components/ui/card"
import RyomuLogo from "@/assets/logo/ryomu-logo.png"

interface CardItemsProps {
   orders: CardOrderItemsProps[];
}

interface CardOrderItemsProps {
   id: string; 
   note: string; 
   total: number; 
   name?: string; 
   price?: number; 
   detail: DetailOrder
}

interface DetailOrder {
   id: string;
   title: string;
   description: string;
   price: number;
   img: string;
}

export const CardItems: React.FC<CardItemsProps> = ({ orders }) => {
   return (
      <Card>
         <CardHeader>
            <CardTitle>All Items</CardTitle>
         </CardHeader>
         {
            orders.map((o, i) => 
               <CardContent key={i} className="divide-y divide-slate-100 px-6">
                  <div className="flex items-center justify-between py-2" key={o.id}>
                     <div className="flex items-center gap-3">
                        <img src={o.detail.img || RyomuLogo} alt="" className="rounded-full w-10" />
                        <div>
                           <CardTitle className="text-gray-700 font-medium">{o.name}</CardTitle>
                           <CardDescription className="text-gray-600 text-xs">Note: {o.note}</CardDescription>
                        </div>
                     </div>
                     <div className="flex items-center gap-5">
                        <p className="text-gray-500 text-xs">{o.total}x</p>
                        <p className="text-green-500 font-medium">Rp {o.price}</p>
                     </div>
                  </div>
               </CardContent>
            )
         }
         <CardFooter className="border-t border-gray-100">
            <div className="flex items-center justify-between w-full mt-5">
               <p className="font-semibold">Total Price</p>
               <p className="text-green-500 font-semibold">Rp {orders.reduce((sum, item) => {return sum + (item.price! * item.total)}, 0)}</p>
            </div>
         </CardFooter>
      </Card>
   )
}