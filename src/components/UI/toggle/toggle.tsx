'use client';
import { ToggleProps } from "@/types/UI/toggle/toggleProps";
import { useEffect, useRef } from "react";

export const Toggle = (props: ToggleProps) => {
    const Ref = useRef<HTMLDivElement | null>(null);
    const Func = props.func;
    const Arguments = props.arguments;
    const Active = props.active;
    const Class = props.class;
    useEffect(() => {
        Func(Arguments[0]);  
    }, []);

    useEffect(() => {
        const DefaultState = document.querySelector(`.${Class} .Active`) as HTMLDivElement | null;
    
        
        if (Ref.current && DefaultState) {
            Ref.current.style.width = `${DefaultState.clientWidth}px`;
            Ref.current.style.left = `${DefaultState.offsetLeft}px`; 
        }
    }, [Active, Arguments]);

    const HandleChange = (e: string) => {
        Func(e);
    };
    useEffect(() => {
     
        const handleResize = () => {
            const DefaultState = document.querySelector(`.${Class} .Active`) as HTMLDivElement | null;
            if (Ref.current && DefaultState) {
                Ref.current.style.width = `${DefaultState.clientWidth}px`;
                Ref.current.style.left = `${DefaultState.offsetLeft}px`; 
            }
        };

        window.addEventListener('resize', handleResize);

   
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return(
        <div  className={`${Class} px-[2px] py-[2px] flex bg-gray-toggleBg rounded-[30px] relative`}>{
            Array.isArray(Arguments) && Arguments.map((e,index)=> (
                <div onClick={()=> {
                    HandleChange(e)
                }} className={` text-black-label font-[400] flex items-center justify-center z-[9] text-sm py-[8px] flex-1  cursor-pointer ${e == Active && 'Active'}`} key={index}>{e}</div>
            ))
            }
            <div ref={Ref} className="bg-white absolute h-[calc(100%-4px)] rounded-[32px] top-[2px] duration-300  "></div>
            </div>


    )
}