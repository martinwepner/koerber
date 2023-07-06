import { Flex, Wrap, WrapItem } from "@chakra-ui/react"
import { useDevices } from "../hooks/use-devices"
import { QuerySuspense } from "../utils/query-suspense"
import { Smartphone } from "./smartphone"

export function Devices() {
	const devicesQuery = useDevices()

	return (
		<QuerySuspense {...devicesQuery}>
			{(devices) => (
				<Flex flexWrap="wrap" gap="12px" justify="flex-start">
					{devices.map((device) => (
						<>
							{device.type === "Smartphone" && (
								<Smartphone key={device.id} device={device as any /*todo */} />
							)}
							{/* <Device key={device.id} device={device} /> */}
						</>
					))}
				</Flex>
			)}
		</QuerySuspense>
	)
}
