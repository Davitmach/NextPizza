'use client';

import { ProductCart, ProductCartLoading } from "@/components/UI/productCart/productCart";
import { Title } from "@/components/UI/title/title";
import { cartService } from "@/service/cartService";
import { productService } from "@/service/productService";
import { userService } from "@/service/userService";
import { useLogged } from "@/store";
import { ProductPayload } from "@/types/payload/productPayload";
import { cartItemsProps } from "@/types/UI/cartItems/cartItemsProps";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const Recommend = ({Data}:{Data:ProductPayload})=> {
    

  const [data,setData] = useState<ProductPayload[]|null>(null);
  const [filter,setFilter] = useState<ProductPayload[]|null>(null);

const {logged,setLogged} = useLogged()
const {data:cartData} = useQuery({
    queryKey:['cartItems'],
    queryFn:()=> cartService.getCartItem()
})

  useEffect(()=> {
productService.getProducts().then((e)=> {
    if(e) {
        if(Array.isArray(e) && e.length >0) {
            const filter = e.filter((e)=> e.id !== Data.id)
        setData(filter);
        }
    }
})
  },[])
const MatchesName = (target:string,product:string)=> {
    const targetNameChars = new Set(target.toLowerCase());
    const productNameChars = product.toLowerCase();
    let matchCount = 0;

    for (const char of productNameChars) {
      if (targetNameChars.has(char)) {
        matchCount++;
        if (matchCount >= 6) return true;
      }
    }

    return false;
}


  useEffect(()=> {
  
    
if(Array.isArray(data) && data.length >0) {
const filter = data.filter((e)=> e.price <= Data.price && MatchesName(Data.name,e.name)).slice(0,4);
setFilter(filter);

}
  },[data])




    return(
       <div className="flex flex-col gap-4 py-[50px] w-full">
        <div><Title>Рекомендаций</Title></div>
        <div className="w-full grid grid-cols-[repeat(4,minmax(140px,1fr))] gap-9 1073max:grid-cols-[repeat(3,minmax(140px,1fr))] 937max:grid-cols-[repeat(2,minmax(140px,1fr))] 653max:grid-cols-[repeat(1,minmax(140px,1fr))]">
        {!data || !cartData? <>{Array.from({ length: 4 }, (_, index) => {
        return(
            <ProductCartLoading key={index}/>
        )
      })} </> : logged == true ? cartData && Array.isArray(filter) && filter.length > 0 &&
  filter?.map((e) => {
 
    const cartItem = cartData.find((item: any) => item.productId === e.id);
    const inCart = !!cartItem; 
    const cartQuantity = cartItem ? cartItem.quantity : 0; 
    const cartItemId = cartItem ? cartItem.id : null; 
    return (
      <ProductCart
        cartQuantity={cartQuantity}
        cartItemId={cartItemId}
        key={e.id}
        inCart={inCart}
        size={e.productItem[0]?.size}
        type={e.productItem[0]?.pizzaType}
        description={e.description}
        img={e.imageUrl}
        name={e.name}
        price={e.price}
        productId={e.id}
      />
    );
  }) :  filter?.map((e) => {
 
   
    return (
      <ProductCart   
        key={e.id}
        inCart={false}
        size={e.productItem[0]?.size}
        type={e.productItem[0]?.pizzaType}
        description={e.description}
        img={e.imageUrl}
        name={e.name}
        price={e.price}
        productId={e.id}
      />
    );
  }) }



        </div>
       </div>
    )
}