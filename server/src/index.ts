import cors from "cors"
import { PrismaClient } from "database"
import express from "express"
import { DeviceRouter } from "router/device-router"
const API_PORT = 3001 // TODO: as a next step this should be loaded from a config file / env variable

const prisma = new PrismaClient()
const main = async () => {
	const app = express()
	app.use(express.json())
	app.use(cors())

	const deviceRouter = DeviceRouter({ prisma })
	app.use("/device", deviceRouter)

	app.listen(API_PORT, () => {
		console.log(`Listening on port ${API_PORT}`)
	})
}

main().then(() => {
	prisma.$disconnect()
})
