'use client'
import { useProducts } from "@/hook/getProduct";
import { useLogged } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { cartService } from "@/service/cartService";
import { ProductCartLoading } from "@/components/UI/productCart/productCart";
import { Container } from "@/components/UI/container/container";
import { ProductPayload } from "@/types/payload/productPayload";
import { ProductCart } from "@/components/UI/productCart/productCart";
import './products.scss';
export default function Products  () {
    const {filteredProducts,category,status} = useProducts();

const {logged,setLogged} = useLogged()
const {data:cartData} = useQuery({
  queryKey:['cartItems'],
  queryFn:()=> cartService.getCartItem()
})
return(
     <div className="w-full flex flex-col">
         {status == null ? <div className="grid grid-cols-3 gap-12 813max:grid-cols-2 571max:grid-cols-1 skelet">{Array.from({ length: 8 }, (_, index) => {
                 return(
                     <ProductCartLoading key={index}/>
                 )
               })}</div>  :  status == true ? category.map((e:any)=>(
          <Container id={e.name} key={e.id} title={e.name}>
            {
              e.products.map((e:ProductPayload)=> {
                if(logged==true) {
        const cartItem =Array.isArray(cartData) && cartData.find((item: any) => item.productId === e.id);
        const inCart = !!cartItem; 
        const cartQuantity = cartItem ? cartItem.quantity : 0; 
        const cartItemId = cartItem ? cartItem.id : null; 
               return(<ProductCart ingredients={e.ingredients} key={e.id} description={e.description} img={e.imageUrl} inCart={inCart} cartItemId={cartItemId} cartQuantity={cartQuantity} name={e.name} price={e.price} productId={e.id} size={e.productItem[0]?.size}  type={e.productItem[0]?.pizzaType}/>)
    }
    else {
      return(<ProductCart key={e.id} ingredients={e.ingredients} description={e.description} img={e.imageUrl} inCart={false}  name={e.name} price={e.price} productId={e.id} size={e.productItem[0]?.size} type={e.productItem[0]?.pizzaType}/>)
    }
    })
            }
          </Container>
         )):<div className=" skelet grid grid-cols-3 gap-6 813max:grid-cols-2 571max:grid-cols-1">{filteredProducts.length == 0 ? <div className="text-[22px] font-[600]">Не найдено продуктов...</div> : filteredProducts?.map((e:ProductPayload)=>{
         
             
                if(logged==true) {
        const cartItem =Array.isArray(cartData) && cartData.find((item: any) => item.productId === e.id);
        const inCart = !!cartItem; 
        const cartQuantity = cartItem ? cartItem.quantity : 0; 
        const cartItemId = cartItem ? cartItem.id : null; 
               return(<ProductCart ingredients={e.ingredients} key={e.id} description={e.description} img={e.imageUrl} inCart={inCart} cartItemId={cartItemId} cartQuantity={cartQuantity} name={e.name} price={e.price} productId={e.id} size={e.productItem[0]?.size}  type={e.productItem[0]?.pizzaType}/>)
    }
    else {
      return(<ProductCart key={e.id} ingredients={e.ingredients} description={e.description} img={e.imageUrl} inCart={false}  name={e.name} price={e.price} productId={e.id} size={e.productItem[0]?.size} type={e.productItem[0]?.pizzaType}/>)
    }
 
          
})}</div>}
         </div>
)
}