import { ChartBarStacked, Check, X } from "lucide-react";
import { TableCategory } from "./components/TableCategory";
import { useGetCategories } from "@/usecase/manage-category/use-get-categories";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { useCategoryStore } from "@/store/category-store";
import { useCreateCategory } from "@/usecase/manage-category/use-create-category";
import { CategoryRequest, UpdateCategoryRequest } from "@/request/category";
import { useDeleteCategory } from "@/usecase/manage-category/use-delete-category";
import { FormEvent } from "react";
import { useUpdateCategory } from "@/usecase/manage-category/use-update-category";
import { MenuCategoryEditor } from "./components/MenuCategoryEditor";
import { useGetMenuCategories } from "@/usecase/manage-category/use-get-menu-categories";

export function ManageCategoryPage() {
   const { data, isLoading, isError, refetch } = useGetCategories();
   const {
         categoryName,
         setCategoryName,
         showField,
         toggleShowField,
         editedCategoryName,
         setEditedCategoryName,
         editSelectedCategoryId,
         selectedCategoryId,
         setSelectedCategoryId,
         setEditSelectedCategoryId
      } = useCategoryStore(state => state);

   const handleDelete = (id: string) => {
      deleteCategory(id, {
         onSuccess: () => {
            toast.success('Success to delete category')
            refetch();
         },
         onError: (error) => {
            toast.error('Failed to delete category')
            console.error("Failed to delete category:", error);
         },
      });
   };
   
   const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(editSelectedCategoryId != null) {
         const payload: UpdateCategoryRequest = { name: editedCategoryName, id: editSelectedCategoryId };
         updateCategory(payload, {
            onSuccess: () => {
               toast.success('Success to update category')
               refetch();
               setEditSelectedCategoryId(null);
            },
            onError: (error) => {
               toast.error('Failed to update category')
               console.error("Failed to update category:", error);
            },
         });
      }
   };

   const { mutate: updateCategory } = useUpdateCategory();
   const { mutate: deleteCategory } = useDeleteCategory();
   const { mutate: createCategory } = useCreateCategory();

   const handleCreate = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (categoryName) {
         const payload: CategoryRequest = { name: categoryName };
         createCategory(payload, {
            onSuccess: () => {
               toast.success('Success to Create category')
               refetch();
               toggleShowField();
               setCategoryName('');
            },
            onError: (error) => {
               toast.error('Failed to create category')
               console.error("Failed to create category:", error);
            },
         });
      } else {
         toast.error('Table number is required')
         console.error("Table number is required.");
      }
   };

   if (isLoading) return <p>Loading...</p>;
   if (isError) return <p>Error fetching Category data.</p>;

   return <>
      <div className="flex justify-end items-center mb-3">
         <Button className="text-center bg-primary hover:bg-red-700" onClick={toggleShowField}>
            New Category
            <ChartBarStacked />
         </Button>
      </div>
      {showField && (
         <form onSubmit={(e) => handleCreate(e)} className="bg-white mb-3 flex gap-2">
            <Input
               autoFocus
               required
               placeholder="Input Number of Table"
               className="focus-visible:ring-none"
               value={categoryName}
               onChange={(e) => setCategoryName(e.target.value)}
            />
            <div className="flex gap-1">
               <Button className="bg-green-500 hover:bg-green-600" type="submit">
                  <Check />
               </Button>
               <Button className="bg-primary hover:bg-red-700" type="reset" onClick={toggleShowField}>
                  <X />
               </Button>
            </div>
         </form>
      )}
      <div className="bg-white p-4 shadow rounded-lg">
         <TableCategory setSelectedCategoryId={setSelectedCategoryId} setEditedCategoryName={setEditedCategoryName} editSelectedCategoryId={editSelectedCategoryId} setEditSelectedCategoryId={setEditSelectedCategoryId} onUpdate={handleUpdate} data={data ?? []} onDelete={handleDelete} />
      </div>

      {
         selectedCategoryId != null && <MenuCategoryEditor categoryId={selectedCategoryId} onClose={() => setSelectedCategoryId(null)} open={selectedCategoryId != null} />
      }
   </>
}