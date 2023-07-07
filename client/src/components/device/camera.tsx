import { Box, Flex, Text } from "@chakra-ui/react"
import { Device } from "shared"
import { Display } from "./display"
import { usePatchDevice } from "../../hooks/use-patch-device"
import { useCallback } from "react"

type CameraProps = {
	device: Device & { type: "Camera" }

	width: number
	height: number
}

export function Camera({ device, width, height }: CameraProps) {
	const { mutate: patchDevice } = usePatchDevice(device.id)

	const onCameraButtonClick = useCallback(() => {
		patchDevice(
			{ batteryStatus: device.batteryStatus - 5 },
			{
				onError: () => {
					alert("Battery is low")
				},
			},
		)
	}, [device.batteryStatus, patchDevice])
	return (
		<Flex h={height + "px"}>
			<Box background="black" borderLeftRadius={width / 2 + "px"} w="16px" position="relative"></Box>

			{/* Display */}
			<Box
				w={width + "px"}
				border="8px solid black"
				borderLeftStyle="none"
				borderRightStyle="none"
				background="gray.100"
			>
				<Display device={device} />
			</Box>

			{/* Button Panel */}
			<Box background="black" borderRightRadius={"20px"} w={width * 0.3 + "px"} position="relative">
				<Box position="absolute" top="70%" left="50%" transform="translate(-50%, -50%)">
					<Text fontSize="xs" color="white">
						{device.name}
					</Text>
				</Box>
				<Box
					position="absolute"
					width="30px"
					height="5px"
					background="black"
					left="3px"
					top="-5px"
					borderTopRadius="3px"
				/>
				<Box
					position="absolute"
					top="30px"
					left="50%"
					transform="translate(-50%, -50%)"
					background="white"
					w="40px"
					h="40px"
					borderRadius="50%"
					cursor="pointer"
					onClick={onCameraButtonClick}
				>
					<Box
						position="absolute"
						top="50%"
						left="50%"
						transform="translate(-50%, -50%)"
						background="black"
						w="20px"
						h="20px"
						borderRadius="50%"
					/>
				</Box>
			</Box>
		</Flex>
	)
}
