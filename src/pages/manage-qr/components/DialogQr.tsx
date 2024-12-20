import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
} from "@/components/ui/dialog";
import getMenuUrl from "@/utils/get-menu-url";
import QRCode from "react-qr-code";
import RyomuLogo from "@/assets/logo/ryomu-logo.png"

interface DialogQrProps {
   table_number: string;
   open: boolean;
   onClose: () => void;
}

export const DialogQr: React.FC<DialogQrProps> = ({ table_number, open, onClose }) => {
   return (
      <Dialog open={open} onOpenChange={onClose}>
         <DialogContent className="text-center flex flex-col">
            <DialogHeader className="flex flex-row items-center justify-between gap-2 my-2">
               <img className="w-14" src={RyomuLogo} alt={table_number} />
               <DialogTitle className="text-2xl text-center font-medium text-gray-700 !mt-0">Order Here - #{table_number}</DialogTitle>
            </DialogHeader>
            <QRCode
               size={100}
               style={{ height: "auto", maxWidth: "100%", width: "100%" }}
               value={getMenuUrl(table_number)}
               viewBox={`0 0 100 100`}
            />

         </DialogContent>
      </Dialog>
   );
};