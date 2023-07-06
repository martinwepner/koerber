import { useState } from "react"
import { DeviceType } from "shared"
import { useCreateDevice } from "../hooks/use-create-device"
import "./create-device.css"

export function CreateDeviceForm() {
	const [name, setName] = useState("New Device")
	const [type, setType] = useState<DeviceType>("Camera")
	const [batteryStatus, setBatteryStatus] = useState(100)
	const [ownerName, setOwnerName] = useState("John Doe")

	const { mutate: createDevice } = useCreateDevice()
	return (
		<>
			<form className="container2">
				<label htmlFor="name">Name</label>
				<input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
				<label htmlFor="type">Type</label>
				<select id="type" value={type} onChange={(e) => setType(e.target.value as DeviceType)}>
					{
						// TODO: should use DEVICE_TYPE from shared but currently causes problem if used
						["Smartphone", "Tablet", "Camera"].map((deviceType) => (
							<option value={deviceType}>{deviceType}</option>
						))
					}
				</select>
				<label htmlFor="batteryStatus">Battery Status ({batteryStatus}%)</label>
				<input
					type="range"
					id="batteryStatus"
					min="0"
					max="100"
					value={batteryStatus}
					onChange={(e) => setBatteryStatus(parseInt(e.target.value))}
				/>
				<label htmlFor="ownerName">Owner Name</label>
				<input type="text" id="ownerName" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
			</form>
			<button
				onClick={() => {
					createDevice({
						name,
						type,
						batteryStatus,
						ownerName,
					})
				}}
			>
				Create Device
			</button>
		</>
	)
}
