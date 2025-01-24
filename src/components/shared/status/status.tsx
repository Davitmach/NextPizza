import { OrderStatus } from "@/types/UI/order/orderProps"

interface IStatus {

    status:OrderStatus,
    id:string
}
export const Status = (props:IStatus)=> {
    if(props.status == 'SUCCEEDED') {
        return(
            <div className="cursor-pointer flex items-center justify-center px-[10px] h-[35px] text-nowrap bg-green-bg text-green-text font-[600] text-[14px] rounded-[20px] ">Оплачено</div>
        )
    }
    else if(props.status == 'PENDING') {
        return(
            <div onClick={()=> {
                document.location.href= `https://yoomoney.ru/checkout/payments/v2/contract?orderId=${props.id}`
            }} className="text-nowrap cursor-pointer flex items-center justify-center px-[10px]  h-[35px] bg-yellow-bg text-yellow-text font-[600] text-[14px] rounded-[20px] ">В ожидании</div>
        )
    }
    else {
        return(
            <div className=" text-nowrapcursor-pointer flex items-center justify-center  px-[10px] h-[35px] bg-red-bg text-red-text font-[600] text-[14px] rounded-[20px] ">Отклонено</div>
        ) 
    }
}