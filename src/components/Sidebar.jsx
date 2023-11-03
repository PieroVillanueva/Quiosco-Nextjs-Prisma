"use client";
import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import Categoria from "./Categoria";

const Sidebar = () => {
  const { categorias } = useQuiosco();
  return (
    <>
      <Image
        width={200}
        height={100}
        src={"/img/logo.svg"}
        alt="Imagen logotipo"
        className="mx-auto my-10"
      />
      {categorias?.map((categoria) => (
        <Categoria key={categoria.id} {...categoria} />
      ))}
    </>
  );
};

export default Sidebar;
