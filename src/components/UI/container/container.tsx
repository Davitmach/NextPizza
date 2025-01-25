'use client'
import { ContainerProps } from '@/types/UI/container/containerProps';
import './container.scss';
import {Title} from '@/components/UI/title/title'
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useMenuState } from '@/store';

export const Container = (containerProps:ContainerProps)=> {
    const {setMenu} = useMenuState();
    const { ref, inView } = useInView({
 
        threshold: 0.1, 
      });
      useEffect(()=> {
if(inView == true) {
setMenu(Id)
}

      },[inView])
     const Container_Title = containerProps.title;
     const Id = containerProps.id;
     const Container_children = containerProps.children;
    return(
        <div ref={ref} id={Id} className='px-[62px] xs:px-[20px]  py-[110px]'>
<Title>{Container_Title}</Title>
<main className='mt-[20px] grid grid-cols-3 gap-12 813max:grid-cols-2 571max:grid-cols-1'>{Container_children}</main>
        </div>
    )
}
export const BigContainer = (props:{children:React.ReactNode,className?:string,parentClassName?:string,category?:boolean})=> {

    return(
        <div className={`${props.parentClassName} w-full`}>
        <div className={`${props.className} max-w-[1500px] w-full mx-auto py-[30px] px-[30px] xxs:px-[15px]`}>
{props.children}
        </div>
        </div>
    )
}
export const CategoryContainer= (props:{children:React.ReactNode,className?:string,parentClassName?:string})=> {
    const [active,setActive] = useState<boolean>(false);
    useEffect(() => {
        const handler = () => {
         if(document.body.scrollTop>20) {
            setActive(true)
         }
         else {
            setActive(false);
         }
        };
      
        document.body.addEventListener('scroll', handler);
      
        return () => {
          document.body.removeEventListener('scroll', handler);
        };
      }, []);

    return(
        <div className={`${props.parentClassName} w-full  Active_cat`}>
        <div className={`${props.className} max-w-[1500px] w-full mx-auto py-[30px] px-[30px] xxs:px-[15px] `}>
{props.children}
        </div>
        </div>
    )
}