export const DEVICE_TYPES = ["Smartphone", "Tablet", "Camera"] as const
export type DeviceType = (typeof DEVICE_TYPES)[number]

export type Device = {
	id: number
	name: string
	type: DeviceType
	ownerName: string
	batteryStatus: number
}

// Type Guards

export const isSmartphone = (device: Device): device is Device & { type: "Smartphone" } => device.type === "Smartphone"
export const isTablet = (device: Device): device is Device & { type: "Tablet" } => device.type === "Tablet"
export const isCamera = (device: Device): device is Device & { type: "Camera" } => device.type === "Camera"
