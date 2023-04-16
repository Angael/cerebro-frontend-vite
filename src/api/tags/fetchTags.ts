import { Tag } from '@vanih/cerebro-contracts';
import { API } from '../api';
import { useQuery } from '@tanstack/react-query';

export const fetchTags = async (): Promise<Tag[]> => {
  const response = await API.get(`/tags`);
  return response.data;
};

export function useTagsQuery() {
  return useQuery({
    queryKey: ['tags'],
    queryFn: fetchTags,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10,
  });
}
