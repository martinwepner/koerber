import { UseMutationOptions, useMutation, useQueryClient } from "@tanstack/react-query"
import { Device } from "shared"
import { API_CLIENT } from "../utils/constants"

export const useCreateDevice = (
	options?: Omit<UseMutationOptions<Device, unknown, Omit<Device, "id">, unknown>, "mutationFn">,
) => {
	const queryClient = useQueryClient()

	return useMutation(
		async (device: Omit<Device, "id">) => {
			const { data } = await API_CLIENT.post<Device>("/device", device)
			return data
		},
		{
			...options,
			onSuccess: (data, ...args) => {
				queryClient.setQueryData(["devices"], (devices: Device[] | undefined) => {
					return devices ? devices.concat(data) : [data]
				})

				options?.onSuccess?.(data, ...args)
			},
		},
	)
}
