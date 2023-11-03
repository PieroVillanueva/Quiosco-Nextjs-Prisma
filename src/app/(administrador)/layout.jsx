import { Inter } from "next/font/google";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Administrador",
  description: "Panel Administrativo",
};

export default function RootLayoutAdmin({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:flex">
          <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 ">
            <Image
              width={200}
              height={100}
              src={"/img/logo.svg"}
              alt="Imagen logotipo"
              className="mx-auto my-10"
            />
          </aside>
          <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
            <div className="p-10">{children}</div>
          </main>
        </div>
        <ToastContainer />
      </body>
    </html>
  );
}
