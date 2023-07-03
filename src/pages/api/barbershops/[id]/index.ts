import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { barbershopValidationSchema } from 'validationSchema/barbershops';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.barbershop
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getBarbershopById();
    case 'PUT':
      return updateBarbershopById();
    case 'DELETE':
      return deleteBarbershopById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getBarbershopById() {
    const data = await prisma.barbershop.findFirst(convertQueryToPrismaUtil(req.query, 'barbershop'));
    return res.status(200).json(data);
  }

  async function updateBarbershopById() {
    await barbershopValidationSchema.validate(req.body);
    const data = await prisma.barbershop.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteBarbershopById() {
    const data = await prisma.barbershop.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
