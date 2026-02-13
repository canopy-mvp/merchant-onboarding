export async function documentRoutes(app: any) {
  app.post('/v1/onboarding/:id/documents', async (req: any, reply: any) => {
    return reply.status(201).send({ status: 'uploaded' });
  });
}
