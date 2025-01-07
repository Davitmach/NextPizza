import { LoadingProps } from '@/types/UI/loading/loadingProps'
import Style from './loading.module.scss'
export const Loading = (props:LoadingProps)=> {
    const Width = props.width;
  const BorderWidth = props.borderWidth;
  
    const Type = props.type;
    return(
            <div  style={{ width: `${Width}px`, height: `${Width}px` ,borderTopWidth:BorderWidth,borderLeftWidth:BorderWidth}} className={`${Style.spinner} ${Type == 'white' ? Style.white : Style.orange} !w-[${Width}px] !h-[${Width}px]`}></div>
    )
}
export const BigLoading = ()=> {
  return(

    <div className={Style.loadingSpin}></div>

  )
}