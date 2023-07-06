import { Box, Heading, Stack, StackDivider } from "@chakra-ui/react"
import { CreateDeviceForm } from "./components/create-device-form"
import { Devices } from "./components/devices"

function App() {
	return (
		<Box p={["10px", "20px"]}>
			<Heading textAlign="center" marginBottom="40px">
				Device Management App POC
			</Heading>
			<Stack direction={["column", "row"]} spacing="24px">
				<Box minW="200px">
					<CreateDeviceForm />
				</Box>
				<StackDivider />
				<Devices />
			</Stack>
		</Box>
	)
}

export default App
