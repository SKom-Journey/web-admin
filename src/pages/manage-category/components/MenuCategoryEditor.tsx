import { LoaderComponent } from "@/components/common/LoaderComponent";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useGetMenuCategories } from "@/usecase/manage-category/use-get-menu-categories";
import { useGetMenuOutsideCategories } from "@/usecase/manage-category/use-get-menu-outside-categories";
import { useState } from "react";
import Draggable from 'react-draggable';

interface MenuCategoryEditorProps {
    categoryId: string;
    open: boolean;
    onClose: () => void;
}
 
export const MenuCategoryEditor: React.FC<MenuCategoryEditorProps> = ({ categoryId, onClose, open }) => {
   const { data: menu, isLoading: isMenuLoading, isError: isMenuError, refetch: menuRefetch } = useGetMenuCategories(categoryId);
   const { data: outsideMenu, isLoading: isOutsideMenuLoading, isError: isOutsideMenuError, refetch: outsideMenuRefetch } = useGetMenuOutsideCategories(categoryId);

   const [positions, setPositions] = useState(
        outsideMenu?.map(() => ({ x: 0, y: 0 })) // Initialize positions for each item
    );

    const handleStop = (e, data, index) => {
        if(positions) {
            // Reset the position to the original place
            const updatedPositions = [...positions];
            updatedPositions[index] = { x: 0, y: 0 }; // Reset position to {0, 0}
            setPositions(updatedPositions);
        }
    };

   if (categoryId == null) return <></>;

   return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="text-center max-w-7xl">
                <div className="flex w-full h-full relative z-0" style={{maxHeight: '75vh'}}>
                    {
                        isMenuLoading && <LoaderComponent />
                    }
                    {
                        !isMenuLoading && 
                            <div className="w-full h-full border-r-4 flex flex-col z-0 relative">
                                <div className="w-full pb-2 border-b font-bold">
                                    Added
                                </div>
                                
                                <div className="w-full overflow-auto flex-grow relative z-0">
                                    {
                                        (menu || []).map((m, i) => <div className="py-2 px-2 border cursor-pointer" draggable key={i}>{m.title}</div>)
                                    }
                                </div>
                            </div>
                    }

                    {
                        isOutsideMenuLoading && <LoaderComponent />
                    }

                    {
                        !isOutsideMenuLoading && 
                            <div className="w-full h-full flex flex-col relative z-0"> 
                                <div className="w-full pb-2 border-b font-bold">
                                    Not Added
                                </div>
                                
                                <div className="w-full overflow-y-auto overflow-x-hidden flex-grow relative z-0">
                                    {
                                        positions && (outsideMenu || []).map((m, i) => 
                                            <Draggable position={positions[i]} defaultClassNameDragging="shadow-lg z-50" defaultClassName="relative" onStop={(e, data) => handleStop(e, data, i)} key={i}>
                                                <div className="bg-white p-2 border cursor-pointer flex items-center w-full">
                                                    <div>
                                                        <img src={m.img} className="w-10 h-10 rounded-lg" alt="" />
                                                    </div>

                                                    <div className="font-semibold px-3 truncate w-0 flex-grow text-left">
                                                        {m.title}
                                                    </div>
                                                </div>
                                            </Draggable>
                                        )
                                    }
                                </div>
                            </div>
                    }
                </div>
            </DialogContent>
        </Dialog>
    );
}