
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

type Fetcher<T> = () => Promise<T>;

export function useFetchData<T>(
    key: string | readonly unknown[],
    fetcher: Fetcher<T>,
    options?: UseQueryOptions<T>
) {
    return useQuery<T>({
        queryKey: Array.isArray(key) ? key : [key],
        queryFn: fetcher,
        ...options,
    });
}
