import type { Metadata } from "next";
import { Poppins,Roboto,Montserrat}from "next/font/google";
import "./globals.scss";






export const metadata: Metadata = {
  title: "Dodo Pizza",
  description: "Dodo Pizza Armenia",
  
};
export const poppins = Poppins({
  weight:['500','600'],
  subsets:['latin']
})
export const roboto = Roboto({
  weight:['500'],
  subsets:['cyrillic']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
</head>
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
