import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function kybStatusRoutes(app: any) {
  app.get('/v1/onboarding/:id/kyb-status', async (req: any, reply: any) => {
    const merchant = await prisma.merchant.findUnique({
      where: { id: req.params.id },
      include: { kybVerification: true },
    });
    if (!merchant) {
      return reply.status(404).send({ message: 'Merchant not found' });
    }
    console.log('KYB status check for merchant', merchant.id);
    return reply.send({ data: merchant.kybVerification });
  });
}
