'use client'
import { useEffect,useState } from 'react';
import Style from './menu.module.scss';
import { Button } from '@/components/UI/button/button';
import { Header_input } from '@/components/UI/input/input';
import { usePathname } from 'next/navigation';
export const Menu = ({ status ,click}: { status: boolean,click:boolean }) => {
const path = usePathname();
const [active,setActive] = useState<boolean>(false);

useEffect(()=> {
if(path.includes('product')) {
    setActive(true)
}
else {
    setActive(false)
}
},[path])
    
if(status == true) {
    return (
        <div className={`${Style.fadeIn} z-50 py-[20px] px-[30px] fixed left-0 top-[143px] translate-x-[100vh] w-full   bg-white flex justify-center gap-5 flex-col-reverse shadow-2xl rounded-b-3xl`}>
            { active == false && <div className=" "><Header_input/></div>}
                        <div className="flex gap-[16px] justify-center ">
                            <div><Button variant='user' status={false} size="default"  /></div>
                            <div><Button variant="cart" size="default" status={false}/></div>
                        </div>
        </div>
    );
}
else {
    if(click == true) {
return (
        <div className={`${Style.fadeOut} z-50 py-[20px] px-[30px] fixed left-0   top-[144px]  w-full  bg-white flex justify-center gap-5 flex-col-reverse  shadow-2xl   rounded-b-3xl`}>
             { active == false && <div className=" "><Header_input/></div>}
                        <div className="flex gap-[16px] justify-center flex-1 ">
                            <div><Button variant='user' status={false} size="default"  /></div>
                            <div><Button variant="cart" size="default" status={false}/></div>
                        </div>
        </div>
    );
    }
    else {
        return (
        <div className={` z-50 py-[20px] px-[30px] fixed left-0 -translate-x-full  top-[143px]  w-full  bg-white flex justify-center gap-5 flex-col-reverse  shadow-2xl rounded-b-3xl `}>
               { active == false && <div className=" "><Header_input/></div>}
                        <div className="flex gap-[16px] justify-center flex-1 ">
                            <div><Button variant='user' status={false} size="default"  /></div>
                            <div><Button variant="cart" size="default" status={false}/></div>
                        </div>
        </div>
    );
    }
    
}

   
};
