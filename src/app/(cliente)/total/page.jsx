"use client";
import { useEffect } from "react";
import useQuiosco from "@/hooks/useQuiosco";
import { formatearDinero } from "@/helpers";

const Total = () => {
  const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco();

  const comprobarPedido = () => {
    return pedido.length === 0 || nombre.trim() === "" || nombre.length < 3;
  };
  useEffect(() => {
    comprobarPedido();
  }, [pedido, nombre]);

  return (
    <>
      <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
      <p className="text-2xl my-10">Confirma tu Pedido a continuación</p>
      <form onSubmit={colocarOrden}>
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="bg-gray-200 w-full md:w-1/3 mt-3 p-2 rounded-md"
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar:{" "}
            <span className="font-bold">{formatearDinero(total)}</span>
          </p>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-800  w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center disabled:opacity-50 disabled:hover:bg-indigo-600"
            disabled={comprobarPedido()}
          >
            Confirmar Pedido
          </button>
        </div>
      </form>
    </>
  );
};

export default Total;
