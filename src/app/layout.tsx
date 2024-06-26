import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { GlobalProvider } from "@/Context/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-dvh pt-[65px]`}>
        <GlobalProvider>
          <Header />
          <div className="px-5 min-h-[calc(100%-35px)]">{children}</div>
          <Footer />
        </GlobalProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
