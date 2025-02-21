import { defineEventHandler, getQuery } from 'h3';
import prisma from '~/lib/prisma';

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);

  try {
    await prisma.cat.delete({
      where: { id: Number(id) },
    });

    return { message: 'Cat deleted successfully' };
  } catch (error) {
    return { error: 'Failed to delete cat' };
  }
});
