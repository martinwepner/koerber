export const mapBatteryStatusToColor = (status: number) => {
	if (status >= 50) return "green"
	if (status >= 25) return "orange"
	return "red"
}
