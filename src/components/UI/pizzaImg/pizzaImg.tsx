'use client'
import Style from './pizzaImg.module.scss'
import Image from "next/image"
import { PizzaImgProps } from "@/types/UI/pizzaImg/pizzaImgProps"
import { useEffect } from "react"

export const PizzaImg = (props:PizzaImgProps,)=> {
    const Img = props.img.trimEnd();
    const State = props.state;

    return(
        <div className='w-[490px] h-[490px] flex items-center justify-center relative flex-[1 1 500px]'>
             <Image className={`z-50 left-[52.5%] top-[52.5%] -translate-x-2/4 -translate-y-2/4 duration-200 absolute ${State == 'Маленькая' ? Style.little : State == 'Средняя'? Style.middle : Style.big}`} alt="Img Pizza" width={300} height={300} src={Img}/>
        <div className="w-[450px] h-[450px] relative rounded-[50%] flex items-center justify-center border border-dashed border-gray-dotted">
           
            <div className="w-[375px] h-[375px] rounded-[50%] flex items-center justify-center border border-dashed border-gray-dotted">
                <div  className="w-[300px] h-[300px] rounded-[50%]">

                </div>
            </div>
        </div>
        </div>
    )
}