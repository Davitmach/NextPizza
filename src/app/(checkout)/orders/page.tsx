'use client';
import { Order } from "@/components/shared/order/order";
import { BigContainer } from "@/components/UI/container/container";
import { ProductPageTitle } from "@/components/UI/title/title";
import { paymentService } from "@/service/paymentService";
import { OrderProps } from "@/types/UI/order/orderProps";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Style from './order.module.scss';
export default function Orders() {
    const [rev,setRev] = useState([]);
const {data} = useQuery({
    queryKey:['getOrders'],
    queryFn:()=> paymentService.getOrders()
})
useEffect(()=> {
if(data) {
    setRev(data.info.reverse())
}
},[data])

    return(
           <BigContainer className="xxs:px-1 h-[100vh]" >
           <div className="mb-[50px]"><ProductPageTitle>Мои заказы</ProductPageTitle></div>
        <div className={`pb-[20px] flex flex-col gap-[25px]   ${Style.order_page}`}>{
            rev&&
            Array.isArray(rev) && rev.length >0 &&
           rev.map((e:OrderProps)=> (
                <Order fullName={e.fullName} address={e.address} createdAt={e.createdAt} email={e.email} id={e.id} items={e.items} paymentId={e.paymentId} phone={e.phone} status={e.status} token={e.token} totalAmount={e.totalAmount} userId={e.userId} comment={e.comment} key={e.id} />
            )) 
            }</div>   
              </BigContainer>
    )
}