'use client';
import { Order } from "@/components/shared/order/order";
import { BigContainer } from "@/components/UI/container/container";
import { ProductPageTitle } from "@/components/UI/title/title";
import { paymentService } from "@/service/paymentService";
import { OrderProps } from "@/types/UI/order/orderProps";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Style from './order.module.scss';
export default function Orders() {
const {data} = useQuery({
    queryKey:['getOrders'],
    queryFn:()=> paymentService.getOrders()
})


    return(
           <BigContainer className="xxs:px-1 h-[100vh]" >
           <div className="mb-[50px]"><ProductPageTitle>Мои заказы</ProductPageTitle></div>
        <div className={`pb-[20px] flex flex-col gap-[25px] overflow-y-scroll h-[600px] ${Style.order_page}`}>{
            data&&
            Array.isArray(data.info) && data.info.length >0 &&
            data.info.map((e:OrderProps)=> (
                <Order fullName={e.fullName} address={e.address} createdAt={e.createdAt} email={e.email} id={e.id} items={e.items} paymentId={e.paymentId} phone={e.phone} status={e.status} token={e.token} totalAmount={e.totalAmount} userId={e.userId} comment={e.comment} key={e.id} />
            )) 
            }</div>   
              </BigContainer>
    )
}