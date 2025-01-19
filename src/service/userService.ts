
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
         const check = localStorage.getItem('NEXT_PIZZA_USER_AUTH_TOKEN');
   
const data = await axios.post(UserApi.login,{
    name:name,
    email:email
},{
        withCredentials:true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':`Barear ${check}`   
          }
})

if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream) {
    const token = data.data.Authorization
    if (token) {
      localStorage.setItem('NEXT_PIZZA_DISABLE_USER_AUTH_TOKEN', token);
    }    
  }
queryClient.invalidateQueries<any>(['checkLogin'])
await queryClient.invalidateQueries<any>(['cartItems'])

return data.data;

    }
    catch(error) {
        return(error);
    }
}
async CheckLogged() {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream) {
        const check = localStorage.getItem('USER_AUTH_TOKEN');
        if(check) {
            return {status:true}
        }
        else {
            return {status:false}
        }
    }
    else {
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
}
async Logout(status:'authenticated'|'loading' | 'unauthenticated',queryClient:QueryClient) {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream) {
        Cookie.remove('CODE_STATUS');
        if(status == 'authenticated') {
           localStorage.removeItem('USER_AUTH_TOKEN');
           await queryClient.invalidateQueries<any>(['checkLogged'])
await queryClient.invalidateQueries<any>(['checkLogin'])
await queryClient.invalidateQueries<any>(['cartItems'])
await queryClient.invalidateQueries<any>(['checkLogCheckout'])

 signOut()
        }
        else {
            localStorage.removeItem('USER_AUTH_TOKEN');
            await queryClient.invalidateQueries<any>(['checkLogged'])
            await queryClient.invalidateQueries<any>(['checkLogin'])
            await queryClient.invalidateQueries<any>(['cartItems'])
            await queryClient.invalidateQueries<any>(['checkLogCheckout'])
        }
        

     }

    else {
    Cookie.remove('CODE_STATUS');
    try {
    if(status == 'authenticated') {
      
const data = await axios.get(UserApi.logout,{
    withCredentials:true
})
await queryClient.invalidateQueries<any>(['checkLogged'])
await queryClient.invalidateQueries<any>(['checkLogin'])
await queryClient.invalidateQueries<any>(['cartItems'])
await queryClient.invalidateQueries<any>(['checkLogCheckout'])

 signOut()

return data.data
    }
    else {
        const data = await axios.get(UserApi.logout,{
    withCredentials:true   
    })

    await queryClient.invalidateQueries<any>(['checkLogin'])
   await  queryClient.invalidateQueries<any>(['checkLogged'])
   await queryClient.invalidateQueries<any>(['cartItems'])
   await queryClient.invalidateQueries<any>(['checkLogCheckout'])

    return data.data;   
    }
    }
    catch(error) {
        return(error)
    }
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
await queryClient.invalidateQueries<any>(['cartItems'])

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

        return error;
    }
}
async Verif(code:string,queryClient:QueryClient) {
   const CheckDisable = localStorage.getItem('NEXT_PIZZA_DISABLE_USER_AUTH_TOKEN');
    const CheckLogged = '4343';
const data = await axios.post(UserApi.verif,{
code:code
},{
    withCredentials:true,
    headers:{
        'Authorization':`Bearer ${CheckDisable}`,
        'logged': `Bearer ${CheckLogged}` 
    }
})
await queryClient.invalidateQueries<any>(['checkLogin'])
await queryClient.invalidateQueries<any>(['cartItems'])
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
await queryClient.invalidateQueries<any>(['cartItems'])
return data.data;
}
} 
export const userService = new UserService();