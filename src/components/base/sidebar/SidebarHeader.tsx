import RyomuLogo from "@/assets/logo/ryomu-logo.png"
import {
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from "@/components/ui/sidebar"

export function SidebarHeader() {
   return (
      <SidebarMenu>
         <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="py-5">
               <img className="size-10 object-cover" src={RyomuLogo} />
               <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                     Ryomu App
                  </span>
                  <span className="truncate text-xs">Ryomu Admin</span>
               </div>
            </SidebarMenuButton>
         </SidebarMenuItem>
      </SidebarMenu>
   )
}