'use client';
import { OrderProps } from "@/types/UI/order/orderProps"
import { Status } from "../status/status";
import { useState } from "react";
import { OrderPage } from "../orderPage/orderPage";

function formatDate(isoDate:string) {

  const date = new Date(isoDate);
  return date.toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).replace(',', ' в');
}


export const Order = (props:OrderProps)=> {
  const [active,setActive] = useState<boolean>(false);
  
    return(<div>
        <div className={`rounded-[30px] bg-white py-[30px]  px-[35px] overflow-y-auto xxs:px-[15px] flex items-center justify-between ${active == true  ? 'rounded-b-none' : 'rounded-[30px]' }`}>
<div>
    <div><h1 className="font-[700] text-[24px] text-black-label">Заказ #{props.id}</h1></div>
    <div><span className="text-gray-orderDate font-[400] text-[16px]">{formatDate(props.createdAt)}</span></div>
</div>
<div className="flex items-center justify-center gap-[30px]">
  
    <div><Status status={props.status} id={props.paymentId} /></div>
    <div className="cursor-pointer" onClick={()=> setActive(!active)}><svg className={`${active ? 'rotate-180': 'rotate-0'} duration-500`} width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4999 2.21528C16.5005 2.41451 16.4628 2.61136 16.3897 2.79136C16.3165 2.97137 16.2097 3.12995 16.0771 3.25547L9.22061 9.69663C9.01613 9.89277 8.75965 10 8.49496 10C8.23027 10 7.97379 9.89277 7.76932 9.69663L0.912821 3.02876C0.679452 2.8024 0.532695 2.47713 0.504835 2.1245C0.476975 1.77187 0.570294 1.42076 0.764263 1.14842C0.958232 0.876085 1.23696 0.704823 1.53913 0.67231C1.84131 0.639798 2.14217 0.748699 2.37554 0.975058L8.50068 6.93613L14.6258 1.17509C14.7936 1.01202 14.9978 0.908433 15.2144 0.876588C15.431 0.844743 15.6509 0.885972 15.8481 0.9954C16.0452 1.10483 16.2114 1.27787 16.3269 1.49406C16.4424 1.71024 16.5025 1.96052 16.4999 2.21528Z" fill="#AEAEAE"/>
</svg>
</div>
</div>
        </div>

<OrderPage totalAmount={props.totalAmount} items={props.items}   active={active}/>
        </div>
    )
}