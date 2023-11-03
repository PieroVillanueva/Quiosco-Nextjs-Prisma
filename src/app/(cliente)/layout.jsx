import { Inter } from "next/font/google";

import Sidebar from "../../components/Sidebar";
import Pasos from "@/components/Pasos";

import { QuioscoProvider } from "../../context/QuioscoProvider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Café",
  description: "Quiosco Cafetería",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QuioscoProvider>
          <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 ">
              <Sidebar />
            </aside>
            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
              <div className="p-10">
                <Pasos />
                {children}
              </div>
            </main>
          </div>
          <ToastContainer />
        </QuioscoProvider>
      </body>
    </html>
  );
}
