


import { HeaderCheckOut } from "@/components/shared/header/header";
import { Nunito}from "next/font/google";


const nunito = Nunito({
  weight:['1000','200','300','400','500','600','700','800','900'],
  subsets:['latin','cyrillic'],
  
})

export default function Layout({ children }: { children: React.ReactNode }) {
  
  return (

<div className={`bg-white-checkOutBg  ${nunito.className} overflow-hidden `}>
    <HeaderCheckOut/>
        {children}
</div>
  );
}
