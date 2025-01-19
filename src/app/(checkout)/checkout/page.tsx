'use client';
import { CheckoutPay } from "@/components/shared/cartPay/cartPay";
import { HeaderCheckOut } from "@/components/shared/header/header";
import { cartService } from "@/service/cartService";
import { useEffect, useState } from "react";
import { useLogged } from "@/store";
import { useRouter } from "next/navigation";
import { userService } from "@/service/userService";
import { useQuery } from "@tanstack/react-query";
import { BigLoading } from "@/components/shared/loading/loading";
export default function CheckOut() {
    
    const {push} = useRouter();

const [total,setTotal] = useState({

})
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
     <div>
        <div></div>
        <div><CheckoutPay tax={1} total={3} price={3} delivery={3}/></div>
     </div>
     </>
    )
}