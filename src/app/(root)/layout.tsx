import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/shared/header/header";

export const metadata: Metadata = {
  title: "Next Pizza",
  description: "Next Pizza",
};
const nunito = Nunito({
  weight: ["1000", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "cyrillic"],
});
export default function RootLayout({
  children,
  modal,
  cart,
  login
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
  cart:React.ReactNode,
  login:React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
{/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"/> */}


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
   <Header/>
        {children}
        {modal}
        {cart}
        {login}
      </body>
    </html>
  );
}
