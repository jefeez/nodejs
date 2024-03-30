import { z } from 'zod'

const schemas = z.object({
  NODE_ENV: z.string().default('development'),
  PORT: z.string().transform((port) => Number(port)),
})

export const env = schemas.parse(process.env)
