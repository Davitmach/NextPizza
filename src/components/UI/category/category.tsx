import { CategoryProps } from '@/types/UI/category/categoryProps';
import Style from './category.module.scss';
import { useMenuState } from '@/store';



export const Category = (CategoryProps:CategoryProps)=> {
    const {menuState,setMenu} = useMenuState();
    const Text = CategoryProps.children as string;
const HandleChangeMenu = (text:string)=> {
setMenu(text);
}

    return(
        <div className={`text-black-link font-[700] text-[16px] cursor-pointer px-[16px] py-[10px] rounded-[15px] w-[92px] flex items-center justify-center duration-150  ${menuState == Text ? Style.Active : Style.Disable}`} onClick={()=> {
            HandleChangeMenu(Text);
        }}>{Text}</div>
    )
}