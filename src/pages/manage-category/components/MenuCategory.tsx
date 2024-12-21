import { LoaderComponent } from "@/components/common/LoaderComponent";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useGetMenuCategories } from "@/usecase/manage-category/use-get-menu-categories";

interface MenuCategoryProps {
    categoryId: string | null;
    open: boolean;
    onClose: () => void;
}
 
export const MenuCategory: React.FC<MenuCategoryProps> = ({ categoryId, onClose, open }) => {
   const { data, isLoading, isError, refetch } = useGetMenuCategories(categoryId ?? "");

   if (categoryId == null) return <></>;

   return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="text-center max-w-6xl">
                {
                    isLoading && <LoaderComponent />
                }

                {
                    !isLoading && <>
                        <div className="flex">
                            <div className="w-full">
                                Added
                            </div>
                            
                            <div className="w-full">
                                Not Added
                            </div>
                        </div>

                        <div className="flex">
                            <div className="w-full">
                                {
                                    (data || []).map((menu, i) => <div key={i}>{menu.title}</div>)
                                }
                            </div>
                            
                            <div className="w-full">
                                Not Added
                            </div>
                        </div>
                    </>
                }
            </DialogContent>
        </Dialog>
    );
}