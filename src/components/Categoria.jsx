import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";
// import Link from "next/link";

const Categoria = ({ icono, nombre, id }) => {
  const { categoriaActual, handleClickCategoria } = useQuiosco();
  return (
    <div
      className={`${
        categoriaActual?.id === id && "bg-amber-400"
      } flex items-center gap-4 w-full border p-5 hover:bg-amber-400 hover:cursor-pointer`}
      onClick={() => handleClickCategoria(id)}
    >
      <Image
        src={`/img/icono_${icono}.svg`}
        width={70}
        height={70}
        alt={`Imagen de ${nombre}`}
      />
      <p className="text-2xl font-bold ">{nombre}</p>
    </div>
  );
};

export default Categoria;
