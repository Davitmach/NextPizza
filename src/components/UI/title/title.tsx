import { TitleProps } from '@/types/UI/title/titleProps';
import './title.scss';


export const Title =(TitleProps:TitleProps)=> {
    const Title = TitleProps.children;
    return(
        <div className='text-black-label font-[800] text-[36px] cursor-pointer'>{Title}</div>
    )
}
export const ModalTitle =(TitleProps:TitleProps)=> {
    const Title = TitleProps.children;
    return(
        <div className='text-black-label font-[700] text-[24px] cursor-pointer'>{Title}</div>
    )
}
export const ProductTitle =(TitleProps:TitleProps)=> {
    const Title = TitleProps.children;
    return(
        <div className='text-black-label font-[700] text-[22px] cursor-pointer  '>{Title}</div>
    )
}
export const ProductPageTitle = (TitleProps:TitleProps)=> {
    const Title = TitleProps.children;
    return(
        <div className='text-black-label font-[800] text-[34px] cursor-pointer -tracking-[0.5px]'>{Title}</div>
    )
}