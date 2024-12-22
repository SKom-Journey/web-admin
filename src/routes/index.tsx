import Dashboard from "@/Dashboard";
import { LoginPage } from "@/pages/auth/login";
import { IncomingOrderPage } from "@/pages/incoming-order";
import { ManageCategoryPage } from "@/pages/manage-category";
import { ManageMenuPage } from "@/pages/manage-menu";
import { ManageQrPage } from "@/pages/manage-qr";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
   { path: "*", element: <div>404 Not Found</div> },
   {
      path: '/',
      element: <Navigate to='/admin/manage-qr' />,
   },
   {
      path: '/auth/login',
      element: <LoginPage />,
   },
   {
      path: '/admin',
      element: <Dashboard />,
      children: [
         {
            path: 'manage-qr',
            element: <ManageQrPage />
         },
         {
            path: 'manage-menu',
            element: <ManageMenuPage />
         },
         {
            path: 'manage-category',
            element: <ManageCategoryPage />
         },
         {
            path: 'incoming-order',
            element: <IncomingOrderPage />
         }
      ]
   }
])

export default router