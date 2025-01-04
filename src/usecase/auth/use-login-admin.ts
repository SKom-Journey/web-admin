import { useMutation } from "react-query";
import { loginAdmin } from "@/repository/auth/login-admin";
import { LoginAdminRequest } from "@/request/auth";

export const useLoginAdmin = () =>{
   return useMutation((payload: LoginAdminRequest) => {
      return loginAdmin(payload)
   })
}