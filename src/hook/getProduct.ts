'use client';
import { categoryService } from "@/service/categoryService";
import { productService } from "@/service/productService";
import { useFilter } from "@/store";
import { ProductPayload } from "@/types/payload/productPayload";
import { useEffect, useState } from "react"

export const useProducts=()=> {
    const [status,setStatus] = useState<boolean|null>(null);
    const {minPrice,maxPrice,type,ingredients} = useFilter();
    const [allProducts, setAllProducts] = useState<ProductPayload[] | null>([]);

const [category,setCategory] = useState<[]>([])
const [filteredProducts, setFilteredProducts] = useState<ProductPayload[] >([]);
useEffect(()=> {
    if(minPrice == 0&&maxPrice== 0&&type ==null&&ingredients.length==0)  {
        setStatus(true)
    }
    else {
        setStatus(false)
    }
},[ingredients,maxPrice,minPrice,type])

useEffect(()=> {
if(status == true) {
categoryService.getCategory().then((e)=> {
    setCategory(e)  
})
}
else {
productService.getProducts().then((e)=> {
    setAllProducts(e);
})
}

},[status])



useEffect(() => {
  
  
  if (allProducts && status === false) {
    const filtered = allProducts.filter((product) => {
      const matchesPrice =
        (minPrice === 0 || product.price >= minPrice) &&
        (maxPrice === 0 || product.price <= maxPrice);
      const matchesType = type ? product.productItem[0]?.pizzaType === type : true;
      const matchesIngredients = ingredients.length === 0 
      ? true 
      : ingredients.every(i => 
          product.ingredients.some(e => e.id === i)
        );
    
    
      return matchesPrice && matchesType && matchesIngredients;
    });

    setFilteredProducts(filtered);
  }
}, [allProducts, minPrice, maxPrice, type, ingredients, status]);


return {filteredProducts,status,category}

}