import { CheckboxProps } from '@/types/UI/checkbox/checkboxProps';
import { Checkbox } from '../checkbox/checkbox';
import Style from './checkboxLabel.module.scss';

export const CheckboxLabel = (checkboxProps:CheckboxProps)=> {
    const Children = checkboxProps.children;
    return(
      <div className='inline-flex items-center justify-center gap-[12px]'>
        <Checkbox/>
        <span className='text-black-label text-[16px] font-[400]'>{Children}</span>
      </div>
    )
}