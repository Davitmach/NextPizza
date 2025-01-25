import Style from './checkbox.module.scss';


export const Checkbox = (props:{add:Function,remove:Function,value:number})=> {
    return(
        <div className='w-[24px] h-[24px] relative cursor-pointer overflow-hidden'>
        <input onChange={(e)=> {
           if(e.target.checked ==true) {
            props.add(props.value)
           }
           else {
            props.remove(props.value)
           }
            
        }} id='customCheckbox cursor-pointer' className={Style.checkbox} type='checkbox'/>
        </div>
    )
}