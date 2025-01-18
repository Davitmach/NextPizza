'use client';
import Style from './header.module.scss';
import { Header_input } from "@/components/UI/input/input"
import { Logo } from "../logo/logo"
import { Button } from "@/components/UI/button/button"
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { Menu } from '../headerMenu/menu';
import { BigContainer } from '@/components/UI/container/container';
export const Header = ()=> {
    const [active,setActive] = useState<boolean>(false);
    const [click,setClick] = useState<boolean>(false)
    const Handler = ()=> {
        setClick(true)
        setActive(!active);
    }
    useEffect(()=> {
if(active == true) {
    document.body.style.overflow = 'hidden'
}
else {
    document.body.style.overflow = 'auto'
}
    },[active]);
    const checkScreenSize = () => {
        if(window.innerWidth >1125) {
            setActive(false)
        }
        
      };

    //   const HandleScroll = (e)=> {
    //     console.log(e);
        
    //     setActive(false)
    //   }

   useEffect(()=> {
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
   }, []);
//    useEffect(()=> {
//     window.addEventListener('scroll', HandleScroll);
//     return () => window.removeEventListener("scroll", HandleScroll);
//    }, []);
    return(
        <>
        <header className={`sticky top-0 bg-white w-full  mx-auto flex justify-between items-center border-b   ${active == false ?' border-b-gray-cartBorder' : 'border-b-transparent'} py-[24px] px-[2%] gap-12`}>
     
          <BigContainer className='flex justify-between w-full mx-auto'>
            <div className="flex-1 z-20 "><Logo/></div>
            <div className="flex-[2] l:hidden"><Header_input/></div>
            <div className="flex gap-[16px] justify-center flex-1 l:hidden">
                <div><Button variant='user' status={false} size="default"  /></div>
                <div><Button variant="cart" size="default" status={false}/></div>
            </div>
            <div className='cursor-pointer z-20 lMin:hidden' onClick={Handler}>{active == true ? <FaXmark className='text-[30px] text-orange'/> :<FaBars className='text-[30px] text-orange'/>}</div>
            </BigContainer>
        </header>
        <Menu click={click} status={active}/> 
        </>
    )
}