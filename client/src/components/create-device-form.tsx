import { useState } from "react"
import { DEVICE_TYPES, DeviceType } from "shared"
import { useCreateDevice } from "../hooks/use-create-device"
import { Button, FormControl, FormLabel, Input, Radio, RadioGroup, VStack } from "@chakra-ui/react"

const initialDeviceType = DEVICE_TYPES[0]

export function CreateDeviceForm() {
	const [name, setName] = useState("New Device")
	const [type, setType] = useState<DeviceType>(initialDeviceType)
	const [batteryStatus, setBatteryStatus] = useState(100)
	const [ownerName, setOwnerName] = useState("John Doe")

	const { mutate: createDevice } = useCreateDevice()
	return (
		<>
			<FormControl>
				<FormLabel>Name</FormLabel>
				<Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			</FormControl>

			<FormControl>
				<FormLabel>Owner Name</FormLabel>
				<Input type="text" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
			</FormControl>

			<FormControl>
				<FormLabel>Type</FormLabel>
				<RadioGroup defaultValue={initialDeviceType} onChange={(value) => setType(value as DeviceType)}>
					<VStack alignItems="flex-start">
						{DEVICE_TYPES.map((deviceType) => (
							<Radio value={deviceType}>{deviceType}</Radio>
						))}
					</VStack>
				</RadioGroup>
			</FormControl>

			<FormControl>
				<FormLabel>Battery Status ({batteryStatus}%)</FormLabel>
				<Input
					type="range"
					min="0"
					max="100"
					value={batteryStatus}
					onChange={(e) => setBatteryStatus(parseInt(e.target.value))}
				/>
			</FormControl>
			<Button
				colorScheme="blue"
				type="submit"
				float={"right"}
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
			</Button>
		</>
	)
}
