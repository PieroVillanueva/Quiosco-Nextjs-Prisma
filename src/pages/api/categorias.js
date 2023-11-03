import { prisma } from "@/libs/prismadb";

export default async function handle(req, res) {
    const categorias = await prisma.categoria.findMany({ include: { productos: true } })
    res.status(200).json(categorias);
} 