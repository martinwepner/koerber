import { UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query"
import { Device } from "shared"
import { API_CLIENT } from "../utils/constants"

export const usePatchDevice = (
	id: number,
	options?: Omit<UseMutationOptions<Device, unknown, Partial<Omit<Device, "id">>, unknown>, "mutationFn">,
) => {
	const queryClient = useQueryClient()
	return useMutation(
		async (device) => {
			const { data } = await API_CLIENT.patch<Device>(`/device/${id}`, device)
			return data
		},
		{
			...options,
			onSuccess: (data, ...args) => {
				queryClient.setQueryData(["devices"], (devices: Device[] | undefined) => {
					return devices
						? devices.map((device) => {
								if (device.id === data.id) {
									return data
								}
								return device
						  })
						: []
				})
				options?.onSuccess?.(data, ...args)
			},
		},
	)
}
