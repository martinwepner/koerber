import cors from "cors"
import { PrismaClient } from "database"
import "dotenv/config"
import * as env from "env-var"
import express from "express"
import { DeviceRouter } from "router/device-router"

const PORT = env.get("PORT").required().asPortNumber()
const prisma = new PrismaClient()

const main = async () => {
	const app = express()
	app.use(express.json())
	app.use(cors())

	const deviceRouter = DeviceRouter({ prisma })
	app.use("/device", deviceRouter)

	app.listen(PORT, () => {
		console.log(`Device Management API is listening on port ${PORT}`)
	})
}

main().then(() => {
	prisma.$disconnect()
})
