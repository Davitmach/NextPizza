'use client';
import { CategoryBox } from "@/components/shared/category/category";
import { Notifications } from "@/components/shared/notification/notification";

import { StoriesBox } from "@/components/shared/stories/stories";

import { BigContainer } from "@/components/UI/container/container";
import { Select } from "@/components/UI/select/select";
import { Title } from "@/components/UI/title/title";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const createPayment = async () => {
    try {
      const response = await axios.post('https://nodejs-production-b751.up.railway.app/create-payment', {
        firstName:"David",
            lastName:"Machkalyan",
            phone:"+37443703717",
            address:"Azatutyan St. 2",
            comment:"Побыстрее бы :)",
            amount:"300",
            email:"wvime30@gmail.com",
            items:[{
              qaq:"qaq"
            },
            {
              qaq:"qaq"
            }
            ]
    
      },{
        withCredentials:true
      });
  
      const data = await response.data;
    if(data.confirmationUrl) {
window.location.href = data.confirmationUrl
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
