import { TitleProps } from '@/types/UI/title/titleProps';
import './title.scss';


export const Title =(TitleProps:TitleProps)=> {
    const Title = TitleProps.children;
    return(
        <div className='text-black-label font-[800] text-[36px] cursor-pointer'>{Title}</div>
    )
}