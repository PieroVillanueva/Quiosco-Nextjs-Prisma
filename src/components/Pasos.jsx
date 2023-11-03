"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pasos = [
  { paso: 1, nombre: "Menú", url: "/" },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Datos y total", url: "/total" },
];

const pasoValor = {
  "/": 2, //Paso 1 es el 2% del progreso
  "/resumen": 50, //Paso 2 es el 50% del progreso
  "/total": 100, //Paso 3 es el 100% del progreso
};

const Pasos = () => {
  const path = usePathname();

  const calcularProgreso = () => {
    return pasoValor[path];
  };

  return (
    <>
      <div className="flex justify-between mb-5">
        {pasos.map((paso) => (
          <Link key={paso.paso} href={paso.url} className="text-2xl font-bold">
            {paso.nombre}
          </Link>
        ))}
      </div>
      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center"
          style={{ width: `${calcularProgreso()}%` }}
        ></div>
      </div>
    </>
  );
};

export default Pasos;
