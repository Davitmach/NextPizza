import { Counter } from "@/components/UI/counter/counter";
import { CheckoutCartItemsProps } from "@/types/UI/checkout/checkoutCartItemsProps"
import Image from "next/image"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNotification } from "@/context/notification";
import { cartService } from "@/service/cartService";
import { useCallback } from "react";
import { ProductPayload } from "@/types/payload/productPayload";
export const CheckoutCartItems = (props:CheckoutCartItemsProps)=> { 
    const queryClient = useQueryClient();
    const {showNotification} = useNotification();

    const {mutate:plusMutate,isPending:plusPending} = useMutation({
        mutationKey: ['mutateStock'],
        mutationFn: () => cartService.incrementCartItemQuantity(props.cartItemId, props.productId),
        onSuccess: () => {
            queryClient.invalidateQueries<any>([`${props.cartItemId}cartStock`,'payTotal']);               
            showNotification('Успешно увеличили количество', 'success');
        },
        onError: () => {
            showNotification('Ошибка при увеличении количества', 'error');
        },
        
    });

    const {mutate:minusMutate,isPending:minusPending} = useMutation({
        mutationKey: ['mutateStock'],
        mutationFn: () => cartService.dicrementCartItemQuantity(props.cartItemId, props.productId),
        onSuccess: () => {
            queryClient.invalidateQueries<any>([`${props.cartItemId}cartStock`,,'payTotal']);
            showNotification('Успешно уменьшили количество', 'success');
        },
        onError: () => {
            showNotification('Ошибка при уменьшении количества', 'error');
        }
    });

    const Minus = useCallback(() => {
        minusMutate() 
    }, [minusMutate]);

    const Plus = useCallback(() => {
        plusMutate()       
    }, [plusMutate]);
    return(
        <div className="border-b border-gray-cartBorder py-[20px] flex items-center justify-between gap-3">
            <div className="inline-flex items-center justify-center gap-5 571max:flex-col">
                <div><Image alt="img" priority src={props.img} width={65} height={65} /></div>
                <div>
                    <div><h1 className="text-[16px] font-[700] text-black-label">{props.name}</h1></div>
                    <div><span className="text-gray-description text-[14px] font-[400]">{props.size == 1 ? 'Маленькая 20 см' : props.size === 2 ? 'Средняя 30см' :'Большая 35см'},{props.type === 1 ? 'Тонкое тесто':'Традиционное тесто'}</span></div>
                </div>
            </div>
            <div className="text-[16px] font-[700] text-black-label text-nowrap">{props.price} ₽</div>
            <div>
                <Counter defaultState={props.count}  firstFunc={Minus} secondFunc={Plus}/>
            </div>
        </div>
    )
}





