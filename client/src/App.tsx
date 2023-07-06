import "./App.css"
import { CreateDeviceForm } from "./components/create-device"
import { Device } from "./components/device"
import { useDevices } from "./hooks/use-devices"
import { QuerySuspense } from "./utils/query-suspense"

function App() {
	const devicesQuery = useDevices()

	return (
		<>
			<h1>Device Management App POC</h1>
			<QuerySuspense {...devicesQuery}>
				{(devices) => (
					<div className="container">
						{devices.map((device) => (
							<Device key={device.id} device={device} />
						))}
					</div>
				)}
			</QuerySuspense>
			<div className="separator" />
			<p>Create a new device</p>
			<CreateDeviceForm />
		</>
	)
}

export default App
