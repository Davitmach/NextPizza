'use client';
import { useAddress } from '@/store';
import React, { forwardRef, useEffect, useState } from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface AddressInputProps {
  placeholder?: string;
  Label: string;
  ErrorMessage?: string;
  ErrorState?: boolean;
  className?: string;
  required?: boolean;
}

export const AddressInput = (props:AddressInputProps) => {
  
    const {setAddress} = useAddress();
    const [isClient, setIsClient] = useState(false);
   

    useEffect(() => {
      setIsClient(true); 
    }, []);

    if (!isClient) return <div>Loading...</div>; 

    // Обработчик изменения значения
    const handleChange = (data: any) => {
  if(data.value) {
    setAddress(data.value)
  }
  
    };

    return (
      <div className={`input-wrapper ${props.className || ""}`}>
        <label className="block text-black-label text-[14px] font-[700]">
          {props.Label}
        </label>
        <AddressSuggestions
          token="96c484567fe3c1a50eedcfe06a66e6226123ef17"
          
          onChange={handleChange} 
          inputProps={{
           
            placeholder: props.placeholder || "Введите адрес",
            className: `w-full px-4 py-[13px] border rounded-lg outline-none ${
              props.ErrorState ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            }`,
           required:props.required,
          }}
        />
        {/* Error Message */}
        {props.ErrorState && props.ErrorMessage && (
          <span className="text-red-500 text-sm mt-1 h-[30px]">
            {props.ErrorMessage}
          </span>
        )}
      </div>
    );
  }

