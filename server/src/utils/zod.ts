import { ZodError, z } from "zod"

export const integerString = () =>
	z.string().refine((value) => Number.isInteger(parseFloat(value)), {
		message: "Expected an integer string",
	})

export const parseInteger = (): z.ZodType<number, z.ZodTypeDef, number | string> =>
	z.union([
		z.number().int(),
		integerString().transform((value, ctx) => {
			const parsedValue = parseInt(value, 10)

			if (isNaN(parsedValue)) {
				throw new ZodError([
					{
						path: ctx.path,
						code: z.ZodIssueCode.custom,
						message: "Expected a parseable integer string",
					},
				])
			}

			return parsedValue
		}),
	])

export const parseDatabaseId = () => parseInteger().pipe(z.number().min(0))
