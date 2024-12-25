import { LoaderComponent } from "@/components/common/LoaderComponent";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { CreateMenuCategoryRequest, DeleteMenuCategoryRequest } from "@/request/menu-category";
import { useCreateMenuCategory } from "@/usecase/manage-category/use-create-menu-category";
import { useDeleteMenuCategory } from "@/usecase/manage-category/use-delete-menu-category";
import { useGetMenuCategories } from "@/usecase/manage-category/use-get-menu-categories";
import { useGetMenuOutsideCategories } from "@/usecase/manage-category/use-get-menu-outside-categories";
import { MinusCircle, PlusCircle } from "lucide-react";
import toast from "react-hot-toast";

interface MenuCategoryEditorProps {
    categoryId: string;
    open: boolean;
    onClose: () => void;
    onEdited: () => void;
}
 
export const MenuCategoryEditor: React.FC<MenuCategoryEditorProps> = ({ categoryId, onClose, open, onEdited }) => {
    const { data: menu, isLoading: isMenuLoading, refetch: menuRefetch } = useGetMenuCategories(categoryId);
    const { data: outsideMenu, isLoading: isOutsideMenuLoading, refetch: outsideMenuRefetch } = useGetMenuOutsideCategories(categoryId);

   const { mutate: createMenuCategory } = useCreateMenuCategory();
   const { mutate: deleteMenuCategory } = useDeleteMenuCategory();

    async function addToCategory(menuId: string) {
        const payload: CreateMenuCategoryRequest = { menu_id: menuId, category_id: categoryId };
        createMenuCategory(payload, {
            onSuccess: () => {
               toast.success('Success to Create Menu Category');
               menuRefetch();
               outsideMenuRefetch();
               onEdited();
            },
            onError: (error) => {
               toast.error('Failed to create category')
               console.error("Failed to create category:", error);
            },
        });
    }
    
    async function removeFromCategory(menuId: string) {
        const payload: DeleteMenuCategoryRequest = { menu_id: menuId, category_id: categoryId };
        deleteMenuCategory(payload, {
            onSuccess: () => {
               toast.success('Success to Remove Menu From Category');
               menuRefetch();
               outsideMenuRefetch();
               onEdited();
            },
            onError: (error) => {
               toast.error('Failed to create category')
               console.error("Failed to create category:", error);
            },
        });
    }

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent aria-describedby="Menus" aria-description="Menus" className="text-center max-w-7xl">
                <DialogTitle aria-describedby="Menu Category" aria-description="Menu Category" className="font-bold"></DialogTitle>
                <div className="flex w-full h-full relative z-0" style={{ maxHeight: '75vh', overflow: 'visible' }}>
                    <div className="w-full h-full border-r-4 flex flex-col z-0 relative">
                        <div className="w-full pb-2 border-b font-bold">Added</div>
                        <div className="w-full overflow-auto flex-grow relative z-0">
                            {isMenuLoading && <center className="h-full w-full py-10"><LoaderComponent /></center>}
                            {(menu || []).map((m, i) => (
                                <div key={i} className="bg-white p-2 border flex items-center w-full">
                                    <div>
                                        <img draggable={false} src={m.img} className="w-10 h-10 rounded-lg" alt="" />
                                    </div>
                                    <div className="font-semibold px-3 truncate w-0 flex-grow text-left">{m.title}</div>
                                    <div>
                                        <Button onClick={() => removeFromCategory(m.id)} title="Remove From Category" className="hover:bg-black hover:text-white"><MinusCircle /></Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="w-full h-full flex flex-col relative z-0">
                        <div className="w-full pb-2 border-b font-bold">Not Added</div>
                        <div className="w-full overflow-y-auto overflow-x-hidden flex-grow relative z-0">
                            {isOutsideMenuLoading && <center className="h-full w-full py-10"><LoaderComponent /></center>}
                            {(outsideMenu || []).map((m, i) => (
                                <div key={i} className="bg-white p-2 border flex items-center w-full">
                                    <div>
                                        <img draggable={false} src={m.img} className="w-10 h-10 rounded-lg" alt="" />
                                    </div>
                                    <div className="font-semibold px-3 truncate w-0 flex-grow text-left">{m.title}</div>
                                    <div>
                                        <Button onClick={() => addToCategory(m.id)} title="Add To Category" className="hover:bg-black hover:text-white"><PlusCircle /></Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}