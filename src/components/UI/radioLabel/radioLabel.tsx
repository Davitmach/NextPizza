import { RadioProps } from '@/types/UI/radio/radioProps';
import { Radio } from '../radio/radio';

export const RadioLabel = (checkboxProps:RadioProps)=> {
    const Children = checkboxProps.children;
    return(
      <div className='inline-flex items-center justify-center gap-[12px]'>
        <Radio/>
        <span className='text-black-label text-[16px] font-[400]'>{Children}</span>
      </div>
    )
}