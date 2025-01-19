'use client';
import { CategoryBox } from "@/components/shared/category/category";
import { Notifications } from "@/components/shared/notification/notification";
import PayPalButton from "@/components/shared/paypal/paypal";

import { StoriesBox } from "@/components/shared/stories/stories";

import { BigContainer } from "@/components/UI/container/container";
import { Select } from "@/components/UI/select/select";
import { Title } from "@/components/UI/title/title";
import { useEffect, useState } from "react";

export default function Home() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Это код будет выполняться только на клиенте
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('NEXT_PIZZA_DISABLE_USER_AUTH_TOKEN');
      setToken(storedToken);
    }
  }, []);

  return (
    <>
      <BigContainer className="flex flex-col gap-3 overflow-hidden" parentClassName="shadow-lg"> 
        <Title>Все пиццы</Title>
        <div className="w-full flex items-center justify-between xs:flex-col xs:items-start xs:gap-4">
          <CategoryBox type="server"/>
          <Select/>
        </div> 
      </BigContainer>

      {token && <div>{token}</div>} {/* Выводим токен, если он есть */}

      <BigContainer>
        <StoriesBox/>
      </BigContainer>

      <Notifications/>
    </>
  );
}
