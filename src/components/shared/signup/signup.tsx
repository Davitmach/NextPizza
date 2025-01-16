import Image from "next/image"
import { Input } from "@/components/UI/input/input";
import { Button } from "@/components/UI/button/button";
import { useForm } from "react-hook-form";
import { useRef,useState } from "react";
import { userService } from "@/service/userService";
import { useQueryClient } from "@tanstack/react-query";
import { useNotification } from "@/context/notification";
import { useRouter } from "next/navigation";
export const Signup = ()=> {
    const {replace,refresh} = useRouter()
     const refMail = useRef<HTMLInputElement|null>(null);
        const refName = useRef<HTMLInputElement|null>(null);
        const [input,setInput] = useState<boolean>(false);
        const {showNotification} = useNotification()
        const query = useQueryClient();
    const {handleSubmit} = useForm();
    const HandleSubmit = async()=> {
      if(refMail.current && refName.current) {
        userService.Register(refName.current.value,refMail.current.value,query).then((e)=> {
            if(e) {
                if(e.info == "Вы успешно зарегестрировались") {
showNotification(e.info,'success');
replace('/');
refresh();
                }
            }
            
        }).catch((e)=> {
            setInput(true)
            showNotification('Произошла ошибка во время регистраций','error');
            
        })
      }
        
       
    }
    return(
             <>       
                <div className="Info_box flex items-center justify-between">
                    <div>
                        <div><h1 className="text-black-label font-[600] text-[30px]">Регистрировать аккаунт</h1></div>
                        <div><p className="text-gray-loginDescription font-[400] text-[16px]">Введите свою почту, чтобы войти Регистрироваться</p></div>
                    </div>
                    <div><Image quality={100} alt="img" src={'/phone.png'} width={60} height={60}/></div>
                </div>
                <div className="mt-[20px]"><form onSubmit={handleSubmit(HandleSubmit)} action="">
                    <Input required={true} placeholder="Введите почту" ErrorMessage="Почта уже используется" ErrorState={input}   InputType='email' Label="E-Mail" ref={refMail}/>
                   <div> <Input required={true} className="mt-[10px] mb-[20px]" placeholder="Введите ваше имя" ErrorMessage="Имя уже используется" ErrorState={input}    InputType='text' Label="Имя" ref={refName}/></div>
        
                    <Button variant='orange' size="full" status={false}>Регистрироваться
                        
                    </Button>
                    </form></div>
           
            </>
    )
}