import { ErrorRequestHandler } from "express"

export const ErrorHandler = (): ErrorRequestHandler => (err, _req, res, _next) => {
	if (err) {
		console.error(err)

		res.status(500).send("Internal server error")
	}
}
