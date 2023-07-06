import * as Express from "express"
import { z } from "zod"

export type TypedRequestHandler<TRequest extends Express.Request> = (
	request: TRequest,
	response: Express.Response,
	next: Express.NextFunction,
) => void | Promise<void>

export type ValidatedRequestHandler<TRequest, TValidationResult> = (
	request: TRequest,
	validationResult: TValidationResult,
	response: Express.Response,
	next: Express.NextFunction,
) => void | Promise<void>

// utility middleware to validate requests with zod
export const ValidatedRequest =
	<TRequest extends Express.Request, TValidationResult>(
		validator: z.ZodType<TValidationResult, z.ZodTypeDef, unknown>,
		handler: ValidatedRequestHandler<TRequest, TValidationResult>,
	): TypedRequestHandler<TRequest> =>
	(req, res, next) => {
		const parsedRequest = validator.safeParse(req)

		if (!parsedRequest.success) {
			res.status(400).send([parsedRequest.error])

			return
		} else {
			return handler(req, parsedRequest.data, res, next)
		}
	}
