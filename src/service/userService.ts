
'use client'
import { UserApi } from "@/api/user/userApi";
import axios from "axios";
import { AxiosResponse } from "axios";

import { signOut,signIn,getSession, useSession } from "next-auth/react";
import Cookie from 'js-cookie'
import { useEffect } from "react";
import { QueryClient} from "@tanstack/react-query";
import { useNotification } from "@/context/notification";
const {showNotification} = useNotification()
class UserService {

async Login(name:string,email:string,queryClient:QueryClient) {
    try {
const data = await axios.post(UserApi.login,{
    name:name,
    email:email
},{
        withCredentials:true   
})
queryClient.invalidateQueries<any>(['checkLogin'])
showNotification('Вы успешно вошли в систему','success')
return data.data;
    }
    catch(error) {
        return(error);
    }
}
async CheckLogged() {
    try {
const data = await axios.get(UserApi.checkLogged,{
        withCredentials:true   
})
return data.data;
    }
    catch(error) {
        return(error);
    }
}
async Logout(status:'authenticated'|'loading' | 'unauthenticated',queryClient:QueryClient) {
    try {
    if(status == 'authenticated') {
      await signOut()
const data = await axios.get(UserApi.logout,{
    withCredentials:true
})
queryClient.invalidateQueries<any>(['checkLogin'])
return data.data
    }
    else {
        const data = await axios.get(UserApi.logout,{
    withCredentials:true   
    })
    queryClient.invalidateQueries<any>(['checkLogin'])
    return data.data;
        

    }

    }
    catch(error) {
        return(error)
    }
    
}
async LoginProvider(name:string,email:string,queryClient:QueryClient) {
try {
const data = await axios.post(UserApi.loginProvider,{
    name:name,
    email:email
},{
    withCredentials:true
})
queryClient.invalidateQueries<any>(['checkLogin'])
showNotification('Вы успешно вошли в систему','success')
return data.data



}
catch(error) {
    return(error)
}
}
async GetId() {
    try {
        
     
            const data = await axios.get(UserApi.getId, {
                withCredentials:true
            });
            return data.data;
        
    } catch (error) {
        console.error(error);
        return error;
    }
}

}
export const userService = new UserService();