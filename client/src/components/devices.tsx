import { Box, Flex, Heading, VStack } from "@chakra-ui/react"
import { useDevices } from "../hooks/use-devices"
import { QuerySuspense } from "../utils/query-suspense"
import { Smartphone } from "./device/smartphone"
import { Camera } from "./device/camera"
import { Device, isCamera, isSmartphone, isTablet } from "shared"

export function Devices() {
	const devicesQuery = useDevices()

	return <QuerySuspense {...devicesQuery}>{(devices) => <DevicesSuspended devices={devices} />}</QuerySuspense>
}

interface DevicesSuspendedProps {
	devices: Device[]
}
function DevicesSuspended({ devices }: DevicesSuspendedProps) {
	const smartphones = devices.filter(isSmartphone)
	const cameras = devices.filter(isCamera)
	const tablets = devices.filter(isTablet)

	return (
		<VStack align="flex-start">
			<Box>
				<Heading size="md">Smartphones</Heading>
				<Flex flexWrap="wrap" gap="12px" justify="flex-start">
					{smartphones.map((device) => (
						<Smartphone key={device.id} device={device} headerHeight={40} contentHeight={200} width={150} />
					))}
				</Flex>
			</Box>
			<Box>
				<Heading size="md">Tablets</Heading>
				<Flex flexWrap="wrap" gap="12px" justify="flex-start">
					{tablets.map((device) => (
						<Smartphone key={device.id} device={device} width={350} contentHeight={350} headerHeight={40} />
					))}
				</Flex>
			</Box>
			<Box>
				<Heading size="md">Cameras</Heading>
				<Flex flexWrap="wrap" gap="12px" justify="flex-start">
					{cameras.map((device) => (
						<Camera key={device.id} device={device} width={200} height={125} />
					))}
				</Flex>
			</Box>
		</VStack>
	)
}
