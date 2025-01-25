import { OrderPageProps } from '@/types/UI/order/orderProps';
import Style from './orderPage.module.scss';
import Image from 'next/image';
export const OrderPage = (props:OrderPageProps)=> {
  
    return(
        <div className={`${Style.orderPage} overflow-y-auto py-[35px] flex flex-col justify-between  ${props.active == true ? Style.fadeIn : Style.fadeOut} bg-white -translate-y-6 rounded-b-[30px]`}>

            <div className='flex  flex-col gap-[20px]'>
                {props.items.map((e,index)=> (
                    <div key={e.id} className={`mb-[10px] border-t border-t-gray-cartBorder px-[27px] xxs:px-[15px] flex w-full items-center justify-between pt-[20px]  `}>
                        <div className='flex items-center justify-center gap-2 653max:flex-col 653max:items-start'>
                            <div><Image alt='img' src={e.product.imageUrl} width={65} height={65}/></div>
                            <div>
                                <div><h1>{e.product.name}</h1></div>
                                <div><span className="text-gray-description text-[14px] font-[400]">{e.size == 1 ? 'Маленькая 20 см' : e.size=== 2 ? 'Средняя 30см' :'Большая 35см'},{e.type === 1 ? 'Тонкое тесто':'Традиционное тесто'}{index == props.items.length-1 ? e.ingredients.length>0 && ` + ${e.ingredients.map((e)=> e.ingredient.name)}` : e.ingredients.length>0 && ` + ${e.ingredients.map((e)=> e.ingredient.name+', ')}`}</span></div>
                            </div>
                        </div>
                        <div className='flex flex-col items-end'>
                            <div><h1 className='font-[700] text-[16px] text-black-label text-nowrap'>{e.price} ₽</h1></div>
                            <div><span className='text-gray-description font-[400] text-[14px]'>{e.quantity} шт.</span></div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='border-t border-t-gray-cartBorder px-[27px] xxs:px-[15px] pt-[20px]'>
                <h1 className='text-black-label font-[800] text-[20px] flex items-center justify-start gap-2'><span className='text-black-label font-[400] text-[20px]'>Итого:</span> {props.totalAmount} ₽</h1>
            </div>
        </div>
    )
}