export const ORDER = {
   GetOrders: () => '/orders',
   CreateOrders: () => '/orders',
   FinishOrders: (order_id: string) => `/orders/${order_id}`,
}