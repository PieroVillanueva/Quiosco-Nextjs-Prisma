import { prisma } from "@/libs/prismadb";

export default async function handle(req, res) {
    if (req.method === "GET") {
        const ordenes = await prisma.orden.findMany({ where: { estado: false } });
        res.status(200).json(ordenes);
    }
    else if (req.method === "POST") {
        const orden = await prisma.orden.create({
            data: {
                nombre: req.body.nombre,
                total: req.body.total,
                pedido: req.body.pedido,
                fecha: req.body.fecha,
            }
        });
        res.status(200).json(orden);
    }

} 