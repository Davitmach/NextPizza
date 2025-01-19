import { Button } from "@/components/UI/button/button";
import { Input } from "@/components/UI/input/input";
import { useNotification } from "@/context/notification";
import { userService } from "@/service/userService";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image"
import { useCallback,useEffect,useRef, useState } from "react";

import { useForm } from "react-hook-form"
import Cookie from 'js-cookie'
type Login = {
    func:Function
}
export const Login=(props:Login)=> {
    const [ios,setIos] = useState<boolean>(false);

    const {showNotification} = useNotification()
    const query = useQueryClient()
    const refMail = useRef<HTMLInputElement|null>(null);
    const refName = useRef<HTMLInputElement|null>(null);
    const [input,setInput] = useState<boolean>(false);
  const func = props.func;
    const {handleSubmit} = useForm();

    const HandleSubmit = ()=> {
        if(refMail.current && refName.current) {
              userService.Login(refName.current.value,refMail.current.value,query).then((e)=> {
                if(e.response?.data?.error) {
showNotification('Произошла ошибка','error');
setInput(true)
setTimeout(() => {
    setInput(false)
}, 2000);
                }
                else {
                    const expirationDate = new Date(Date.now() + 1 * 60 * 1000);
                    showNotification('На почту отправлен код','info')
                    func(true);
                    Cookie.set('CODE_STATUS','true',{
                        expires:expirationDate
                    });
                }  
              })

        }
        
       
    }
    const Google = useCallback(()=> {
userService.SignIn();
    },[])

useEffect(()=> {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream) {
        setIos(true);
      }
},[])
    return(
        <>       
        <div className="Info_box flex items-center justify-between">
            <div>
                <div><h1 className="text-black-label font-[600] text-[30px]">Вход в аккаунт</h1></div>
                <div><p className="text-gray-loginDescription font-[400] text-[16px]">Введите свою почту, чтобы войти в свой аккаунт</p></div>
            </div>
            <div><Image priority quality={100} alt="img" src={'/phone.png'} width={60} height={60}/></div>
        </div>
        <div className="mt-[20px]"><form onSubmit={handleSubmit(HandleSubmit)} action="">
            <Input required={true} placeholder="Введите почту" ErrorMessage="Неправильно ввели почту" ErrorState={input}   InputType='email' Label="E-Mail" ref={refMail}/>
           <div> <Input required={true} className="mt-[10px] mb-[20px]" placeholder="Введите ваше имя" ErrorMessage="Неправильно введено имя" ErrorState={input}    InputType='text' Label="Имя" ref={refName}/></div>

            <Button variant='orange' size="full" status={false}>Войти</Button>
            </form></div>
        <div className="my-[20px] border-t border-t-gray-cartBorder pt-[20px]">
          { ios == false &&<Button func={Google} variant='orangeBorder' status={false} size='full'>Google<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg></Button>}
        </div>
    </>
    )
}