import { LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const LoginPage = () => {
   return (
      <div className="h-screen flex flex-col gap-3 items-center justify-center">
         <div className="mb-5 max-w-[23rem] text-center">
            <h1 className="text-2xl font-medium text-gray-900 mb-2">Sign In to Dashboard</h1>
            <span className="text-sm text-gray-600 leading-3">orem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quo voluptate pariatur voluptatum</span>
         </div>

         <div className="grid w-full max-w-[23rem] items-center gap-4">
            <div className="flex flex-col space-y-1.5 mb-2">
               <Label className="text-gray-600 font-medium" htmlFor="username">Username</Label>
               <Input id="username" placeholder="Input username" className="focus-visible:ring-0" />
            </div>
            <div className="flex flex-col space-y-1.5 mb-2">
               <Label className="text-gray-600 font-medium" htmlFor="password">Password</Label>
               <Input id="password" placeholder="Input password" className="focus-visible:ring-0" />
            </div>
            <Button className="flex items-center gap-2 hover:bg-red-700 mt-3">
               Login
               <LogIn />
            </Button>
         </div>
      </div>
   )
}