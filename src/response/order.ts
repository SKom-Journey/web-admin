export interface OrderResponse {
   id: string; 
   created_at: string; 
   table_number: string; 
   items: ItemResponse[]; 
   is_finished?: boolean; 
   user_id?: string; 
   user_name?: string; 
}

interface ItemResponse {
   id: string; 
   note: string; 
   total: number; 
   name?: string; 
   price?: number; 
}