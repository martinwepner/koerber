import { DEVICE_TYPES } from "shared"
import { z } from "zod"

// maps an array T to an array of z.ZodLiteral<...T>
type ZodLiteralified<T extends readonly unknown[]> = { [P in keyof T]: z.ZodLiteral<T[P]> }

// map DEVICE_TYPE to zod literals
type DeviceZodLiterals = ZodLiteralified<typeof DEVICE_TYPES>

// create union of zod literals from DEVICE_TYPE
const deviceZodLiterals = DEVICE_TYPES.map((type) => z.literal(type)) as unknown as DeviceZodLiterals

export const zDeviceType = z.union(deviceZodLiterals)
export const zDeviceBatteryStatus = z.number().min(0).max(100)
