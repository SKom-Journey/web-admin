import { type LucideIcon } from "lucide-react"
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
   SidebarGroup,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from "@/components/ui/sidebar"

export function SidebarItem({
   items,
}: {
   items: {
      title: string
      url: string
      icon?: LucideIcon
      isActive?: boolean
      items?: {
         title: string
         url: string
      }[]
   }[]
}) {
   return (
      <SidebarGroup>
         <SidebarGroupLabel>Main</SidebarGroupLabel>
         <SidebarMenu className="space-y-2">
            {items.map((item) => (
               <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={item.isActive}
                  className="group/collapsible"
               >
                  <a href={item.url}>
                     <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                           <SidebarMenuButton tooltip={item.title}>
                              {item.icon && <item.icon />}
                              <span>{item.title}</span>
                           </SidebarMenuButton>
                        </CollapsibleTrigger>
                     </SidebarMenuItem>
                  </a>
               </Collapsible>
            ))}
         </SidebarMenu>
      </SidebarGroup>
   )
}