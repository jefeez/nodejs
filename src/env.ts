import { z } from 'zod'

const schemas = z.object({
  NODE_ENV: z.string().default('dev'),
})

export const env = schemas.parse(process.env)
