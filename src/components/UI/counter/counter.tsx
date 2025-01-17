'use client';
import { CounterProps } from '@/types/UI/counter/counterProps';
import Style from './counter.module.scss';
import { Button } from '../button/button';
import { useCallback, useEffect, useState } from 'react';

export const Counter: React.FC<CounterProps> = (props) => {
  

    return (
      <div className='inline-flex gap-[14px] justify-center items-center'>
        
        <Button className='w-[38px] h-[38px] flex items-center justify-center !px-[0] rounded-[15px]' func={()=>props.firstFunc()}  variant='orangeBorder' size='default' status={false}><svg width="13" height="2" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 1L1 1" stroke="#FE5F00" strokeWidth="1.5" strokeLinecap="round" />
</svg>

</Button>
        <p className='text-black-link font-[700] text-[20px]'>{props.defaultState}</p>
        <Button className='w-[38px] h-[38px] flex items-center justify-center !px-[0] rounded-[15px]'  func={()=>props.secondFunc()} variant='orangeBorder' size='default' status={false}><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0536 5.25H7.23214V0.75C7.23214 0.551088 7.14748 0.360322 6.99678 0.21967C6.84608 0.0790178 6.64169 0 6.42857 0C6.21545 0 6.01106 0.0790178 5.86036 0.21967C5.70966 0.360322 5.625 0.551088 5.625 0.75V5.25H0.803571C0.590451 5.25 0.38606 5.32902 0.235361 5.46967C0.0846619 5.61032 0 5.80109 0 6C0 6.19891 0.0846619 6.38968 0.235361 6.53033C0.38606 6.67098 0.590451 6.75 0.803571 6.75H5.625V11.25C5.625 11.4489 5.70966 11.6397 5.86036 11.7803C6.01106 11.921 6.21545 12 6.42857 12C6.64169 12 6.84608 11.921 6.99678 11.7803C7.14748 11.6397 7.23214 11.4489 7.23214 11.25V6.75H12.0536C12.2667 6.75 12.4711 6.67098 12.6218 6.53033C12.7725 6.38968 12.8571 6.19891 12.8571 6C12.8571 5.80109 12.7725 5.61032 12.6218 5.46967C12.4711 5.32902 12.2667 5.25 12.0536 5.25Z" fill="#FE5F00"/>
</svg>

</Button>
      </div>
    );
  };
  


  export const LittleCounter: React.FC<CounterProps> = (props) => {

  
      return (
        <div className='inline-flex gap-[10px] justify-center items-center'>
          
          <Button className='w-[30px] h-[30px] !p-0'  func={()=>props.firstFunc()}  variant='orangeBorder' size='default' status={false}><svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.28683 1L1.42969 1" stroke="#FE5F00" strokeWidth="1.5" strokeLinecap="round"/>
</svg>

  
  </Button>
          <p className='text-black-link font-[700] text-[20px]'>{props.defaultState}</p>
          <Button className='w-[30px] h-[30px] !p-0' func={()=>props.secondFunc()} variant='orangeBorder' size='default' status={false}><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.32502 4.46436H5.88115V1.25007C5.88115 1.10799 5.82067 0.971729 5.71303 0.871263C5.60539 0.770797 5.4594 0.714355 5.30717 0.714355C5.15494 0.714355 5.00894 0.770797 4.9013 0.871263C4.79366 0.971729 4.73319 1.10799 4.73319 1.25007V4.46436H1.28931C1.13708 4.46436 0.991089 4.5208 0.883447 4.62126C0.775805 4.72173 0.715332 4.85799 0.715332 5.00007C0.715332 5.14215 0.775805 5.27841 0.883447 5.37888C0.991089 5.47934 1.13708 5.53578 1.28931 5.53578H4.73319V8.75007C4.73319 8.89215 4.79366 9.02841 4.9013 9.12888C5.00894 9.22935 5.15494 9.28579 5.30717 9.28579C5.4594 9.28579 5.60539 9.22935 5.71303 9.12888C5.82067 9.02841 5.88115 8.89215 5.88115 8.75007V5.53578H9.32502C9.47725 5.53578 9.62325 5.47934 9.73089 5.37888C9.83853 5.27841 9.899 5.14215 9.899 5.00007C9.899 4.85799 9.83853 4.72173 9.73089 4.62126C9.62325 4.5208 9.47725 4.46436 9.32502 4.46436Z" fill="#FE5F00"/>
</svg>

  
  </Button>
        </div>
      );
    };
    