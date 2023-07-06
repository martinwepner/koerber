import { Box, Flex, VStack, Text } from "@chakra-ui/react"
import { mapBatteryStatusToColor } from "../utils/map-battery-status-to-color"

export type BatteryProps = {
	batteryStatus: number
}
export function Battery({ batteryStatus }: BatteryProps) {
	return (
		<VStack spacing="0.5" align="flex-start">
			<Flex border="1px solid black" h="10px" borderRadius="2px" w="20px">
				<Box w={(batteryStatus / 100) * 20 + "px"} background={mapBatteryStatusToColor(batteryStatus)} />
			</Flex>
			<Text fontSize="xx-small">{batteryStatus}%</Text>
		</VStack>
	)
}
