import { Button } from "@/components/UI/button/button"
import { cartService } from "@/service/cartService"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"

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
            <div className="w-full flex justify-center"><Button variant='pay' size="full" status={false}/></div>
        </div>
    )
}