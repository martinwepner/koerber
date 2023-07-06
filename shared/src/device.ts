export const DEVICE_TYPES = ["Smartphone", "Tablet", "Camera"] as const
export type DeviceType = (typeof DEVICE_TYPES)[number]

export type Device = {
	id: number
	name: string
	type: DeviceType
	ownerName: string
	batteryStatus: number
}
