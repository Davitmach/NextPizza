"use client";
import { useRef, useState, useCallback, useEffect } from "react";
import { useQuery, useQueryClient } from '@tanstack/react-query';
import CartStyle from "../emptyCart/cart.module.scss";
import Style from './cartItemsPage.module.scss'
import { useRouter } from "next/navigation";
import { Xmark} from "@/components/UI/xmark/xmark";
import { CartItems } from "@/components/UI/cartItems/cartItems";
import { cartService } from "@/service/cartService";
import { CartPay } from "../cartPay/cartPay";
import { CartItemsType } from "@/types/payload/cartItemsData";
import { Loading } from "../loading/loading";
import { useNotification } from "@/context/notification";
export const CartItemsPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const {showNotification} = useNotification()
  const { back } = useRouter();
  const [disable, setDisable] = useState(false);
  const [sort,setSort] = useState([]);

  const Back = useCallback(() => {
    setDisable(true);
    ref.current?.addEventListener("animationend", () => {
      back();
      document.body.style.overflow = 'auto'
    });
  }, []);

const { data, error, isLoading } = useQuery({
  queryKey:['cartItems'],
  queryFn:()=> cartService.getCartItem()
});
useEffect(()=> {  
  if(data) {
   setSort(data?.sort((a:{product:{name:string}}, b:{product:{name:string}}) => {
      if (a.product.name.toLowerCase() < b.product.name.toLowerCase()) return -1;
      if (a.product.name.toLowerCase() > b.product.name.toLowerCase()) return 1;
      return 0;
    }))
  }
  if(error) {
showNotification('Ошибка в получений данных','error')
  }  
},[error,data])

  return (
    <>
      <div
        ref={ref}
        className={`${
          CartStyle.cart
        } flex !bg-white-cart flex-col justify-between items-center ${
          disable == true && CartStyle.disable
        }`}
      >
        <div className={`${Style.cart_page} First_row w-full m-h-[615px] overflow-y-auto`}>
          <div className="flex items-center justify-between p-[20px] ">
            <div>
              <span className="font-[400] text-[20px] text-black-label flex items-center justify-center gap-[6px]">
                В корзине{" "}
                <h1 className="font-[700] text-[20px] text-black-label">
                  {data?.length} товара
                </h1>
              </span>
            </div>
            <div>
              <Xmark func={Back} />
            </div>
          </div>
          <div className="Items_box w-full flex flex-col items-center gap-[10px]">
{isLoading ? <Loading type='orange' width={30} borderWidth={5} /> : sort?.map((e:CartItemsType,index:number)=> (
  <CartItems func={setDisable} key={index} productId={e.productId} id={e.id} 
   img={e.product.imageUrl}   name={e.product.name} price={(e.price * e.quantity) + e.ingredients.reduce((sum:number, ingredient:any) => sum + ingredient.ingredient.price, 0)} size={!e.size ? '' :
    e.size === 1
      ? "Маленькая 20"
      : e.size === 2
      ? "Средняя 30"
      : e.size === 3
      ? "Большая 35"
      : "Маленькая 20"
  } type={!e.type? '' : e.type == 1
    ? 'тонкое'
    :'традиционное'
    } stock={e.quantity}
    {...(e.ingredients.length > 0 && { ingredients:e.ingredients.map((e:any )=> e.ingredient.name) })}
    />
))}
          </div>
        </div>
        <div className="Second_row w-full"><CartPay/></div>
      </div>
    </>
  );
};
