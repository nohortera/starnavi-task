import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = <T>(
	url: string,
	initialState: T
): [T, boolean, boolean] => {
	const [data, setData] = useState<T>(initialState);
	const [isError, setIsError] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get<T>(url)
			.then((response) => {
				setData(response.data);
			})
			.catch(() => {
				setIsError(true);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [url]);

	return [data, isLoading, isError];
};
