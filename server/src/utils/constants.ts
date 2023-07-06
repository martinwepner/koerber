import { DEVICE_TYPES } from "shared"
import { z } from "zod"

// Utility type to convert a readonly array/tuple to a tuple of zod literals
type ZodLiteralified<T extends readonly unknown[]> = { [P in keyof T]: z.ZodLiteral<T[P]> }

type DeviceZodLiterals = ZodLiteralified<typeof DEVICE_TYPES>
// TS is unfotunately not smart enough to infer the type here even if a readonly array/tuple is passed so we need to help it a bit with the type cast
const DEVICE_TYPES_Z_LITERALS = DEVICE_TYPES.map((type) => z.literal(type)) as unknown as DeviceZodLiterals

export const zDeviceType = z.union(DEVICE_TYPES_Z_LITERALS)
export const zDeviceBatteryStatus = z.number().min(0).max(100)
