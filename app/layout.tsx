import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav1 from "./_components/navbar/nav1";
import Footer1 from "./_components/footer/footer1";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "VizTech PreSchool Web Demo",
  description: "Demo of PreSchool Web App by VizTech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav1/> 
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
       

      
      
      <main>
        {children}
      </main>
    </div>
        <Footer1/>
      </body>
    </html>
  );
}
