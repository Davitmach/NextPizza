import { IXmark } from "@/types/UI/xmark/xmark";
import { XmarkType } from "@/types/UI/xmark/xmarkType";
import { HiMiniXMark } from "react-icons/hi2";
// Типы крестов
const XmarkStyleConfig:Record<XmarkType,string> = {
scale:'duration-[.4s] hover:scale-[1.1]',
rotate:'duration-[.4s] hover:rotate-[180deg]'
}
export const Xmark = (props:IXmark)=> {
    const Type = props.type // Тип креста
    const Func = props.func // фукнция креста
    return(
        <>
<HiMiniXMark onClick={()=> {
    Func && Func()
}} className={XmarkStyleConfig[Type]} style={{fontSize:'50px',cursor:'pointer'}}/>
        </>
    )
}