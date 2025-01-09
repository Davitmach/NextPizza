
'use client'
import { UserApi } from "@/api/user/userApi";
import axios from "axios";
import { AxiosResponse } from "axios";

import { signOut,signIn,getSession, useSession } from "next-auth/react";
import Cookie from 'js-cookie'
import { useEffect } from "react";
import { queryClient } from "@/utils/queryClient";
class UserService {

async Login(name:string,email:string) {
    try {
const data = await axios.post(UserApi.login,{
    name:name,
    email:email
},{
        withCredentials:true   
})
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
async Logout(status:'authenticated'|'loading' | 'unauthenticated') {
    try {
    if(status == 'authenticated') {
      await signOut()
const data = await axios.get(UserApi.logout,{
    withCredentials:true
})
queryClient.invalidateQueries({queryKey:['checkLogin']});
return data.data
    }
    else {
        
        const data = await axios.get(UserApi.logout,{
            withCredentials:true   
    })
    queryClient.invalidateQueries({queryKey:['checkLogin']});
    return data.data;
        

    }

    }
    catch(error) {
        return(error)
    }
    
}
async LoginProvider(name:string,email:string) {
try {
const data = await axios.post(UserApi.loginProvider,{
    name:name,
    email:email
},{
    withCredentials:true
})
return data.data



}
catch(error) {
    return(error)
}
}
async GetId() {
    try {
    const CheckCookie = Cookie.get('USER_AUTH_TOKEN');
    
    
    if(CheckCookie) {
        console.log(CheckCookie,'e');
const data = await axios.get(UserApi.getId,{
    withCredentials:true
})
return data.data
    }
}
catch(error) {
    return(error);
} 
}
}
export const userService = new UserService();