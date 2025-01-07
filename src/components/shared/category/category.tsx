"use client";
import { CategoryBoxProps } from "@/types/UI/category/categoryProps";
import Style from "./category.module.scss";
import { useMenuState } from "@/store";
import { useEffect, useState } from "react";
import { categoryService } from "@/service/categoryService";
import { Category } from "@/components/UI/category/category";
import Cookie from 'js-cookie'
export const CategoryBox = (CategoryProps: CategoryBoxProps) => {
  const [data, setData] = useState<any[]>();
  const Children = CategoryProps.children;
  const Type = CategoryProps.type;
  const { menuState, setMenu } = useMenuState();

  useEffect(() => {

    
    if (Type == "custom" && Array.isArray(Children) && Children.length > 0) {
      setMenu(Children[0].props.children);
      setData(Children);
    } else {
      const CheckCategory = Cookie.get('Category');
      if (!CheckCategory) {
        const Response = categoryService.getCategory();
        Response.then((cats) => {
            const expireTime = new Date();
            expireTime.setMinutes(expireTime.getMinutes() + 30); 
            
            Cookie.set('Category', JSON.stringify(cats), { expires: expireTime });
       
         setMenu(cats[0].name)
          setData(cats);
        });
      } else {
        const GetCategory = Cookie.get('Category');
        if (GetCategory) {
            const Parse = JSON.parse(GetCategory);
            setMenu(Parse[0].name)
          setData(JSON.parse(GetCategory));
          
        } 
      }
    }
  }, []);

 return (
  <div className={`Scroll overflow-x-scroll xs:px-[5px] ${Style.Scrollbar}`}><div className="inline-flex gap-[5px] bg-white-category py-[6px] px-[5px] rounded-[15px] ">
    {Type == "custom"
      ? data
      : data?.map((cats, index) => (
          <Category key={cats.id || index}>{cats.name}</Category>
        ))}
  </div>
  </div>
);
};
