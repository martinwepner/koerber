import type { Device as DeviceType } from "shared"
import { usePatchDevice } from "../hooks/use-patch-device"
import "./device.css"

export interface DeviceProps {
	device: DeviceType
}
export const Device = ({ device }: DeviceProps) => {
	const { mutate: patchDevice } = usePatchDevice(device.id)
	return (
		<div className="device">
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
		</div>
	)
}
