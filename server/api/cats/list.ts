import { defineEventHandler } from 'h3';
import prisma from '~/lib/prisma';

export default defineEventHandler(async (event) => {
  try {
    const cats = await prisma.cat.findMany();
    return cats;
  } catch (error) {
    return { error: 'Failed to fetch cats' };
  }
});
