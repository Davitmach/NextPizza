import Style from './checkbox.module.scss';


export const Checkbox = ()=> {
    return(
        <div className='w-[24px] h-[24px] relative cursor-pointer overflow-hidden'>
        <input id='customCheckbox cursor-pointer' className={Style.checkbox} type='checkbox'/>
        </div>
    )
}