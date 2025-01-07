'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"
export function Logo() {
const {push} = useRouter();
    return(
        <div className="cursor-pointer flex items-center gap-4" onClick={()=> {
push('/')
        }}>
            <div><Image width={50} height={50} alt="Logo" src={'/logo.png'}/></div>
            <div>
                <h1 className="h-[30px] text-[24px] font-black">NEXT PIZZA </h1>
                <span className="text-gray-dark4 text-[16px] font-[400]">вкусней уже некуда</span>
            </div>
        </div>
    )
}