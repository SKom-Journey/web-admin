export interface OrderEntity {
   id: string; 
   created_at: string; 
   table_number: string; 
   items: ItemEntity[]; 
   is_finished?: boolean; 
   user_id?: string; 
   user_name?: string; 
}

interface ItemEntity {
   id: string; 
   note: string; 
   total: number; 
   name?: string; 
   price?: number; 
}