"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { CheckoutBox } from "../checkoutBox/checkoutBox";
import { cartService } from "@/service/cartService";
import { useEffect, useRef, useState } from "react";
import { Loading } from "../loading/loading";
import { CheckoutCartItems } from "../checkoutCartItems/checkoutCartItems";
import { useRouter } from "next/navigation";
import { useNotification } from "@/context/notification";
import { Input, TextArea } from "@/components/UI/input/input";
import React from "react";
import { useAddress, usePayed } from "@/store";
import { paymentService } from "@/service/paymentService";
import { userService } from "@/service/userService";
import Style from './checkout.module.scss'
import { AddressInput } from "../addressInput/input";
interface ICartItems {
  id: number;
  cartId: number;
  productId: number;
  quantity: number;
  price: number;
  createdAt: string;
  size: number;
  type: number;
  product: {
    id: number;
    name: string;
    description: string;
    stock: number;
    imageUrl: string;
    price: boolean;
    categoryId: number;
    productItem: [
      {
        id: number;
        price: number;
        size: number;
        pizzaType: number;
        productId: number;
      }
    ];
  };
  ingredients: {
    cartItemId: number;
    ingredientId: number;
    ingredient: {
      createdAt: string;
      id: number;
      imageUrl: string;
      name: string;
      price: number;
    };
  }[];
}

export const CheckoutContainer = () => {
  const { showNotification } = useNotification();
  const {address} = useAddress();
  const { payed, setPayed } = usePayed();
  const RefName = useRef<HTMLInputElement>(null);
  const RefPhone = useRef<HTMLInputElement>(null);
  const RefLastname = useRef<HTMLInputElement>(null);
  const RefTextarea = useRef<HTMLTextAreaElement>(null);
  const RefAddress = useRef<HTMLInputElement>(null);
  const [amount, setAmount] = useState<null | string>(null);
  const [email,setEmail] = useState<string|null>(null);
  const query = useQueryClient();
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    lastname: false,
    address: false,
  });
useEffect(()=> {
userService.GetId().then((e)=> {
   if(e.email) {
    setEmail(e.email)
   }
    
})
},[])

  const Total = query.getQueryData<any>(["totalData"]);
  useEffect(() => {
    if (Total) {
      setAmount(Total.full);
    }
  }, [Total]);
  const [sort, setSort] = useState([]);
  const { replace } = useRouter();
  const { data, isLoading } = useQuery({
    queryKey: ["cartItems"],
    queryFn: () => cartService.getCartItem(),
  });
  //  useEffect для сортировки товаров
  useEffect(() => {

    
    if (data) {
      setSort(
        data?.sort(
          (
            a: { product: { name: string } },
            b: { product: { name: string } }
          ) => {
            if (a.product.name.toLowerCase() < b.product.name.toLowerCase())
              return -1;
            if (a.product.name.toLowerCase() > b.product.name.toLowerCase())
              return 1;
            return 0;
          }
        )
      );
    }
  }, [data]);

  //  useEffect для ошибок input
  useEffect(() => {
    console.log(address);
    
    if (payed == true) {
      if (
        RefName.current &&
        RefLastname.current &&
        RefPhone.current &&
        address
      ) {
        if (RefName.current.value.length == 0) {
          setErrors((prev) => ({ ...prev, name: true }));
        } else {
          setErrors((prev) => ({ ...prev, name: false }));
        }
        if (RefLastname.current.value.length == 0) {
          setErrors((prev) => ({ ...prev, lastname: true }));
        } else {
          setErrors((prev) => ({ ...prev, lastname: false }));
        }
        if (RefPhone.current.value.length == 0) {
          setErrors((prev) => ({ ...prev, phone: true }));
        } else {
          setErrors((prev) => ({ ...prev, phone: false }));
        }
        if (address.length == 0) {
          setErrors((prev) => ({ ...prev, address: true }));
        } else {
          setErrors((prev) => ({ ...prev, address: false }));
        }
      }
      setTimeout(() => {
        setPayed(false);
      }, 1);
    }
  }, [payed]);

  //  useEffect для покупки
  useEffect(() => {
    if (
      errors.name == false &&
      errors.address == false &&
      errors.lastname == false &&
      errors.phone == false &&
      payed == false
    ) {
   
      
        if(RefName.current && address && RefLastname.current && RefPhone.current && RefTextarea.current && amount && email) {
        paymentService.createPayment(RefName.current.value,RefLastname.current.value,RefPhone.current.value,address,RefTextarea.current.value,amount,email,data)
        }
    }
  }, [errors, payed]);

  return (
    <div className="w-full flex flex-col gap-11">
      <CheckoutBox>
        <div className="flex items-center justify-between border-b border-gray-cartBorder px-[35px] l:px-[15px] pb-[25px]">
          <div>
            <h1 className="font-[700] text-[24px] text-black-label  l:text-[20px]">
              1. Корзина
            </h1>
          </div>
          <div className="cursor-pointer inline-flex items-center justify-end gap-[7px]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.40039 3.7998H13.6004L12.4944 13.7538C12.4565 14.0964 12.2935 14.4129 12.0368 14.6428C11.78 14.8727 11.4474 14.9998 11.1028 14.9998H4.89799C4.55334 14.9998 4.22078 14.8727 3.96401 14.6428C3.70724 14.4129 3.5443 14.0964 3.50639 13.7538L2.40039 3.7998Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.7413 1.8029C4.85453 1.56278 5.0337 1.3598 5.25791 1.21764C5.48212 1.07548 5.74213 0.999997 6.0076 1H9.992C10.2576 0.999864 10.5178 1.07528 10.7421 1.21745C10.9665 1.35962 11.1457 1.56267 11.259 1.8029L12.1998 3.8H3.7998L4.7413 1.8029Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 3.7998H15"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.59961 7.2998V10.7998"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.40039 7.2998V10.7998"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="text-[16px] text-end  font-[400] text-black-label "
              onClick={() => {
                cartService.clearCart().then(() => {
                  showNotification(
                    "Вы успешно удалили все элемента корзины",
                    "success"
                  );
                  replace("/");
                });
              }}
            >
              Очистить корзину
            </span>
          </div>
        </div>
        {isLoading ? (
          <div className="h-[100px] w-full flex items-center justify-center">
            <Loading width={50} borderWidth={5} type="orange" />
          </div>
        ) : (
          <div className={`flex flex-col  px-[35px] l:px-[15px] max-h-[500px] overflow-y-auto ${Style.checkout}`}>
            {Array.isArray(sort) &&
              sort.length > 0 &&
              sort.map((e: ICartItems) => {
                if (Array.isArray(e.ingredients) && e.ingredients.length > 0) {
                  const Ingredients = e.ingredients.map(
                    (e: any) => e.ingredient?.name
                  );
                  return (
                    <CheckoutCartItems
                      key={e.id}
                      name={e.product.name}
                      price={e.price}
                      productId={e.product.id}
                      size={e.size}
                      type={e.type}
                      ingredients={Ingredients}
                      img={e.product.imageUrl}
                      cartItemId={e.id}
                      count={e.quantity}
                    />
                  );
                } else {
                  return (
                    <CheckoutCartItems
                      key={e.id}
                      name={e.product.name}
                      price={e.price}
                      productId={e.product.id}
                      size={e.size}
                      type={e.type}
                      img={e.product.imageUrl}
                      cartItemId={e.id}
                      count={e.quantity}
                    />
                  );
                }
              })}
          </div>
        )}
      </CheckoutBox>

      <CheckoutBox>
        <div className="pb-[25px] px-[35px] l:px-[15px] border-b border-b-gray-cartBorder">
          <h1 className="text-[24px] font-[700] text-black-label l:text-[20px]">
            2. Персональная информация
          </h1>
        </div>
        <div className="grid gap-[26px] grid-cols-2 px-[35px] py-[30px] l:px-[15px] ">
          <div className="max-w-[328px] w-full">
            <Input
              ref={RefName}
              ErrorMessage="Введите ваше имя"
              Label="Имя"
              InputType="text"
              required={true}
              ErrorState={errors.name}
            />
          </div>
          <div className="max-w-[328px]  w-full">
            <Input
              ref={RefLastname}
              ErrorMessage="Введите вашу фамилию"
              Label="Фамилия"
              InputType="text"
              required={true}
              ErrorState={errors.lastname}
            />
          </div>
          <div className="max-w-[328px]  w-full">
            <Input
              ref={RefPhone}
              ErrorMessage="Введите ваш телефон"
              Label="Телефон"
              InputType="text"
              ErrorState={errors.phone}
              required={true}
            />
          </div>
        </div>
      </CheckoutBox>
      <CheckoutBox>
        <div className="pb-[25px] px-[35px] l:px-[15px] border-b border-b-gray-cartBorder">
          <h1 className="text-[24px] font-[700] text-black-label l:text-[20px]">
            3. Адрес доставки
          </h1>
        </div>
        <div className="flex flex-wrap gap-[26px] px-[35px] l:px-[15px] py-[30px]">
          <div className="w-full">
            {/* <Input
              ref={RefAddress}
              ErrorMessage="Введите адрес доставки"
              Label="Введите адрес"
              InputType="text"
              required={true}
              ErrorState={errors.address}
            /> */}
            <AddressInput
          
            ErrorMessage="Введите адрес доставки"
            Label="Введите адрес"
            required={true}
            ErrorState={errors.address}
            />
          </div>
          <div className="w-full">
            <TextArea
              label="Комментарий к заказу"
              className="h-[120px]"
              ref={RefTextarea}
            />
          </div>
        </div>
      </CheckoutBox>
    </div>
  );
};
