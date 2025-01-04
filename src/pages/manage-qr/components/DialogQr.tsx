import {
   Dialog,
   DialogContent,
} from "@/components/ui/dialog";
import getMenuUrl from "@/utils/get-menu-url";
import { QRCode } from "react-qrcode-logo";
import RyomuLogo from "@/assets/logo/ryomu-logo.png";
import { Button } from "@/components/ui/button";
import { PrinterIcon } from "lucide-react";
import { useRef } from "react";

interface DialogQrProps {
   table_number: string;
   open: boolean;
   onClose: () => void;
}

export const DialogQr: React.FC<DialogQrProps> = ({ table_number, open, onClose }) => {
   const qrRef = useRef<HTMLDivElement>(null);

   const handlePrint = () => {
      const printContent = qrRef.current;
      if (printContent) {
         const printWindow = window.open("", "_blank");
         if (printWindow) {
            printWindow.document.open();
            printWindow.document.write(`
               <html>
                  <head>
                     <title>Print QR Code</title>
                     <style>
                        * { font-family: 'Open Sans', sans-serif; }
                        body { margin: 0; padding: 20px; text-align: center; max-height: 700px; max-width: 700px }
                        .text-3xl { font-size: 3rem; font-weight: bold; margin-bottom: 20px; }
                     </style>
                  </head>
                  <body>
                     ${printContent.innerHTML}
                  </body>
               </html>
            `);

            const originalCanvas = printContent.querySelector("canvas");
            const printCanvas = printWindow.document.querySelector("canvas");

            if (originalCanvas && printCanvas) {
               const context = printCanvas.getContext("2d");
               if (context) {
                  context.drawImage(originalCanvas, 0, 0);
               }
            }

            printWindow.document.close();
            printWindow.focus();
            printWindow.print();
            printWindow.close();
         }
      }
   };

   return (
      <Dialog open={open} onOpenChange={onClose}>
         <DialogContent className="text-center flex flex-col">
            <div ref={qrRef} className="bg-white" id="print">
               <div className="text-3xl text-center font-bold my-5">
                  Order Here - #{table_number}
               </div>
               <QRCode
                  logoImage={RyomuLogo}
                  size={600}
                  style={{ width: "100%", height: "100%" }}
                  value={getMenuUrl(table_number)}
                  bgColor="white"
               />
            </div>
            <div className="mt-4">
               <Button className="w-full hover:text-black" onClick={handlePrint}>
                  <PrinterIcon /> Print
               </Button>
            </div>
         </DialogContent>
      </Dialog>
   );
};
