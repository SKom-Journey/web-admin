export interface OrderResponse {
   id: string; 
   created_at: string; 
   table_number: string; 
   items: ItemOrderResponse[]; 
   is_finished?: boolean; 
   user_id?: string; 
   user_name?: string; 
}

interface ItemOrderResponse {
   id: string; 
   note: string; 
   total: number; 
   name?: string; 
   price?: number; 
   detail: DetailOrderResponse
}

interface DetailOrderResponse {
   id: string;
   title: string;
   description: string;
   price: number;
   img: string;
}