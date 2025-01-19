'use client';
import Style from './login.module.scss'
import { useEffect, useState } from "react";
import { Login } from "../login/login";
import { Signup } from "../signup/signup";
 import { Button } from "@/components/UI/button/button";
 import { FaXmark } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { Code } from "../code/code";
import Cookie from 'js-cookie'
export const LoginPage=()=> {
    const {replace,refresh} = useRouter();
    const [code,setCode] = useState<boolean>(false);
const [page,setPage] = useState<'log'|'sign'>('log')
   const HandleChangePage = ()=> {
    if(page == 'log') setPage('sign');
    else setPage('log')
   }

   const HandleClose = ()=> {
    document.body.style.overflow = 'auto'; 
    replace('/')
    
   }
   useEffect(()=> {
    document.body.style.overflow = 'hidden';
const Check = Cookie.get('CODE_STATUS');
if(Check == 'true') {
    setCode(true)
}

   },[])
   return(
<div className={`absolute w-full h-[100vh] left-0 top-0 bg-gray-background flex items-center justify-center z-[500000000] `}>
    <div className={`${Style.form} bg-white w-[450px] flex flex-col justify-between  rounded-[18px] py-[42px] px-[45px] relative`}>
    
   <div className='h-full'> {code == true ? <Code/> :page == 'log' ? <Login func={setCode}/> :<Signup/>}</div>
{code == false &&<div className='mt-[10px]'><Button func={HandleChangePage} variant='orangeBorder' status={false} size="full">{page=='log' ? 'Регистрация': 'Вход'}</Button></div>  }  

<div className={`${Style.xmark} absolute -right-[40px] top-0`}>
<FaXmark className={Style.svg} onClick={HandleClose} cursor={'pointer'} fontSize={'30px'} color="white"/>
</div>
    </div>
</div>

    )
}