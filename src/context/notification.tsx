'use client';
import React, { createContext, useContext, useState, ReactNode } from "react";

// Типы уведомлений
type Notification = {
  id: number;
  message: string;
  type: "success" | "error" | "info";
};

type NotificationContextType = {
  notifications: Notification[];
  showNotification: (message: string, type: "success" | "error" | "info") => void;
};

// Создаем сам контекст
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

// Провайдер контекста
export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const showNotification = (message: string, type: "success" | "error" | "info") => {
    const soundMap:any = {
      success: "/sound/success.mp3",
    };
    const soundPath = soundMap[type] || "/sound/default.mp3";
        const audio = new Audio(soundPath);
        audio.volume = 0.10;
        audio.play();
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((notif) => notif.id !== id));
    }, 5000);
  };

  return (
    <NotificationContext.Provider value={{ notifications, showNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

// Кастомный хук для использования контекста
export const useNotification = () => {

    
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};
