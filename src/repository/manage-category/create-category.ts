import { Http } from "@/config/http";
import { Response } from "@/response/common/response";
import { CATEGORY } from "@/api/category";
import { CategoryRequest } from "@/request/category";

export const createCategory = async (payload: CategoryRequest): Promise<CategoryRequest> => {
   try {
      const res = await Http.post<Response<CategoryRequest>>(
         CATEGORY.CreateCategory(), 
         payload,
         {
            headers: {
               "Content-Type": "application/json",
            }
         }
      );

      const data: CategoryRequest = {
         name: res.data.data.name
      };

      return data;
   } catch (error) {
      console.error('Claim Error:', error);
      throw error;
   }
};
