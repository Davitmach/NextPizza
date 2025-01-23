'use client'
import { productService } from "@/service/productService";
import { ProductPayload } from "@/types/payload/productPayload";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState ,useCallback} from "react";
import Image from "next/image";
import { BigLoading } from "@/components/shared/loading/loading";
import { ProductPageTitle } from "@/components/UI/title/title";
import { ProductInfo } from "@/components/UI/productInfo/productInfo";
import { Ingredients } from "@/types/UI/ingredients/ingredients";
import { Toggle } from "@/components/UI/toggle/toggle";
import { IngredientsBoxPage } from "@/components/shared/ingredients/ingredients";
import { ingredientsService } from "@/service/ingredientsService";
import { useNotification } from "@/context/notification";
import { cartService } from "@/service/cartService";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/UI/button/button";
import { Notifications } from "@/components/shared/notification/notification";
import { categoryService } from "@/service/categoryService";
import { Recommend } from "@/components/shared/recommend/recommend";
export default function Page() {
    const query = useQueryClient();
    const {replace} =useRouter();
    const {showNotification} = useNotification();
    const [data,setData] = useState<ProductPayload | null>(null)
    const [active, setActive] = useState<string | null>(null);
  const [activeType, setActiveType] = useState<string | null>(null);
  const [ingredients,setIngredients] = useState<Ingredients[]|null>(null);
  const [activeIngredient,setActiveIngredient] = useState<number[]>([]);
  const [category,setCategory] = useState<any>(null);

const {id} = useParams();
    useEffect(()=> {
        if(id) {
productService.getProduct(Number(id)).then((e)=> {
    if(e) {
          if(Array.isArray(e.productItem) && e.productItem.length >0) {
                    ingredientsService.getIngredients().then((e)=> {
                        setIngredients(e)
                       
                    })
                }
        setData(e)


       
    }
    
})
        }
    },[id])

    const calculateIngredientsPrice = () => {
        if (!ingredients) return 0;
    
        const selectedIngredients = ingredients.filter((ingredient) =>
          activeIngredient.includes(ingredient.id)
        );
        return selectedIngredients.reduce((total, ingredient) => total + ingredient.price, 0);
      };
    useEffect(()=> {
     
        
        if(data) {
 categoryService.getCategory().then((e)=> {
                            if(e && Array.isArray(e) && e.length>0 && data) {    
                               setCategory(e.find((e)=> e.id == data.categoryId))
                            
                                
                            }
                            
                        })
                    }

    },[data])
    const Buy = useCallback(()=> { 
        showNotification('Вы добавили товар в козину','info')  
     if(data)cartService.addCartItem(data.id,1,data.price,activeIngredient,activeType == 'Тонкое' ? 1: 2,active == 'Маленькая'? 1:active == 'Средняя'? 2:3).then((e)=> {
      if(!e.info) {
      showNotification('Товар успешно добавлен','success')  
      query.invalidateQueries<any>(['cartBtnTotal'])
      query.invalidateQueries<any>(['cartBtnCount'])
      }
      else {
        showNotification('Вы не вошли в аккаунт','error')  
      }
     }).catch((e)=> {
      showNotification('Произошла ошибка','error')  
        
     })
        
    },[data, active, activeType, activeIngredient])



  if(!data) {
    return(
        <BigLoading/>
    )
  }
  else {
    return(<>
        <div className="flex flex-col items-center product_container mt-[100px] px-[74px] 571max:px-[30px] 571max:mt-[30px] max-w-[1478px] mx-auto">
        {category && data &&  <div className="w-full text-left cursor-pointer mb-[40px] font-[400] text-[14px] flex justify-start text-black-breadScrumbs"><span onClick={()=> {
replace('/')
            }}>Главная</span> / {category?.name} / <span className="text-black-breadTransparent ">{data?.name}</span> </div> }  
            <div className="flex items-start justify-between 1133max:flex-col gap-8 w-full 1133max:items-center ">
          
                <div className=" bg-white-productCart rounded-[20px] inline-flex p-[35px] max-w-[570px] 1133max:w-full "><Image alt="img" width={500} height={500} src={data.imageUrl}/></div>
                <div className="Info  max-w-[631px] w-full flex flex-col items-left 1360max:max-w-[430px] 1133max:w-full 1133max:max-w-full  ">
                    <ProductPageTitle>{data.name}</ProductPageTitle>
                     { Array.isArray(data.productItem) && data.productItem.length>0 && <ProductInfo>{`${active =='Маленькая' ? '25см, ': active == 'Средняя' ? '30см, ':'35см, '}${activeType} тесто, ${active == 'Маленькая' &&activeType == 'Тонкое' ? '300 г': active =='Маленькая' && activeType == 'Традиционное' ? '400 г' : active == 'Средняя' && activeType == 'Тонкое'? '450 г': active == 'Средняя' && activeType == 'Традиционное' ? '500 г': active =='Большая' && activeType == 'Тонкое'? '550 г':active =='Большая' && activeType =='Традиционное' &&'600 г'}`}</ProductInfo>}
                {  Array.isArray(data.productItem) && data.productItem.length>0 && (<div className="my-[25px] w-[420px] 571max:w-full flex flex-col gap-[20px]"> <Toggle 
                                class={"ProductPageToggleSize"}
                                active={active}
                                func={setActive}
                                arguments={
                                  data.productItem[0].size == 1
                                    ? ["Маленькая"]
                                    : data.productItem[0].size == 2
                                    ? ["Маленькая", "Средняя"]
                                    : ["Маленькая", "Средняя", "Большая"]
                                }
                              />
                                <Toggle 
                                class={"ProductPageToggleType"}
                                active={activeType}
                                func={setActiveType}
                                arguments={data.productItem[0].pizzaType ===1 ? ['Тонкое']: ['Тонкое','Традиционное']}
                              /></div>)}
                                 {Array.isArray(data.productItem) && data.productItem.length>0 && ingredients && <IngredientsBoxPage  data={data.ingredients} active={activeIngredient} func={setActiveIngredient} ingredients={ingredients}/>}
              <div className=" w-[297px]"> <Button className="!my-[63px]" func={Buy} variant='orange' status={false} size='default'>Добавить в корзину за {data.price + calculateIngredientsPrice()}₽</Button></div> 
                </div>
            </div>
    <Recommend Data={data}  />
        </div>

  
        </>
    )
  }
    
}