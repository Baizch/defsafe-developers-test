import { defineEventHandler, readBody } from 'h3';
import prisma from '~/lib/prisma';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const newCat = await prisma.cat.create({
      data: {
        image: body.image,
        name: body.name,
        description: body.description,
      },
    });

    return newCat;
  } catch (error) {
    return { error: 'Failed to create cat' };
  }
});
