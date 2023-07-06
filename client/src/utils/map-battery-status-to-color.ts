export const mapBatteryStatusToColor = (status: number) => {
	if (status >= 75) return "green"
	if (status >= 50) return "yellow"
	if (status >= 25) return "orange"
	return "red"
}
