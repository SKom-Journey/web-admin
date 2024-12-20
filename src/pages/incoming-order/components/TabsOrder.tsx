import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from "@/components/ui/tabs";
import { CardOrder } from "./CardOrder";
import { CardItems } from "./CardItems";
import { OrderResponse } from "@/response/order";
import { formatDate } from "@/utils/format-date";

interface TabsOrderProps {
   orders: OrderResponse[];
}

export const TabsOrder: React.FC<TabsOrderProps> = ({ orders }) => {
   return (
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
                        finishOrder={() => { }}
                     />
                  </TabsContent>
                  <TabsContent value="items">
                     {order.items.map((item) => (
                        <CardItems
                           key={item.id}
                           id={item.id}
                           name={item.name ?? ""}
                           note={item.note}
                           img={item?.detail.img ?? ""}
                           total={item.total}
                           price={item.price ?? 0}
                        />
                     ))}
                  </TabsContent>
               </Tabs>
            </div>
         ))}
      </div>
   );
}