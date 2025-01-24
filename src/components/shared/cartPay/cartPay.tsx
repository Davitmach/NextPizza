
'use client'
import { Button } from "@/components/UI/button/button"
import { cartService } from "@/service/cartService"

import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { Loading } from "../loading/loading"

export const CartPay = ()=> {
    const {data,isSuccess,error} = useQuery({
queryKey:['payTotal'],
queryFn:()=> cartService.getTotal()

    })


    return(
        <div className="w-full px-[35px] py-[38px] bg-white flex flex-col gap-[21px]">
            <div className="flex flex-col gap-[12px]">
                <div className="flex w-full items-end justify-between gap-[12px]">
                    <div><span>Итого: </span></div>
                    <div className="w-full border-dotted border-b border-gray-dotted -translate-y-2"></div>
                    <div><h1 className="text-nowrap text-black-label font-[700] text-[18px]">{data?.total} ₽ </h1></div>
                </div>
                <div className="flex w-full items-end justify-between gap-[12px]">
                    <div><span className="text-nowrap">Налог 5%: </span></div>
                    <div className="w-full border-dotted border-b border-gray-dotted  -translate-y-2"></div>
                    <div><h1 className="text-nowrap text-black-label font-[700] text-[18px]">{data?.tax} ₽ </h1></div>
                </div>
            </div>
            <div className="w-full flex justify-center"><Button link="checkout" variant='pay' size="full" status={false}/></div>
        </div>
    )
}

interface CheckOutPayProps {
    total:number|null,
    tax:number|null,
    delivery:number|null,
    price:number|null,
    function:Function
}
export const CheckoutPay = (props:CheckOutPayProps)=> {


   return(
    <div className="bg-white rounded-[30px] inline-flex flex-col justify-between  w-[450px] s:w-full py-[25px]  ">
        <div className="border-b border-white-border px-[45px] py-[10px]">
            <div><span className="font-[400] text-[22px] text-black-label">Итого:</span></div>
            <div className="text-black-label font-[800] text-[34px]">{props.total ? props.total.toFixed(0) +' ₽' : <Loading width={30} borderWidth={4} type='orange'  /> }</div>
        </div>
        <div className="flex flex-col py-[30px] px-[40px] gap-2 ">
        <div className="flex w-full items-end justify-between gap-[12px]">
                    <div className="flex items-center justify-center gap-2"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 4.5L8 1L1 4.5V11.5L8 15L15 11.5V4.5Z" stroke="#B9B9B9" strokeLinejoin="round"/>
<path d="M11.5 2.75L4.5 6.25M1 4.5L8 8L1 4.5ZM8 15V8V15ZM15 4.5L8 8L15 4.5Z" stroke="#B9B9B9" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
<span className="text-nowrap">Стоимость товаров: </span></div>
                    <div className="w-full border-dotted border-b border-gray-dotted -translate-y-2"></div>
                    <div><h1 className="text-nowrap text-black-label font-[700] text-[18px]">{props.price ? props.price.toFixed(0) +' ₽' : <Loading width={30} borderWidth={4} type='orange'  /> }</h1></div>
                </div>
                <div className="flex w-full items-end justify-between gap-[12px]">
                    <div className="flex items-center justify-center gap-2"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M2.54348 5.08696C2.04043 5.08696 1.54867 4.93779 1.1304 4.6583C0.712126 4.37882 0.386122 3.98159 0.193612 3.51683C0.00110204 3.05207 -0.0492673 2.54066 0.0488734 2.04727C0.147014 1.55388 0.389257 1.10068 0.744969 0.744969C1.10068 0.389257 1.55388 0.147014 2.04727 0.0488734C2.54066 -0.0492673 3.05207 0.00110204 3.51683 0.193612C3.98159 0.386122 4.37882 0.712126 4.6583 1.1304C4.93779 1.54867 5.08696 2.04043 5.08696 2.54348C5.08696 3.21805 4.81898 3.865 4.34199 4.34199C3.865 4.81898 3.21805 5.08696 2.54348 5.08696ZM2.54348 1.69565C2.3758 1.69565 2.21188 1.74538 2.07245 1.83854C1.93303 1.9317 1.82436 2.06411 1.76019 2.21903C1.69602 2.37395 1.67923 2.54442 1.71194 2.70888C1.74466 2.87334 1.82541 3.02441 1.94398 3.14298C2.06255 3.26155 2.21361 3.3423 2.37808 3.37501C2.54254 3.40773 2.71301 3.39094 2.86793 3.32677C3.02285 3.2626 3.15526 3.15393 3.24842 3.01451C3.34158 2.87508 3.39131 2.71116 3.39131 2.54348C3.38838 2.31953 3.29811 2.10558 3.13975 1.94721C2.98138 1.78885 2.76743 1.69858 2.54348 1.69565ZM0.904474 12.9435C0.79308 12.944 0.682703 12.9223 0.57982 12.8796C0.476936 12.8369 0.383619 12.774 0.305343 12.6948C0.146573 12.5358 0.0573935 12.3203 0.0573935 12.0957C0.0573935 11.871 0.146573 11.6555 0.305343 11.4965L11.4966 0.305219C11.5743 0.221921 11.6679 0.15511 11.7719 0.108771C11.8759 0.0624326 11.9881 0.0375155 12.102 0.035507C12.2158 0.0334985 12.3289 0.0544396 12.4345 0.0970808C12.54 0.139722 12.6359 0.20319 12.7164 0.283698C12.7969 0.364206 12.8604 0.460105 12.903 0.565674C12.9457 0.671243 12.9666 0.78432 12.9646 0.898158C12.9626 1.012 12.9377 1.12426 12.8914 1.22826C12.845 1.33226 12.7782 1.42586 12.6949 1.50348L1.5036 12.6948C1.42533 12.774 1.33201 12.8369 1.22913 12.8796C1.12624 12.9223 1.01587 12.944 0.904474 12.9435ZM9.04354 12.5713C9.46182 12.8508 9.95357 13 10.4566 13C11.1312 13 11.7781 12.732 12.2551 12.255C12.7321 11.778 13.0001 11.1311 13.0001 10.4565C13.0001 9.95344 12.8509 9.46169 12.5715 9.04341C12.292 8.62514 11.8947 8.29914 11.43 8.10663C10.9652 7.91412 10.4538 7.86375 9.96042 7.96189C9.46703 8.06003 9.01383 8.30227 8.65812 8.65798C8.3024 9.0137 8.06016 9.4669 7.96202 9.96029C7.86388 10.4537 7.91425 10.9651 8.10676 11.4298C8.29927 11.8946 8.62527 12.2918 9.04354 12.5713ZM9.9856 9.75155C10.125 9.65839 10.2889 9.60867 10.4566 9.60867C10.6806 9.6116 10.8945 9.70186 11.0529 9.86023C11.2113 10.0186 11.3015 10.2325 11.3045 10.4565C11.3045 10.6242 11.2547 10.7881 11.1616 10.9275C11.0684 11.0669 10.936 11.1756 10.7811 11.2398C10.6262 11.304 10.4557 11.3207 10.2912 11.288C10.1268 11.2553 9.97569 11.1746 9.85712 11.056C9.73855 10.9374 9.6578 10.7864 9.62509 10.6219C9.59238 10.4574 9.60917 10.287 9.67334 10.132C9.73751 9.97713 9.84618 9.84471 9.9856 9.75155Z" fill="#CECECE"/>
</svg>
<span>Налоги: </span></div>
                    <div className="w-full border-dotted border-b border-gray-dotted -translate-y-2"></div>
                    <div><h1 className="text-nowrap text-black-label font-[700] text-[18px]">{props.tax ? props.tax.toFixed(0) +' ₽' : <Loading width={30} borderWidth={4} type='orange'  /> }</h1></div>
                </div>
                <div className="flex w-full items-end justify-between gap-[12px]">
                    <div className="flex items-center justify-center gap-2"><svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.1381 6.42519L14.4981 2.59849C14.4562 2.49968 14.3862 2.41537 14.2968 2.35607C14.2073 2.29677 14.1024 2.2651 13.9951 2.26502H12.3551V1.17167C12.3551 1.02669 12.2975 0.887638 12.195 0.785117C12.0925 0.682596 11.9534 0.625 11.8084 0.625H1.42167C1.27669 0.625 1.13764 0.682596 1.03512 0.785117C0.932596 0.887638 0.875 1.02669 0.875 1.17167V10.4651C0.875 10.6101 0.932596 10.7491 1.03512 10.8517C1.13764 10.9542 1.27669 11.0118 1.42167 11.0118H2.59155C2.71744 11.475 2.99226 11.8839 3.37362 12.1755C3.75497 12.467 4.22167 12.625 4.70171 12.625C5.18174 12.625 5.64844 12.467 6.02979 12.1755C6.41115 11.8839 6.68597 11.475 6.81186 11.0118H10.245C10.3708 11.475 10.6457 11.8839 11.027 12.1755C11.4084 12.467 11.8751 12.625 12.3551 12.625C12.8351 12.625 13.3018 12.467 13.6832 12.1755C14.0646 11.8839 14.3394 11.475 14.4653 11.0118H15.6351C15.7801 11.0118 15.9192 10.9542 16.0217 10.8517C16.1242 10.7491 16.1818 10.6101 16.1818 10.4651V6.63839C16.1817 6.56511 16.1668 6.49261 16.1381 6.42519ZM12.3551 3.35836H13.6343L14.8042 6.09172H12.3551V3.35836ZM4.70171 11.5584C4.48546 11.5584 4.27408 11.4943 4.09428 11.3742C3.91448 11.254 3.77434 11.0833 3.69159 10.8835C3.60883 10.6837 3.58718 10.4639 3.62937 10.2518C3.67156 10.0397 3.77569 9.84489 3.92859 9.69199C4.0815 9.53908 4.27632 9.43495 4.4884 9.39276C4.70049 9.35058 4.92033 9.37223 5.12011 9.45498C5.31989 9.53773 5.49065 9.67787 5.61079 9.85767C5.73093 10.0375 5.79505 10.2489 5.79505 10.4651C5.79505 10.7551 5.67986 11.0332 5.47482 11.2382C5.26977 11.4433 4.99168 11.5584 4.70171 11.5584ZM10.245 9.91843H6.81186C6.68597 9.45519 6.41115 9.04626 6.02979 8.75471C5.64844 8.46316 5.18174 8.3052 4.70171 8.3052C4.22167 8.3052 3.75497 8.46316 3.37362 8.75471C2.99226 9.04626 2.71744 9.45519 2.59155 9.91843H1.96834V1.71834H11.2618V8.58455C11.0128 8.72902 10.7949 8.92122 10.6204 9.15012C10.4459 9.37902 10.3183 9.64011 10.245 9.91843ZM12.3551 11.5584C12.1389 11.5584 11.9275 11.4943 11.7477 11.3742C11.5679 11.254 11.4277 11.0833 11.345 10.8835C11.2622 10.6837 11.2406 10.4639 11.2828 10.2518C11.325 10.0397 11.4291 9.84489 11.582 9.69199C11.7349 9.53908 11.9297 9.43495 12.1418 9.39276C12.3539 9.35058 12.5737 9.37223 12.7735 9.45498C12.9733 9.53773 13.1441 9.67787 13.2642 9.85767C13.3843 10.0375 13.4485 10.2489 13.4485 10.4651C13.4485 10.7551 13.3333 11.0332 13.1282 11.2382C12.9232 11.4433 12.6451 11.5584 12.3551 11.5584ZM15.0885 9.91843H14.4653C14.3444 9.45021 14.0717 9.03528 13.6899 8.73854C13.3081 8.44179 12.8387 8.27998 12.3551 8.27841V7.18507H15.0885V9.91843Z" fill="#B9B9B9"/>
</svg>
<span>Доставка: </span></div>
                    <div className="w-full border-dotted border-b border-gray-dotted -translate-y-2"></div>
                    <div><h1 className="text-nowrap text-black-label font-[700] text-[18px]">{props.delivery? props.delivery +' ₽' : <Loading width={30} borderWidth={4} type='orange'  /> }</h1></div>
                </div>
        </div>
        <div className="px-[45px] border-t border-white-border py-[20px]"><Button func={props.function} variant='orange' size="full" status={false}>Перейти к оплате</Button></div>
    </div>
   )
}