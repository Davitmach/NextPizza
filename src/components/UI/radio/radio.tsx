import Style from './radio.module.scss';

export const Radio = ()=> {
    return(
        <div className='w-[24px] h-[24px] relative cursor-pointer overflow-hidden'>
        <input id='customCheckbox cursor-pointer' className={Style.radio} type='radio'/>
        </div>
    )
}