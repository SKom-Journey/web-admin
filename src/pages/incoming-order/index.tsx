import { useGetOrders } from "@/usecase/incoming-order/use-get-orders";
import { TabsOrder } from "./components/TabsOrder";
import { LoaderComponent } from "@/components/common/LoaderComponent";

export function IncomingOrderPage() {
   const { data, isLoading, isError, refetch } = useGetOrders();

   if (isLoading) return <LoaderComponent />
   if (isError) return <p>Error fetching Order data.</p>;

   return <TabsOrder refetch={refetch} orders={data ?? []} />
}