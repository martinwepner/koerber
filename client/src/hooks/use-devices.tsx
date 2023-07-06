import { useQuery } from "@tanstack/react-query"
import { Device } from "shared"
import { API_CLIENT } from "../utils/constants"

export const useDevices = () => {
	return useQuery({
		queryKey: ["devices"],
		queryFn: async () => {
			const { data } = await API_CLIENT.get<Device[]>("/device")
			return data
		},
	})
}
