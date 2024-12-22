import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMenuStore } from "@/store/menu-store ";
import { Check, X } from "lucide-react";

interface InputFieldMenusProps {
   onSubmit: () => void;
   onUpdate: () => void;
}

export const InputFieldMenus = ({ onSubmit, onUpdate }: InputFieldMenusProps) => {
   const {
      title,
      img,
      price,
      description,
      editMenu,
      setTitle,
      setImg,
      setPrice,
      setDescription,
      toggleShowField,
      clearEditMenu,
      resetForm
   } = useMenuStore((state) => state);

   const isEditMode = Boolean(editMenu);

   const handleCancel = () => {
      clearEditMenu();
      resetForm();
      toggleShowField();
   };

   return (
      <div className="bg-white mb-3 flex gap-2">
         <div className="grid grid-rows-2 gap-2 w-full">
            <div className="grid grid-cols-2 gap-2">
               <Input
                  placeholder="Input Title of Menu"
                  className="focus-visible:ring-none"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
               />
               <Input
                  placeholder="Input Img Url of Menu"
                  className="focus-visible:ring-none"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
               />
            </div>
            <div className="grid grid-cols-2 gap-2">
               <Input
                  placeholder="Input Price of Menu"
                  className="focus-visible:ring-none"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
               />
               <Input
                  placeholder="Input Description of Menu"
                  className="focus-visible:ring-none"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
               />
            </div>
            <div className="flex gap-1">
               <Button
                  className="bg-green-500 hover:bg-green-600 w-full"
                  onClick={isEditMode ? onUpdate : onSubmit}
               >
                  <Check />
               </Button>
               <Button className="bg-primary hover:bg-red-700 w-full" onClick={handleCancel}>
                  <X />
               </Button>
            </div>
         </div>
      </div>
   );
};