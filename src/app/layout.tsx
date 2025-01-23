

import './global.scss';
import { Nunito}from "next/font/google";

import ClientProviders from '@/components/shared/provider/provider';
import { Notifications } from '@/components/shared/notification/notification';
const nunito = Nunito({
  weight:['1000','200','300','400','500','600','700','800','900'],
  subsets:['latin','cyrillic'],
  
})

export default function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
           <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"/>


        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={nunito.className}>

        <ClientProviders>
        {children}
        <Notifications/>
        </ClientProviders>

      </body>
    </html>
  );
}
