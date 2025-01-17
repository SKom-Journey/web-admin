import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMenuStore } from "@/store/menu-store ";
import { Check, X } from "lucide-react";

interface InputFieldMenusProps {
   onSubmit: (formData: FormData) => void;
   onUpdate: (formData: FormData) => void;
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
   console.log(isEditMode);


   const handleCancel = () => {
      clearEditMenu();
      resetForm();
      toggleShowField();
   };

   const handleFormSubmit = () => {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("price", price as string);
      formData.append("description", description);

      if (typeof img === 'object' && img) {
         formData.append("img", img);
      }

      if (isEditMode) {
         onUpdate(formData);
      } else {
         onSubmit(formData);
      }
   };

   const imagePreviewUrl = img && typeof img !== 'string' ? URL.createObjectURL(img) : img;

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
               <div>
                  <Input
                     type="file"
                     className="focus-visible:ring-none"
                     onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) setImg(file);
                     }}
                  />
                  {imagePreviewUrl && (
                     <div className="col-span-2 mt-2">
                        <img
                           src={imagePreviewUrl}
                           alt="Menu Preview"
                           className="w-16 h-16 object-cover rounded border"
                        />
                     </div>
                  )}
               </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
               <Input
                  placeholder="Input Price of Menu"
                  className="focus-visible:ring-none"
                  type="number"
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
                  onClick={handleFormSubmit}
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