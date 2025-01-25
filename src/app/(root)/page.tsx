
import { CategoryBox } from "@/components/shared/category/category";
import { FilterBar } from "@/components/shared/filterBar/filterBar";
import { StoriesBox } from "@/components/shared/stories/stories";
import { BigContainer, CategoryContainer} from "@/components/UI/container/container";
import { Select } from "@/components/UI/select/select";
import { Title } from "@/components/UI/title/title";

import dynamic from 'next/dynamic';
const DynamicProducts = dynamic(() => import('@/components/shared/products/products'));
export default function Home() {

 



  return (
    <>

      <CategoryContainer className={`flex flex-col gap-3 overflow-hidden`} parentClassName="shadow-lg"> 
        <Title>Все пиццы</Title>
        <div className="w-full flex items-center justify-between xs:flex-col xs:items-start xs:gap-4">
          <CategoryBox type="server"/>
          <Select/>
        </div> 
      </CategoryContainer>
      <BigContainer>
        <StoriesBox/>
      </BigContainer>

      <BigContainer className="flex gap-[40px] relative">
     <FilterBar/>
     <DynamicProducts/>
      </BigContainer>


    </>
  );
}
