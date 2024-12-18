import { type LucideIcon } from "lucide-react"
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
   SidebarGroup,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavLink } from "react-router-dom"

interface SidebarItemProps {
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
}

export function SidebarItem({ items }: SidebarItemProps) {
   return (
      <SidebarGroup>
         <SidebarGroupLabel>Main</SidebarGroupLabel>
         <SidebarMenu className="space-y-2">
            {items.map((item) => {
               return (
                  <Collapsible
                     key={item.title}
                     asChild
                     className="group/collapsible"
                  >
                     <NavLink to={item.url}>
                        <SidebarMenuItem>
                           <CollapsibleTrigger asChild>
                              <SidebarMenuButton tooltip={item.title}>
                                 {item.icon && <item.icon />}
                                 <span>{item.title}</span>
                              </SidebarMenuButton>
                           </CollapsibleTrigger>
                        </SidebarMenuItem>
                     </NavLink>
                  </Collapsible>
               );
            })}
         </SidebarMenu>
      </SidebarGroup>
   )
}