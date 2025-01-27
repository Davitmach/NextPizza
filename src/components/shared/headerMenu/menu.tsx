'use client'
import { useCallback, useEffect,useState } from 'react';
import Style from './menu.module.scss';
import { Button } from '@/components/UI/button/button';
import { Header_input } from '@/components/UI/input/input';
import { usePathname } from 'next/navigation';
export const Menu = ({ status ,click,ref}: { status: boolean,click:boolean,ref:React.Ref<HTMLDivElement>, }) => {

    
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
        

        <div ref={ref} className={` active z-50 py-[20px] px-[30px] duration-500 fixed left-0 top-[147px]  w-full   bg-white flex justify-center gap-5 flex-col-reverse shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] rounded-b-3xl`}>
            { active == false && <div className=""><Header_input/></div>}
                        <div className="flex gap-[16px] justify-center ">
                            <div><Button variant='user' status={false} size="default"  /></div>
                            <div><Button  variant="cart" size="default" status={false}/></div>
                        </div>
        </div>
     
    );
}
else {
    if(click == true) {
return (

        <div ref={ref} className={`translate-x-full duration-500 disable z-50 py-[20px] px-[30px] fixed left-0   top-[147px]  w-full  bg-white flex justify-center gap-5 flex-col-reverse  shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]   rounded-b-3xl`}>
             { active == false && <div className=" "><Header_input/></div>}
                        <div className="flex gap-[16px] justify-center flex-1 ">
                            <div><Button variant='user' status={false} size="default"  /></div>
                            <div><Button   variant="cart" size="default" status={false}/></div>
                        </div>
        </div>
   
    );
    }
    else {
        return (
        
        <div ref={ref} className={` z-50 py-[20px] disable px-[30px] fixed left-0 translate-x-full  top-[147px]  w-full  bg-white flex justify-center gap-5 flex-col-reverse  shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] rounded-b-3xl `}>
               { active == false && <div className=" "><Header_input/></div>}
                        <div className="flex gap-[16px] justify-center flex-1 ">
                            <div><Button variant='user' status={false} size="default"  /></div>
                            <div><Button   variant="cart" size="default" status={false}/></div>
                        </div>
        </div>
     
    );
    }
    
}

   
};
