import { ContainerProps } from '@/types/UI/container/containerProps';
import './container.scss';
import {Title} from '@/components/UI/title/title'

export const Container = (containerProps:ContainerProps)=> {
     const Container_Title = containerProps.title;
     const Container_children = containerProps.children;
    return(
        <div className='px-[62px] xs:px-[20px]'>
<Title>{Container_Title}</Title>
<main className='mt-[20px]'>{Container_children}</main>
        </div>
    )
}
export const BigContainer = (props:{children:React.ReactNode,className?:string,parentClassName?:string})=> {
    return(
        <div className={`${props.parentClassName} w-full`}>
        <div className={`${props.className} max-w-[1500px] w-full mx-auto py-[30px] px-[30px] xxs:px-[15px]`}>
{props.children}
        </div>
        </div>
    )
}