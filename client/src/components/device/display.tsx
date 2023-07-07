import { Box, Image, Text, VStack } from "@chakra-ui/react"
import { Device } from "shared"
import { Battery } from "./battery"

export interface DisplayProps {
	device: Device
}
export function Display({ device }: DisplayProps) {
	return (
		<VStack position="relative" w="100%" h="100%" justify="center" align="center" spacing="sm">
			<Box position="absolute" top="3%" right="3%">
				<Battery batteryStatus={device.batteryStatus} />
			</Box>
			<Image
				align="center"
				justifySelf="center"
				src="https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
				w="50px"
				h="50px"
				borderRadius="50%"
			/>
			<Text textAlign="center">Owner:</Text>
			<Text textAlign="center">{device.ownerName}</Text>
		</VStack>
	)
}
