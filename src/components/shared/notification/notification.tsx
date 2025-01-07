'use client';
import Style from './notification.module.scss';
import { useNotification } from "@/context/notification";

export const Notifications = () => {
  const { notifications } = useNotification();

  return (
    <div className={`fixed bottom-4 right-4 z-50 space-y-2 w-[300px] overflow-hidden `}>


      {notifications.map((notif) => (
        <div
          key={notif.id}
          className={`relative overflow-hidden p-4 rounded-[15px] shadow-lg text-white cursor-pointer ${
            notif.type === "success"
              ? "bg-green-500"
              : notif.type === "error"
              ? "bg-red-500"
              : "bg-orange"
          }`}
        >
          {notif.message}
  
          <div className={`Bar absolute left-0 bottom-0 w-full h-[5px] bg-white ${Style.anim}`}></div>
        </div>
        
      ))}

    </div>
  );
};


