"use client";
import useSWR from "swr";
import axios from "axios";
import Orden from "@/components/Orden";

const Admin = () => {
  const fetcher = () => axios("/api/ordenes").then((datos) => datos.data);

  const { data, error, isLoading } = useSWR("/api/ordenes", fetcher, {
    refreshInterval: 100,
  });

  return (
    <>
      <h1 className="text-4xl font-black">Panel de Administración</h1>
      <p className="text-2xl my-10">Administra las Ordenes</p>
      {data?.length ? (
        data.map((orden) => <Orden key={orden.id} orden={orden} />)
      ) : isLoading ? (
        <p>Cargando...</p>
      ) : (
        <p>No hay ordenes</p>
      )}
    </>
  );
};

export default Admin;
