import Lottie from "lottie-react";
import LogoutAnimation from "@/assets/lottie/logout.json";

export const LogoutPage = () => {
   return (
      <div className="h-screen flex flex-col gap-3 items-center justify-center">
         <Lottie animationData={LogoutAnimation} className="w-1/4" loop={true} />
         <div className="font-bold text-2xl">
            Logging You Out, PLease Wait...
         </div>
      </div>
   )
}