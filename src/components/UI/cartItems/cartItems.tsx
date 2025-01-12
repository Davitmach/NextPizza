    'use client';
    import { cartItemsProps } from "@/types/UI/cartItems/cartItemsProps"
    import Image from "next/image";
    import {  LittleCounter } from "../counter/counter";
    import { useCallback, useEffect, useMemo, useState } from "react";
    import { cartService } from "@/service/cartService";
    import { useNotification } from "@/context/notification";
    import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { CartItemsType } from "@/types/payload/cartItemsData";
import { useQueryClient } from "@tanstack/react-query";
import { BigLoading } from "@/components/shared/loading/loading";
    export const CartItems =(props:cartItemsProps)=> {
        const {back,push} = useRouter();
        const queryClient = useQueryClient();
        const [stock,setStock] = useState<number>(0);
        const {showNotification} = useNotification();
        const [data,setData] = useState<boolean>(false);
        const Img = props.img;
        const Ingredients = props.ingredients;
        const Name = props.name;
        const Price = props.price;
        const Size = props.size;
        const Type = props.type;
        const Stock = props.stock;
        const Id = props.id;
        const ProductId = props.productId;
        const Func = props.func;
        const {data:cartStockData,isSuccess,error} = useQuery({
            queryKey:[`${Id}cartStock`],
            queryFn:()=> cartService.getProductQuantity(ProductId),
        })

useEffect(()=> {
if(cartStockData) {
    setData(true);
    setStock(cartStockData);
}
},[cartStockData])

        const {mutate:plusMutate,isPending:plusPending} = useMutation({
            mutationKey: ['mutateStock'],
            mutationFn: () => cartService.incrementCartItemQuantity(Id, ProductId),
            onSuccess: () => {
                queryClient.invalidateQueries<any>([`${Id}cartStock`,'payTotal']);               
                showNotification('Успешно увеличили количество', 'success');
            },
            onError: () => {
                showNotification('Ошибка при увеличении количества', 'error');
            },
            
        });
    
        const {mutate:minusMutate,isPending:minusPending} = useMutation({
            mutationKey: ['mutateStock'],
            mutationFn: () => cartService.dicrementCartItemQuantity(Id, ProductId),
            onSuccess: () => {
                queryClient.invalidateQueries<any>([`${Id}cartStock`,,'payTotal']);
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
            
            <>
            {plusPending || minusPending ?<BigLoading/> :''}
        <div  className="flex bg-white w-full p-[20px] gap-[24px] cursor-pointer">
            <div onClick={()=> {
Func(true)
back()
setTimeout(() => {
    push(`/product/${ProductId}`);
}, 1);
    
      
            
        }}><Image src={Img} alt="Img" width={65} height={65}/></div>
            <div className="flex flex-col gap-[12px] w-full">
                <div className="border-b border-b-gray-cartBorder pb-[12px]" onClick={()=> {
Func(true)
back()
setTimeout(() => {
    push(`/product/${ProductId}`); // После возврата делаем переход
}, 1);

            
        }}>
                    <div><h1 className="text-black-label font-[700] text-[16px] ">{Name}</h1></div>
                    <div><span className="text-gray-description text-[14px] font-[400]">{Size} {Size && Type && 'см,'} {Type} {Array.isArray(Ingredients) && `+ ${Ingredients.map((e)=> (` ${e}`))}`}</span></div>
                </div>
                <div className="flex items-center justify-between">
                    <LittleCounter firstFunc={Minus} secondFunc={Plus}  defaultState={data == false ?Stock :stock}/>
                    <div><h1 className="text-black-label text-[16px] font-[700]">{Price} ₽</h1></div>
                </div>
            </div>
        </div>
        </>
        )
    }