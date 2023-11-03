import { prisma } from "@/libs/prismadb";

export default async function handle(req, res) {
    if (req.method === "POST") {
        const { id } = req.query;
        const ordenActualizada = await prisma.orden.update({ where: { id: parseInt(id) }, data: { estado: true } });
    }
}