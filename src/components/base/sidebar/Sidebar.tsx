import { QrCode, HandPlatter, ChartBarStacked, Soup } from "lucide-react"
import { SidebarItem } from "@/components/base/sidebar/SidebarItem"
import { SidebarHeader as SidebarHears } from "@/components/base/sidebar/SidebarHeader"
import {
   Sidebar,
   SidebarContent,
   SidebarHeader,
   SidebarRail,
} from "@/components/ui/sidebar"

const data = {
   navbar: [
      {
         title: "Manage QR",
         url: "manage-qr",
         icon: QrCode,
         isActive: false,
      },
      {
         title: "Incoming Order",
         url: "incoming-order",
         icon: Soup,
         isActive: false,
      },
      {
         title: "Manage Category",
         url: "manage-category",
         icon: ChartBarStacked,
         isActive: false,
      },
      {
         title: "Manage Menu",
         url: "manage-menu",
         icon: HandPlatter,
         isActive: false,
      },
   ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
   return (
      <Sidebar className="!bg-white" collapsible="icon" {...props}>
         <SidebarHeader>
            <SidebarHears />
         </SidebarHeader>
         <SidebarContent>
            <SidebarItem items={data.navbar} />
         </SidebarContent>
         <SidebarRail />
      </Sidebar>
   )
}
