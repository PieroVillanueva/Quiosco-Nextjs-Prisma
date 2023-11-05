import Sidebar from "../../components/Sidebar";
import Pasos from "@/components/Pasos";

import { QuioscoProvider } from "../../context/QuioscoProvider";

export const metadata = {
  title: "Café - Menú",
  description: "Menú del Quiosco Cafetería",
};

export default function LayoutCliente({ children }) {
  return (
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
    </QuioscoProvider>
  );
}
