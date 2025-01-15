'use client';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Login } from "../login/login";
import { Signup } from "../signup/signup";
 import { Button } from "@/components/UI/button/button";
 import { FaXmark } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { Code } from "../code/code";
import Cookie from 'js-cookie'
export const LoginPage=()=> {
    const {back} = useRouter();
    const [code,setCode] = useState<boolean>(false);
const [page,setPage] = useState<'log'|'sign'>('log')
   const HandleChangePage = ()=> {
    if(page == 'log') setPage('sign');
    else setPage('log')
   }

   const HandleClose = ()=> {
back()
   }
   useEffect(()=> {
const Check = Cookie.get('CODE_STATUS');
if(Check == 'true') {
    setCode(true)
}

   },[])
   return(
<div className="fixed w-full h-[100vh] left-0 top-0 bg-gray-background flex items-center justify-center">
    <div className="bg-white w-[450px] rounded-[18px] py-[42px] px-[45px] relative">
    
   <div> {code == true ? <Code/> :page == 'log' ? <Login func={setCode}/> :<Signup/>}</div>
{code == false &&<div><Button func={HandleChangePage} variant='orangeBorder' status={false} size="full">{page=='log' ? 'Регистрация': 'Вход'}</Button></div>  }  

<div className=" absolute -right-[40px] top-0">
<FaXmark onClick={HandleClose} cursor={'pointer'} fontSize={'30px'} color="white"/>
</div>
    </div>
</div>

    )
}