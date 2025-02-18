import type { Metadata } from "next";
import "./_styles/globals.css";

import { Josefin_Sans } from 'next/font/google'
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: "%s | Wild Oasis",
    default: "Wild Oasis"
  },
  description: 'Luxurious cabin hotel'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefin.className} relative antialiased flex flex-col bg-primary-950 text-primary-100 min-h-screen`}>
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            {children}
          </main>
        </div>
        <footer className="max-w-7xl mx-auto text-primary-100 z-10">Copyright by Webtify Solutions</footer>
      </body>
    </html>
  );
}
