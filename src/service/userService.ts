

import { UserApi } from "@/api/user/userApi";
import axios from "axios";
import { AxiosResponse } from "axios";
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
    

}
export const userService = new UserService();