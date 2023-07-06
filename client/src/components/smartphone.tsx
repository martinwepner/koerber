import { Box, Flex, Text } from "@chakra-ui/react"
import { Device } from "shared"
import { Battery } from "./battery"

type SmartphoneProps = {
	device: Device & {
		type: "Smartphone"
	}
}

export function Smartphone({ device }: SmartphoneProps) {
	return (
		<Flex minW="180px" direction="column">
			{/* Header */}
			<Box flex="0 1 auto" background="black" borderTopRadius="18px" h="40px" position="relative">
				<Box
					position="absolute"
					top="20%"
					left="50%"
					transform="translate(-50%, -50%)"
					w="20px"
					h="2px"
					borderRadius="50%"
					background="white"
				/>
				<Box position="absolute" top="70%" left="50%" transform="translate(-50%, -50%)">
					<Text fontSize="xs" color="white">
						{device.name}
					</Text>
				</Box>
			</Box>

			{/* Display */}
			<Box
				flex="1 1 auto"
				minH="200px"
				border="8px solid black"
				borderTopStyle="none"
				borderBottomStyle="none"
				position="relative"
				background="gray.100"
			>
				<Box position="absolute" top="10px" right="10px">
					<Battery batteryStatus={device.batteryStatus} />
				</Box>
			</Box>

			{/* Footer */}
			<Box flex="0 1 auto" background="black" borderBottomRadius="18px" h="40px" position="relative">
				<Box
					position="absolute"
					top="50%"
					left="50%"
					transform="translate(-50%, -50%)"
					w="28px"
					h="28px"
					borderRadius="50%"
					background="white"
				></Box>
			</Box>
		</Flex>
	)
}
