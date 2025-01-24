'use client';
import { CheckoutPay } from "@/components/shared/cartPay/cartPay";
import { HeaderCheckOut } from "@/components/shared/header/header";
import { cartService } from "@/service/cartService";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLogged, usePayed } from "@/store";
import { useRouter } from "next/navigation";
import { userService } from "@/service/userService";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { BigLoading } from "@/components/shared/loading/loading";
import { CheckoutContainer } from "@/components/shared/checkoutContainer/checkoutContainer";
import { ProductPageTitle } from "@/components/UI/title/title";
import { BigContainer } from "@/components/UI/container/container";
import { Notifications } from "@/components/shared/notification/notification";
export default function CheckOut() {
const {setPayed} = usePayed();
const query = useQueryClient()
    const {push} = useRouter();

const [total,setTotal] = useState({
tax:null,
total:null,
price:null,
delivery:null
})
const {data:totalData,isSuccess} = useQuery({
    queryKey:['getTotal'],
    queryFn:()=> cartService.getTotal(), 
})
useEffect(()=> {
if(isSuccess == true) {
    query.setQueryData(['totalData'],totalData)
}
},[isSuccess])

useEffect(() => {
    if (totalData) {
      setTotal({
        tax: totalData.tax,
        total: totalData.full,
        price: totalData.total,
        delivery: totalData.delivery,
      });
    }
  }, [totalData]);

const Buy = useCallback(()=> {
    setPayed(true)
    
},[])

const {data,isLoading} = useQuery({
    queryKey:['checkLogCheckout'],
    queryFn:()=> userService.CheckLogged()
})
useEffect(()=> {
    if(data && data.status == false) {
        push('/notOpen')
    }
},[data])


    return(<>{isLoading && <div className="z-50 fixed w-full h-[100vh] left-0 top-0 bg-gray-background"><BigLoading/></div> }
     <BigContainer className="xxs:px-1" >
        <div className="mb-[50px]"><ProductPageTitle>Оформление заказа</ProductPageTitle></div>
        <div className="flex w-full justify-between gap-[45px] l:flex-col-reverse">
        <div className="w-full"><CheckoutContainer/></div>
        <div><CheckoutPay function={Buy} tax={total.tax} total={total.total} price={total.price} delivery={total.delivery}/></div>
        </div>
        </BigContainer>


     </>
    )
}