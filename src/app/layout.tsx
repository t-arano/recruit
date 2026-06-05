import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/site";

export const metadata: Metadata = {
  title: `採用情報 | ${COMPANY.name}`,
  description: `${COMPANY.area}で土木・重機土工事を手がける${COMPANY.name}の採用サイト。重機オペレーター・施工管理（現場監督）を募集しています。`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
