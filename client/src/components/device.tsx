import { Box } from "@chakra-ui/react"
import type { Device as DeviceType } from "shared"
import { usePatchDevice } from "../hooks/use-patch-device"

export interface DeviceProps {
	device: DeviceType
}
export function Device({ device }: DeviceProps) {
	const { mutate: patchDevice } = usePatchDevice(device.id)
	return (
		<Box p="8px" boxShadow="md" borderRadius="md" border="1px solid">
			<div>Name: {device.name}</div>
			<div>Type: {device.type}</div>
			<div>Battery: {device.batteryStatus}%</div>
			<div>Owner: {device.ownerName}</div>
			<button
				onClick={() =>
					patchDevice(
						{ batteryStatus: device.batteryStatus - 10 },
						{
							onError: () => {
								alert("Battery is low")
							},
						},
					)
				}
			>
				Decrease Battery
			</button>
		</Box>
	)
}
