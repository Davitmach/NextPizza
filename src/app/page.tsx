

import { Button } from "@/components/UI/button/button";
import { LinkBtn } from "@/components/UI/link/link";
import { OftenOrder } from "@/components/UI/oftenOrder/oftenOrder";

import Cookie from "js-cookie";

export default function Home() {
  const CheckCookie = Cookie.get('lang'); // проверяем есть ли такой кук
  if(!CheckCookie) { // если нет то добавит 
    Cookie.set('lang','am');
  }
 


  return (
    <>

    <div className="text-orange text-[40px]">Dodo Pizza</div>
<LinkBtn link="/" text={{
  am:'Hay',en:'qaq',ru:'esh'
}}/>

    </>
  );
}
