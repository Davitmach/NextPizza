'use client';
import { CategoryBox } from "@/components/shared/category/category";
import { Notifications } from "@/components/shared/notification/notification";

import { StoriesBox } from "@/components/shared/stories/stories";

import { BigContainer } from "@/components/UI/container/container";
import { Select } from "@/components/UI/select/select";
import { Title } from "@/components/UI/title/title";
import { useEffect, useState } from "react";

export default function Home() {

  const createPayment = async () => {
    const paymentData = {
      amount: 1000,  // Пример суммы
      description: 'Оплата за товар',
      email: 'user@example.com',
      address: 'Москва, ул. Тверская, 1',
      postalCode: '123456',
    };
  
    try {
      const response = await fetch('https://nodejs-production-b751.up.railway.app/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });
  
      const data = await response.json();
      if (data.confirmation) {
        window.location.href = data.confirmation.confirmation_url; // Переход к оплате
      } else {
        console.error('Ошибка при создании платежа:', data.error);
      }
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
    }
  };
  
  return (
    <>
      <BigContainer className="flex flex-col gap-3 overflow-hidden" parentClassName="shadow-lg"> 
        <Title>Все пиццы</Title>
        <div className="w-full flex items-center justify-between xs:flex-col xs:items-start xs:gap-4">
          <CategoryBox type="server"/>
          <Select/>
        </div> 
      </BigContainer>

   

      <BigContainer>
        <StoriesBox/>
      </BigContainer>
<button onClick={createPayment}>qaq</button>
      <Notifications/>
    </>
  );
}
