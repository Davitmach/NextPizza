import { CheckboxProps } from '@/types/UI/checkbox/checkboxProps';
import { Checkbox } from '../checkbox/checkbox';
import Style from './checkboxLabel.module.scss';

export const CheckboxLabel = (checkboxProps:CheckboxProps)=> {
    const Children = checkboxProps.children;
    const Add = checkboxProps.add;
    const Remove = checkboxProps.remove;
    return(
      <div className='inline-flex items-center justify-center gap-[12px]'>
        <Checkbox add={Add} remove={Remove} value={Children as string}/>
        <span className='text-black-label text-[16px] font-[400] text-nowrap'>{Children}</span>
      </div>
    )
}