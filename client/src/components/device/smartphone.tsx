import { Box, Flex, Text } from "@chakra-ui/react"
import { Device } from "shared"
import { Display } from "./display"
import { usePatchDevice } from "../../hooks/use-patch-device"
import { useCallback } from "react"

type SmartphoneProps = {
	device: Device & { type: "Smartphone" | "Tablet" }

	width: number
	contentHeight: number
	headerHeight: number
	footerHeight?: number
}

export function Smartphone({
	device,

	width,
	contentHeight,
	headerHeight,
	footerHeight = headerHeight,
}: SmartphoneProps) {
	const { mutate: patchDevice } = usePatchDevice(device.id)

	const onHomeButtonClick = useCallback(() => {
		patchDevice(
			{ batteryStatus: device.batteryStatus - 10 },
			{
				onError: () => {
					alert("Battery is low")
				},
			},
		)
	}, [device.batteryStatus, patchDevice])

	return (
		<Flex w={width + "px"} direction={"column"}>
			{/* Header */}
			<Box
				background="black"
				borderTopRadius={headerHeight / 2 + "px"}
				h={headerHeight + "px"}
				position="relative"
			>
				<Speaker />
				<Box position="absolute" top="70%" left="50%" transform="translate(-50%, -50%)">
					<Text fontSize="xs" color="white">
						{device.name}
					</Text>
				</Box>
			</Box>

			{/* Display */}
			<Box
				h={contentHeight + "px"}
				border="8px solid black"
				borderTopStyle="none"
				borderBottomStyle="none"
				position="relative"
				background="gray.100"
			>
				<Display device={device} />
			</Box>

			{/* Footer */}
			<Box
				flex="0 1 auto"
				background="black"
				borderBottomRadius={footerHeight / 2 + "px"}
				h={footerHeight + "px"}
				position="relative"
			>
				<HomeButton size={Math.floor(footerHeight * 0.7)} onClick={onHomeButtonClick} />
			</Box>
		</Flex>
	)
}

// Note: the following components are extracted for better readability and not used anywhere else. Thats why they are not exported / in a seperate file.

function Speaker() {
	return (
		<Box
			position="absolute"
			top="20%"
			left="50%"
			transform="translate(-50%, -50%)"
			w="20px"
			h="2px"
			borderRadius="50%"
			background="gray.700"
		/>
	)
}

interface HomeButtonProps {
	size: number
	onClick?: () => void
}
function HomeButton({ size, onClick }: HomeButtonProps) {
	return (
		<Flex
			position="absolute"
			top="50%"
			left="50%"
			transform="translate(-50%, -50%)"
			cursor="pointer"
			w={size + "px"}
			h={size + "px"}
			borderRadius="50%"
			background="gray.100"
			border="1px solid silver"
			justify="center"
			align="center"
			onClick={onClick}
		>
			<Box w={size / 2 + "px"} h={size / 2 + "px"} borderRadius="10%" border="2px solid" borderColor="gray.500" />
		</Flex>
	)
}
