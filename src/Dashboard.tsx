import { AppSidebar } from "@/components/base/sidebar/Sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Navbar } from "@/components/base/navbar/Navbar"
import { Outlet } from "react-router-dom";

function Dashboard() {
   return (
      <SidebarProvider className="bg-white">
         <AppSidebar />
         <SidebarInset>
            <Navbar />
            <div className="flex flex-1 flex-col gap-4 p-3">
               <div className="min-h-[100vh] flex-1 rounded-xl bg-white shadow md:min-h-min p-4">
                  <Outlet />
               </div>
            </div>
         </SidebarInset>
      </SidebarProvider>
   )
}

export default Dashboard