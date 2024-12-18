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
         url: "",
         icon: QrCode,
         isActive: false,
      },
      {
         title: "Incoming Order",
         url: "#",
         icon: Soup,
         isActive: false,
      },
      {
         title: "Manage Category",
         url: "#",
         icon: ChartBarStacked,
         isActive: false,
      },
      {
         title: "Manage Menu",
         url: "#",
         icon: HandPlatter,
         isActive: false,
      },
   ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
   return (
      <Sidebar collapsible="icon" {...props}>
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
