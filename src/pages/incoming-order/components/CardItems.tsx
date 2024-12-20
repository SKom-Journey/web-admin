import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle
} from "@/components/ui/card"
import RyomuLogo from "@/assets/logo/ryomu-logo.png"

export const CardItems = () => {
   return (
      <Card>
         <CardHeader>
            <CardTitle>All Items</CardTitle>
         </CardHeader>
         <CardContent className="divide-y divide-slate-100 px-6">
            <div className="flex items-center justify-between py-2">
               <div className="flex items-center gap-3">
                  <img src={RyomuLogo} alt="" className="rounded-full w-10" />
                  <div>
                     <CardTitle className="text-gray-700 font-medium">Items Name</CardTitle>
                     <CardDescription className="text-gray-600 text-xs">Note: -</CardDescription>
                  </div>
               </div>
               <div className="flex items-center gap-5">
                  <p className="text-gray-500 text-xs">1x</p>
                  <p className="text-green-500 font-medium">Rp 10000</p>
               </div>
            </div>
            <div className="flex items-center justify-between py-2">
               <div className="flex items-center gap-3">
                  <img src={RyomuLogo} alt="" className="rounded-full w-10" />
                  <div>
                     <CardTitle className="text-gray-700 font-medium">Items Name</CardTitle>
                     <CardDescription className="text-gray-600 text-xs">Note: -</CardDescription>
                  </div>
               </div>
               <div className="flex items-center gap-5">
                  <p className="text-gray-500 text-xs">1x</p>
                  <p className="text-green-500 font-medium">Rp 10000</p>
               </div>
            </div>
         </CardContent>
         <CardFooter className="border-t border-gray-100">
            <div className="flex items-center justify-between w-full mt-5">
               <p className="font-semibold">Total Price</p>
               <p className="text-green-500 font-semibold">Rp 20000</p>
            </div>
         </CardFooter>
      </Card>
   )
}