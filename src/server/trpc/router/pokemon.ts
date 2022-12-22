import { z } from 'zod'

import { router, publicProcedure } from '../trpc'

export const pokemonRouter = router({
  getById: publicProcedure.input(z.number()).query(({ ctx, input }) => {
    return ctx.prisma.pw_pokemon.findUnique({
      where:{
        id: input
      }
    })
  }),
  infinite: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.number().nullish(),
      })
    )
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 20
      const { cursor } = input
      const items = await ctx.prisma.pw_pokemon.findMany({
        take: limit + 1,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: {
          id: 'asc',
        },
      })
      let nextCursor: typeof cursor | undefined = undefined
      if (items.length > limit) {
        const nextItem = items.pop()
        nextCursor = nextItem?.id
      }
      return {
        items,
        nextCursor,
      }
    }),
})
