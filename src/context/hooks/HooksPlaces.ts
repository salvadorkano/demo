import useSWR from 'swr';
import {fetcher} from '../../tools/axiosInstance';

export function usePlaces(url: string) {
  console.log('url', url);

  const {data, error, mutate} = useSWR(url, fetcher);

  console.log('dataaaaaa', data);

  return {
    dataPlaces: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}
