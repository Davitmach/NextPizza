import { userService } from '@/service/userService';
import Style from './user.module.scss';
import { useSession } from 'next-auth/react';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useNotification } from '@/context/notification';

export const UserBtnMenu = () => {
  const { status } = useSession();
  const {showNotification} = useNotification()
  const query = useQueryClient();
 
  const handleLogout = () => {
    userService.Logout(status, query).then((e)=> {
     if(e && e== 'Cookie deleted') {
      showNotification('Вы вышли из аккаунта','info');
      
     }
      
    });
  
  };


  return (
    <div className='w-full bg-white mt-[6px] rounded-[10px] shadow-lg py-[13px] absolute top-full'>
      <div className='py-[10px] duration-300 hover:bg-orange-hover cursor-pointer font-[600] text-[16px] text-black-label pl-4 hover:text-orange'>
        <h1>Настройки</h1>
      </div>
      <div className='py-[10px] duration-300 hover:bg-orange-hover cursor-pointer font-[600] text-[16px] text-black-label pl-4 hover:text-orange'>
        <h1>Заказы</h1>
      </div>
      <div
        onClick={handleLogout}
        className='py-[10px] duration-300 hover:bg-orange-hover cursor-pointer hover:text-orange font-[600] text-[16px] text-black-label pl-4 border-t border-gray-cartBorder'
      >
        <h1>Выйти</h1>
      </div>
    </div>
  );
};
