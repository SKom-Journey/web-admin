import { AppSidebar } from "@/components/base/sidebar/Sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Navbar } from "@/components/base/navbar/Navbar"

function Dashboard() {
   return (
      <SidebarProvider>
         <AppSidebar />
         <SidebarInset>
            <Navbar />
            <div className="flex flex-1 flex-col gap-4 p-4">
               <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-5">
                  halo
               </div>
            </div>
         </SidebarInset>
      </SidebarProvider>
   )
}

export default Dashboard