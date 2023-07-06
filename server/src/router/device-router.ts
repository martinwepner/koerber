import { PrismaClient } from "database"
import { Router } from "express"
import { ValidatedRequest } from "types/validated-request"
import { zDeviceBatteryStatus, zDeviceType } from "utils/constants"
import { parseDatabaseId } from "utils/zod"
import { z } from "zod"

export type DeviceRouterArgs = {
	prisma: PrismaClient
}
export const DeviceRouter = ({ prisma }: DeviceRouterArgs) => {
	const router = Router()

	router.get(
		"/",
		ValidatedRequest(z.object({}), async (req, {}, res) => {
			const devices = await prisma.device.findMany()
			res.json(devices)
		}),
	)

	router.post(
		"/",
		ValidatedRequest(
			z.object({
				body: z.object({
					name: z.string(),
					type: zDeviceType,
					ownerName: z.string(),
					batteryStatus: zDeviceBatteryStatus,
				}),
			}),
			async (req, { body: { name, type, batteryStatus, ownerName } }, res) => {
				const device = await prisma.device.create({
					data: {
						name,
						type,
						batteryStatus,
						ownerName,
					},
				})

				res.json(device)
			},
		),
	)

	router.patch(
		"/:id",
		ValidatedRequest(
			z.object({
				params: z.object({
					id: parseDatabaseId(),
				}),
				body: z.object({
					name: z.string().optional(),
					type: zDeviceType.optional(),
					ownerName: z.string().optional(),
					batteryStatus: zDeviceBatteryStatus.optional(),
				}),
			}),
			async (req, { params: { id }, body: { name, type, batteryStatus, ownerName } }, res) => {
				const device = await prisma.device.update({
					where: { id },
					data: {
						name,
						type,
						batteryStatus,
						ownerName,
					},
				})

				res.json(device)
			},
		),
	)

	return router
}
