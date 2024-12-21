import { AppSidebar } from "@/components/base/sidebar/Sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Navbar } from "@/components/base/navbar/Navbar"
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast"

function Dashboard() {
   return (
      <SidebarProvider className="bg-white">
         <Toaster />
         <AppSidebar />
         <SidebarInset>
            <Navbar />
            <div className="flex flex-1 flex-col gap-4 p-3">
               <div className="min-h-[100vh] flex-1 md:min-h-min">
                  <Outlet />
               </div>
            </div>
         </SidebarInset>
      </SidebarProvider>
   )
}

export default Dashboard