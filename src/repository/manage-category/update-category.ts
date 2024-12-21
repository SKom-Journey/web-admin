import { Http } from "@/config/http";
import { Response } from "@/response/common/response";
import { CATEGORY } from "@/api/category";
import { UpdateCategoryRequest } from "@/request/category";

export const updateCategory = async (payload: UpdateCategoryRequest): Promise<UpdateCategoryRequest> => {
   try {
      const res = await Http.put<Response<UpdateCategoryRequest>>(
         CATEGORY.UpdateCategory(payload.id), 
         payload,
         {
            headers: {
               "Content-Type": "application/json",
            }
         }
      );

      const data: UpdateCategoryRequest = {
         name: res.data.data.name,
         id: res.data.data.id,
      };

      return data;
   } catch (error) {
      console.error('Claim Error:', error);
      throw error;
   }
};
