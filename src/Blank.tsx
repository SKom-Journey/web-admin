import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast"

function Blank() {
   return (
      <>
         <Toaster />
         <Outlet />
      </>
   )
}

export default Blank