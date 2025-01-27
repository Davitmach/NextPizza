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
<div className={`${nunito.className} `}>
   <Header/>
        {children}
        {modal}
        {cart}
        {login}
        </div> 
  );
}
