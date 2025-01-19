"use client";
import { useRouter } from "next/navigation";
import Style from "./modal.module.scss";
import { VscChromeClose } from "react-icons/vsc";
import { useEffect, useState, useRef, useCallback } from "react";
import { productService } from "@/service/productService";
import { useNotification } from "@/context/notification";
import { ProductPayload } from "@/types/payload/productPayload";
import { Toggle } from "@/components/UI/toggle/toggle";
import { BigLoading } from "../loading/loading";
import { PizzaImg } from "@/components/UI/pizzaImg/pizzaImg";
import { ProductInfo } from "@/components/UI/productInfo/productInfo";
import { ModalTitle } from "@/components/UI/title/title";
import Image from "next/image";
import { IngredientsBox } from "../ingredients/ingredients";
import { ingredientsService } from "@/service/ingredientsService";
import { Ingredients } from "@/types/UI/ingredients/ingredients";
import { Button } from "@/components/UI/button/button";
import { cartService } from "@/service/cartService";
import { FaArrowDown } from "react-icons/fa6";
import { useQueryClient } from "@tanstack/react-query";
export const ModalPage = ({ id }: { id: number }) => {
  const { showNotification } = useNotification();
  const { back } = useRouter();
  const [active, setActive] = useState<string | null>(null);
  const [activeType, setActiveType] = useState<string | null>(null);
  const [data, setData] = useState<ProductPayload | null>(null);
  const [ingredients,setIngredients] = useState<Ingredients[]|null>(null)
  const [startY, setStartY] = useState(0); 
  const [deltaY, setDeltaY] = useState(0); 
  const [isDragging, setIsDragging] = useState(false); 
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [activeIngredient,setActiveIngredient] = useState<number[]>([])
const [ios,setIos] = useState<boolean>(false);
const [phone,setPhone] = useState<boolean>(false);
const query = useQueryClient(); 

  useEffect(() => {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream) {
      setIos(true);
      setPhone(true); 
    }
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0) {
      setPhone(true); 
     
  }

  
   
    const Id = Number(id);
    productService.getProduct(Id).then((e) => {
      if (e) {
        if(Array.isArray(e.productItem) && e.productItem.length >0) {
            ingredientsService.getIngredients().then((e)=> {
                setIngredients(e)               
            })
        }        
        setData(e);
      } else {
        showNotification("Не найден продукт", "error");
      }
    });
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1181);  
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize)
    
    };
  }, []);

  useEffect(() => {
    // Запрещаем прокрутку на body страницы
    document.body.style.overflow = "hidden";

    // Добавляем обработчики событий для предотвращения прокрутки за пределами модального окна
    const preventScroll = (e: TouchEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        e.preventDefault();
      }
    };

    // Добавляем обработчик событий для предотвращения прокрутки на странице
    window.addEventListener("touchstart", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      window.removeEventListener("touchstart", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      document.body.style.overflow = "auto"; // Восстанавливаем прокрутку на body при закрытии модалки
    };
  }, []);;

  const HandleClose = () => {
    const Modal = modalRef.current;
    if (Modal) {
      Modal.classList.toggle(Style.closeAnim);

      Modal.addEventListener("animationend", () => {
        document.body.style.overflow= 'auto';
        back();
        
      });
    }
  };
const HandleCloseIos = ()=> {
  if (modalRef.current) {

    modalRef.current.style.transition = "transform 0.3s ease"; 
    modalRef.current.style.transform = `translateY(100vh)`;  
  }


  setTimeout(() => {
    document.body.style.overflow= 'auto';
    back()
  }, 300);

}
  const handleTouchStart = (e: React.TouchEvent) => {
    if (modalRef.current && modalRef.current.scrollTop === 0) {  
    setStartY(e.touches[0].clientY); 
    setIsDragging(true);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !isSmallScreen) return;  

    const touchMoveY = e.touches[0].clientY;
    const newDeltaY = touchMoveY - startY; 
    if (newDeltaY > 0) {
      if (modalRef.current) {
        if (modalRef.current.scrollTop === 0) {  
        setDeltaY(newDeltaY);
        modalRef.current.style.transition = "none"; 
        modalRef.current.style.transform = `translateY(${newDeltaY * 0.4}px)`; 
      }}
    }
  };

  const handleTouchEnd = () => {
    if (!isSmallScreen) return; 


    if (deltaY > 200) {
      if (modalRef.current) {

        modalRef.current.style.transition = "transform 0.3s ease"; 
        modalRef.current.style.transform = `translateY(100vh)`;  
      }

 
      setTimeout(() => {
        document.body.style.overflow= 'auto';
        back()
      }, 300);
    } else {
  
      if (modalRef.current) {
        modalRef.current.style.transition = "transform 0.3s ease";
        modalRef.current.style.transform = "translateY(0px)";
      }
    }

    
    setIsDragging(false);
    setDeltaY(0);
  };
  const calculateIngredientsPrice = () => {
    if (!ingredients) return 0;

    const selectedIngredients = ingredients.filter((ingredient) =>
      activeIngredient.includes(ingredient.id)
    );
    return selectedIngredients.reduce((total, ingredient) => total + ingredient.price, 0);
  };
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
  return (
    <div
      onClick={(e) => {
        const Div = e.target as HTMLElement;
        if (Div.classList.contains("Modal_Container")) {
          HandleClose();
        }
      }}
      className={`${Style.Modal_container} Modal_Container  absolute left-0 top-0 bg-black-modalBg w-full h-[100vh] z-[300000] flex items-center justify-center`}
    >
      
      <div
        ref={modalRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`Modal ${Style.adaptive} rounded-[30px] w-[1000px] flex items-center justify-between bg-white h-[580px] relative ${Style.openAnim}`}
      >
        {phone == true && <div onClick={()=>{
         HandleCloseIos()
          
        }} className=" z-50 absolute left-[20px] top-[20px] rounded-full border border-black-label w-[40px] h-[40px] flex items-center justify-center"><FaArrowDown/></div>}
        {!data ? (
          <BigLoading />
        ) : (
          <>
          {Array.isArray(data.productItem) && data.productItem.length>0 ?<PizzaImg state={active} img={data.imageUrl}/> :<div className="flex-[1 1 500px] flex items-center justify-center"> <Image src={data.imageUrl} alt="Img" width={300} height={300} /></div>}
            <div className={` flex items-center justify-between w-full h-full`}>
              <div className={`${Style.info_box} bg-white-cart h-full flex-1 box-border px-[40px] py-[38px] rounded-r-[30px] flex flex-col justify-between`}>
               <div>
                <ModalTitle>{data.name}</ModalTitle>
                {data.productItem.length==0 ? <ProductInfo>{data.description}</ProductInfo> : ''}
                </div>
              { Array.isArray(data.productItem) && data.productItem.length>0 && <ProductInfo>{`${active =='Маленькая' ? '25см, ': active == 'Средняя' ? '30см, ':'35см, '}${activeType} тесто, ${active == 'Маленькая' &&activeType == 'Тонкое' ? '300 г': active =='Маленькая' && activeType == 'Традиционное' ? '400 г' : active == 'Средняя' && activeType == 'Тонкое'? '450 г': active == 'Средняя' && activeType == 'Традиционное' ? '500 г': active =='Большая' && activeType == 'Тонкое'? '550 г':active =='Большая' && activeType =='Традиционное' &&'600 г'}`}</ProductInfo>}
               <div className="mt-[20px] flex flex-col gap-[10px]">
              {  Array.isArray(data.productItem) && data.productItem.length>0 && (<> <Toggle
                  class={"ToggleSize"}
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
                  class={"ToggleType"}
                  active={activeType}
                  func={setActiveType}
                  arguments={data.productItem[0].pizzaType ===1 ? ['Тонкое']: ['Тонкое','Традиционное']}
                /></>)}
                {Array.isArray(data.productItem) && data.productItem.length>0 && ingredients && <IngredientsBox data={data.ingredients} active={activeIngredient} func={setActiveIngredient} ingredients={ingredients}/>}
               <Button className={ios==true ? 'mb-[100px]' :''}  func={Buy} variant='orange' status={false} size="default">Добавить в корзину за {data.price + calculateIngredientsPrice()}₽</Button>
                </div>
              </div>
            </div>
          </>
        )}
        <div className={`${Style.closeBtn} Close absolute top-0 -right-[50px]`}>
          <VscChromeClose
            onClick={() => {
              HandleClose();
            }}
            className="text-[40px] text-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
