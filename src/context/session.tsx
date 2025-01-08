'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useSession } from "next-auth/react";

// Define the session type
type Session = {
  user?: {
    name?: string;
    email?: string;
    image?: string;
  };
  expires?: string;
} | null;

// Create the context with a default value of null
const QessionContext = createContext<Session | null>(null);

// Provider component
export const QessionProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<any>(null);
  const { data } = useSession();

  useEffect(() => {
    setSession(data);
  }, [data]);

  return (
    <QessionContext.Provider value={session}>
      {children}
    </QessionContext.Provider>
  );
};

// Custom hook to use the session context
export const useSessionContext = () => {
  const context = useContext(QessionContext);
  if (context === null) {
    throw new Error("useSessionContext must be used within a SessionProvider");
  }
  return context;
};
