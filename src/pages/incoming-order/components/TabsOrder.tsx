import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from "@/components/ui/tabs";
import { CardOrder } from "./CardOrder";
import { CardItems } from "./CardItems";
import { OrderResponse } from "@/response/order";
import ChefImg from "@/assets/svg/chef.svg";
import { formatDate } from "@/utils/format-date";
import { useFinishOrder } from "@/usecase/incoming-order/use-finish-order";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "react-query";

interface TabsOrderProps {
   orders: OrderResponse[];
   refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<OrderResponse[], unknown>>
}

export const TabsOrder: React.FC<TabsOrderProps> = ({ orders, refetch }) => {
   const { mutate: finishOrder } = useFinishOrder();
   
   async function finishOrderCallback(orderId: string) {
      finishOrder({
         id: orderId
      }, {
         onSuccess() {
            refetch();
         },
      });
   }

   return (
      <>
         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {orders.map((order) => (
               <div key={order.id} className="my-4">
                  <Tabs defaultValue="order" className="w-full">
                     <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="order">Order</TabsTrigger>
                        <TabsTrigger value="items">Items</TabsTrigger>
                     </TabsList>
                     <TabsContent value="order">
                        <CardOrder
                           user_name={order.user_name ?? ""}
                           time_order={formatDate(order.created_at)}
                           table_number={order.table_number || "N/A"}
                           finishOrder={() => finishOrderCallback(order.id)}
                        />
                     </TabsContent>
                     <TabsContent value="items">
                        <CardItems
                           orders={order.items}
                        />
                     </TabsContent>
                  </Tabs>
               </div>
            ))}
         </div>

         {
            orders.length === 0 && <center className="w-full mt-20">
               <img src={ChefImg} alt="" className="w-1/4" />
               <div className="mt-8 font-bold text-2xl">
                  No Orders For Now...
               </div>
            </center>
         }
      </>
   );
}