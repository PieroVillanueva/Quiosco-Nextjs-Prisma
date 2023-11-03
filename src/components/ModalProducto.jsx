"use client";
import useQuiosco from "@/hooks/useQuiosco";
import Image from "next/image";
import { formatearDinero } from "@/helpers";
import { useState, useEffect } from "react";

const ModalProducto = () => {
  const { handleChangeModal, producto, handleAgregarPedido, pedido } =
    useQuiosco();
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  useEffect(() => {
    if (pedido.some((productoState) => productoState.id === producto.id)) {
      setEdicion(true);
      const productoEdicion = pedido.find(
        (productoState) => productoState.id === producto.id
      );
      setCantidad(productoEdicion.cantidad);
    }
  }, []);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 ">
        <div className="md:flex gap-10 p-6   bg-white border-gray-700 border-1 rounded-xl shadow-lg">
          <div className="w-1/3">
            <Image
              src={`/img/${producto.imagen}.jpg`}
              width={300}
              height={400}
              alt={`Imagen producto ${producto.nombre}`}
              className="rounded-md"
            />
          </div>
          <div className="w-2/3">
            <button
              className="w-full flex justify-end"
              onClick={() => handleChangeModal()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
            <p className="mt-5 font-black text-5xl text-amber-500">
              {formatearDinero(producto.precio)}
            </p>
            <div className="flex gap-4 mt-5">
              <button
                type="button"
                onClick={() => {
                  setCantidad((prevState) => {
                    if (prevState === 1) return 1;
                    return prevState - 1;
                  });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <p className="text-3xl">{cantidad}</p>
              <button
                type="button"
                onClick={() => {
                  setCantidad((prevState) => {
                    if (prevState === 5) return 5;
                    setCantidad(prevState + 1);
                  });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>

            <button
              type="button"
              className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
              onClick={() => {
                handleAgregarPedido({ ...producto, cantidad });
              }}
            >
              {edicion ? "Guardar Cambios" : "Añadir a Pedido"}
            </button>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0  z-40 bg-black hover:cursor-pointer" />
    </>
  );
};

export default ModalProducto;
