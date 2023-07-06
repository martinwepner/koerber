export interface SuspenseProps<T> {
	data: T | null | undefined
	isLoading: boolean
	error?: any
	errors?: (Error | null)[] | null
	fallback?: {
		loading?: React.ReactNode
		error?: ((error: Error) => React.ReactNode) | React.ReactNode
		noData?: React.ReactNode
	}
	children: (data: T) => any
}

export const QuerySuspense = <T extends any>(props: SuspenseProps<T>) => {
	const { data, fallback, errors, error, children, isLoading } = props

	if (isLoading === true) {
		return fallback?.loading ?? <div>Loading...</div>
	}

	const displayError = error || errors?.find((err) => !!err)
	if (displayError) {
		if (fallback && fallback.error !== undefined) {
			const errorFallback = fallback.error

			if (typeof errorFallback === "function") {
				return errorFallback(displayError)
			}

			return errorFallback
		} else {
			return <div>{displayError.toString()}</div>
		}
	}
	if (!data) {
		return fallback?.noData ?? <div>No data</div>
	}

	return children(data)
}
