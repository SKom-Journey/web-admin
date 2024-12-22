import { useGetMenus } from "@/usecase/manage-menu/use-get-menus";
import { TableMenu } from "./components/TableMenu";
import { LoaderComponent } from "@/components/common/LoaderComponent";
import { useDeleteMenu } from "@/usecase/manage-menu/use-delete-menus";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { HandPlatter } from "lucide-react";
import { useCreateMenu } from "@/usecase/manage-menu/use-create-menu";
import { MenusRequest } from "@/request/menu";
import { InputFieldMenus } from "./components/InputFieldMenu";
import { useMenuStore } from "@/store/menu-store ";

export function ManageMenuPage() {
   const { data, isLoading, isError, refetch } = useGetMenus();
   const { showField, toggleShowField, title, img, price, description, resetForm } = useMenuStore(state => state);

   const { mutate: deleteMenu } = useDeleteMenu();
   const { mutate: createMenu } = useCreateMenu();

   if (isLoading) return <LoaderComponent />;
   if (isError) return <p>Error fetching Menu data.</p>;

   const handleCreate = () => {
      if (title && img && price && description) {
         const payload: MenusRequest = {
            title,
            img,
            price: Number(price),
            description
         };

         createMenu(payload, {
            onSuccess: () => {
               toast.success('Success to Create Menu');
               refetch();
               toggleShowField();
               resetForm();
            },
            onError: (error) => {
               toast.error('Failed to create Menu');
               console.error("Failed to create Menu:", error);
            },
         });
      } else {
         toast.error('All fields are required');
         console.error("All fields are required.");
      }
   };

   const handleDelete = (id: string) => {
      deleteMenu(id, {
         onSuccess: () => {
            toast.success('Success to delete Menu')
            refetch();
         },
         onError: (error) => {
            toast.error('Failed to delete Menu')
            console.error("Failed to delete Menu:", error);
         },
      });
   };

   return (
      <>
         <div className="flex justify-end items-center mb-3">
            <Button className="text-center bg-primary hover:bg-red-700" onClick={toggleShowField}>
               New Menu
               <HandPlatter />
            </Button>
         </div>
         {showField && (
            <InputFieldMenus onSubmit={handleCreate} />
         )}
         <div className="bg-white p-4 shadow rounded-lg">
            <TableMenu
               data={data ?? []}
               onDelete={handleDelete}
            />
         </div>
      </>
   );
}