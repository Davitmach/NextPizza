
'use client'
import { UserApi } from "@/api/user/userApi";
import axios from "axios";
import { AxiosResponse } from "axios";
import { signOut,signIn,getSession, useSession } from "next-auth/react";
import { QueryClient} from "@tanstack/react-query";
import Cookie from 'js-cookie'
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
    Cookie.remove('CODE_STATUS');
    try {
    if(status == 'authenticated') {
      
const data = await axios.get(UserApi.logout,{
    withCredentials:true
})
await queryClient.invalidateQueries<any>(['checkLogged'])
await queryClient.invalidateQueries<any>(['checkLogin'])
 signOut()

return data.data
    }
    else {
        const data = await axios.get(UserApi.logout,{
    withCredentials:true   
    })

    await queryClient.invalidateQueries<any>(['checkLogin'])
   await  queryClient.invalidateQueries<any>(['checkLogged'])
    

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
await queryClient.invalidateQueries<any>(['checkLogin'])
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
async Verif(code:string,queryClient:QueryClient) {
const data = await axios.post(UserApi.verif,{
code:code
},{
    withCredentials:true
})
await queryClient.invalidateQueries<any>(['checkLogin'])
return data.data
}
async SignIn() {
    signIn('google')
}
async Register(name:string,email:string,queryClient:QueryClient) {
const data = await axios.post(UserApi.register,{
    name:name,
    email:email
})
await queryClient.invalidateQueries<any>(['checkLogin'])
return data.data;
}
} 
export const userService = new UserService();