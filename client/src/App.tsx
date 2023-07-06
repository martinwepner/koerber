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
			<p>Sorry, no time for proper styling of this app.</p>
			<QuerySuspense {...devicesQuery}>
				{(data) => (
					<div className="container">
						{data.map((device) => (
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
