

import './global.scss';
import { Nunito}from "next/font/google";

import ClientProviders from '@/components/shared/provider/provider';
const nunito = Nunito({
  weight:['1000','200','300','400','500','600','700','800','900'],
  subsets:['latin','cyrillic'],
  
})

export default function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      <head />
      <body className={nunito.className}>

        <ClientProviders>
        {children}
        </ClientProviders>

      </body>
    </html>
  );
}
