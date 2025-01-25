"use client";
import { useRef, useState, useEffect, forwardRef } from "react";
import Style from "./input.module.scss";
import { InputProps, PriceInput } from "@/types/UI/input/InputProps";
import { SearchedData } from "@/types/class/searchService";
import Image from "next/image";
import { HighlightedSearch } from "@/utils/highlightSearch";
import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";
import Cookie from 'js-cookie'
import { FaXmark } from "react-icons/fa6";
import { productService } from "@/service/productService";
import { Loading } from "@/components/shared/loading/loading";
import { useNotification } from "@/context/notification";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, Label, InputType, ErrorMessage, ErrorState, className,required }, ref) => {
    return (
      <div className={`input-wrapper ${className || ""}`}>
        
        <label className="block text-black-label text-[14px]  font-[700]">
          {Label}
        </label>

        
        <input
        required={required}
          type={InputType}
          placeholder={placeholder}
          ref={ref}
          className={` w-full px-4 py-[13px] border rounded-lg outline-none  ${
            ErrorState ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
          }`}
         
        />
       

   
        {ErrorMessage && ErrorState ? (
          <span className="text-red-500 text-sm mt-1 h-[30px]">{ErrorMessage}</span>
        ) : <span className="text-red-500 text-sm mt-1 h-[30px]"></span>}
      </div>
    );
  }
);


Input.displayName = "Input";
export const Header_input = () => {
  const {showNotification} = useNotification()
  const { push } = useRouter();
  const [products,setProduct] = useState<SearchedData[]|null>(null)
  const [active, setActive] = useState<boolean>(false);
  const [searchValue, setValue] = useState<string>("");
  const [filterProduct,setFilter] = useState<SearchedData[] |null>(null)
  const ref = useRef<HTMLInputElement>(null);

useEffect(()=> {
if(Array.isArray(filterProduct) && filterProduct.length >0) {
  setActive(true)
}
else {
  setActive(false);
}

},[filterProduct])
  useEffect(()=> {
productService.getProducts().then((e)=> {
  setProduct(e)  
})
  },[])
  useEffect(() => {
    if (searchValue) {
const FilterProduct = products?.filter((e)=>    e.name.toLowerCase().includes(searchValue.toLowerCase()) || 
e.category.name.toLowerCase().includes(searchValue.toLowerCase()));
if(FilterProduct) {
  setFilter(FilterProduct);

}
    }
    else {
      setFilter(null);   
    
    }
  }, [searchValue]);

 const HandleInput = (event:React.ChangeEvent<HTMLInputElement>) => {
  
setValue(event.target.value)
if(event.target.value.length == 0) {
  setActive(false)
}
 }


  return (
    <div className="Input_box relative">
       
      {" "}
      <div
        className={`fixed left-0 top-0 w-full h-svh z-[50]  ${
          active ? Style.Active : Style.Disable
        }`}
      ></div>
      <div
        className={`${
          active ? Style.Input_active : ""
        } px-5 relative rounded-custom h-[50px] bg-[#F9F9F9] overflow-hidden`}
      >
        <svg
          
          className="cursor-pointer absolute top-[35%] left-3"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.48674 5.25469e-09C7.69591 -4.8654e-05 8.88103 0.337848 9.90836 0.975558C10.9357 1.61327 11.7643 2.52541 12.3008 3.60904C12.8372 4.69267 13.0601 5.90466 12.9443 7.10823C12.8284 8.31181 12.3785 9.45905 11.6453 10.4205L15.7477 14.5245C15.9028 14.6802 15.9929 14.889 15.9996 15.1087C16.0063 15.3283 15.9292 15.5423 15.7838 15.7071C15.6385 15.8719 15.4358 15.9753 15.2171 15.9961C14.9983 16.0169 14.7798 15.9537 14.606 15.8193L14.5247 15.7475L10.4205 11.6452C9.60141 12.2698 8.64535 12.6903 7.63144 12.872C6.61754 13.0537 5.57494 12.9914 4.58992 12.6901C3.60489 12.3889 2.70577 11.8574 1.96693 11.1397C1.2281 10.422 0.670807 9.53868 0.341162 8.56283C0.0115182 7.58698 -0.0809972 6.54665 0.0712713 5.52795C0.22354 4.50924 0.616214 3.54143 1.2168 2.70462C1.81739 1.8678 2.60863 1.18602 3.52504 0.715706C4.44145 0.24539 5.45668 5.43643e-05 6.48674 5.25469e-09ZM6.48674 1.72983C5.22505 1.72983 4.01504 2.23102 3.1229 3.12314C2.23075 4.01525 1.72955 5.22522 1.72955 6.48687C1.72955 7.74851 2.23075 8.95849 3.1229 9.8506C4.01504 10.7427 5.22505 11.2439 6.48674 11.2439C7.74843 11.2439 8.95844 10.7427 9.85058 9.8506C10.7427 8.95849 11.2439 7.74851 11.2439 6.48687C11.2439 5.22522 10.7427 4.01525 9.85058 3.12314C8.95844 2.23102 7.74843 1.72983 6.48674 1.72983Z"
            fill="#ADADAD"
          />
        </svg>

        <input
       onInput={HandleInput}
          ref={ref}
          placeholder="Поиск пиццы..."
    
          className=" bg-[#F9F9F9] px-3 w-full h-full outline-none placeholder:text-gray-light4 placeholder:text-base font-normal"
        />
       
      </div>
      {active==true &&filterProduct && 
       (
        <div className={`${Style.products} w-full max-h-[500px] overflow-y-auto  mt-[10px] rounded-l-[10px] bg-white absolute z-50`}>
          {" "}
          {filterProduct.map((item, index) => (
            <div
              onClick={() => {
                
                
                push(`product/${item.id}`);
                showNotification('Вы открыли продукт','info')
                setActive(false);
                setFilter(null)
              }}
              key={item.id}
              className={`cursor-pointer py-[10px] flex gap-3 px-[19px] mt-[13px] duration-500 hover:bg-white-hover ${
                index == filterProduct.length - 1 ? "mb-[13px]" : "mb-0"
              }`}
            >
              <div>
                <Image
                  alt="Pizza Image"
                  width={30}
                  height={30}
                  src={item.imageUrl}
                />
              </div>
              <div>
                <HighlightedSearch
                  searchValue={searchValue}
                  itemName={item.name}
                />
              </div>
              <div className="text-gray-price xxs:text-[13px]">{item.price}₽</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const Price_input = (props: PriceInput) => {
  const Ref = props.ref;
  return (
    <div className="Price_input relative  w-full">
      <input
        ref={Ref}
        onInput={(e)=> {
          const   target = e.target as HTMLInputElement
          props.func(Number(target.value));
          
          
        }}
        defaultValue={0}
        type="number"
        className={`w-full outline-none border border-gray-priceInputBorder rounded-[10px] px-[15px] py-[11px] text-black-label font-[400] text-[14px] ${Style.PriceInput} `}
      />
      <svg
        className="absolute top-[40%] right-[15px]"
        width="9"
        height="11"
        viewBox="0 0 9 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.226 10.098C1.74067 10.098 1.498 9.846 1.498 9.342V7.984H0.7C0.326667 7.984 0.14 7.816 0.14 7.48C0.14 7.13467 0.326667 6.962 0.7 6.962H1.498V5.828H0.7C0.326667 5.828 0.14 5.65533 0.14 5.31C0.14 4.974 0.326667 4.806 0.7 4.806H1.498V0.857999C1.498 0.372666 1.74067 0.129999 2.226 0.129999H4.774C5.838 0.129999 6.65467 0.391333 7.224 0.913999C7.79333 1.43667 8.078 2.14133 8.078 3.028C8.078 3.87733 7.78867 4.55867 7.21 5.072C6.64067 5.576 5.86133 5.828 4.872 5.828H2.968V6.962H4.872C5.24533 6.962 5.432 7.13467 5.432 7.48C5.432 7.816 5.24533 7.984 4.872 7.984H2.968V9.342C2.968 9.846 2.72067 10.098 2.226 10.098ZM2.94 4.806H4.634C5.29667 4.806 5.80067 4.67067 6.146 4.4C6.50067 4.12933 6.678 3.7 6.678 3.112C6.678 1.94533 5.992 1.362 4.62 1.362H2.94V4.806Z"
          fill="#BBBBBB"
        />
      </svg>
    </div>
  );
};

export const TextArea =(props: {ref:React.Ref<HTMLTextAreaElement>,className?:string,label?:string})=> {
return(<div>
  <label className="block text-black-label text-[14px]  font-[700]">
  {props.label}
</label>
  <textarea placeholder="Укажите тут дополнительную информацию для курьера" className={`w-full  outline-none border rounded-[10px] resize-none p-[18px] border-white-border ${props.className}`} ref={props.ref}></textarea>
  </div>
)
}