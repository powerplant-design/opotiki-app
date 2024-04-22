import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/app/ui/fonts";

import NavHeader from "@/app/ui/nav-header";

export const metadata: Metadata = {
    title: "Ōpōtiki App",
    description: "Mental Health First Response",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className={`${poppins.className} antialiased`} lang='en'>
            <body className='md:py-8'>
                <div className='main md:rounded-2xl h-full'>
                    <NavHeader />
                    {children}
                </div>
            </body>
        </html>
    );
}
