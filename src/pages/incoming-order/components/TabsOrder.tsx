import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from "@/components/ui/tabs"
import { CardOrder } from "./CardOrder"
import { CardItems } from "./CardItems"

export function TabsOrder() {
   return (
      <Tabs defaultValue="order" className="w-[400px]">
         <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="order">Order</TabsTrigger>
            <TabsTrigger value="items">Items</TabsTrigger>
         </TabsList>
         <TabsContent value="order">
            <CardOrder />
         </TabsContent>
         <TabsContent value="items">
            <CardItems />
         </TabsContent>
      </Tabs>
   )
}