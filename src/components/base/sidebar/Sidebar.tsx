import { QrCode, HandPlatter, ChartBarStacked, Soup, LogOut } from "lucide-react"
import { SidebarItem } from "@/components/base/sidebar/SidebarItem"
import { SidebarHeader as SidebarHears } from "@/components/base/sidebar/SidebarHeader"
import {
   Sidebar,
   SidebarContent,
   SidebarHeader,
   SidebarRail,
} from "@/components/ui/sidebar"

const data = {
   manage: [
      {
         title: "Manage QR",
         url: "manage-qr",
         icon: QrCode,
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
   order: [
      {
         title: "Incoming Order",
         url: "incoming-order",
         icon: Soup,
         isActive: false,
      },
   ],
   auth: [
      {
         title: "Logout",
         url: "/logout",
         icon: LogOut,
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
            <SidebarItem items={data.manage} title="Manage" />
            <SidebarItem items={data.order} title="Orders" />
            <hr />
            <SidebarItem items={data.auth} title="Other" />
         </SidebarContent>
         <SidebarRail />
      </Sidebar>
   )
}
