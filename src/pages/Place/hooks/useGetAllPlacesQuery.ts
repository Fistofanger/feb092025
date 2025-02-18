import { useQuery } from '@tanstack/react-query';
import { placesListApi } from '../api';

export const useGetAllPlacesQuery = () => {
  return useQuery({
    queryKey: ['places', 'all'],
    queryFn: placesListApi.getAllPlaces,
    select: (data) => [...data].sort((a, b) => b.id - a.id),
  });
};
