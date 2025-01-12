import { ProductInfoProps } from "@/types/UI/productInfo/productInfoProps";

export const ProductInfo = (props:ProductInfoProps)=> {
    const Text = props.children;
    return(
        <span className="text-gray-productInfo text-[14px] font-[400]">{Text}</span>
    )
}