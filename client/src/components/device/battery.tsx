import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import { mapBatteryStatusToColor } from "../../utils/map-battery-status-to-color"

const WIDTH = 25
export type BatteryProps = {
	batteryStatus: number
}
export function Battery({ batteryStatus }: BatteryProps) {
	return (
		<VStack spacing="0.5" align="flex-start">
			<Flex border="1px solid black" h="10px" borderRadius="2px" w={WIDTH + "px"}>
				<Box w={(batteryStatus / 100) * WIDTH + "px"} background={mapBatteryStatusToColor(batteryStatus)} />
			</Flex>
			<Text fontSize="xx-small">{batteryStatus}%</Text>
		</VStack>
	)
}
