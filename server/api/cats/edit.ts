import { defineEventHandler, readBody, getQuery } from 'h3';
import prisma from '~/lib/prisma';

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);
  const body = await readBody(event);

  try {
    const updatedCat = await prisma.cat.update({
      where: { id: Number(id) },
      data: {
        image: body.image,
        name: body.name,
        description: body.description,
      },
    });

    return updatedCat;
  } catch (error) {
    return { error: 'Failed to update cat' };
  }
});
