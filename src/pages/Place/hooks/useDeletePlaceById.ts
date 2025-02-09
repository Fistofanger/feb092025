import { useMutation } from '@tanstack/react-query';
import { placesListApi } from '../api';
import { queryClient } from '../../../shared/api/queryClient';
import { PlaceId } from '../type/type';

export const useDeletePlaceById = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: placesListApi.deletePlace,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['places', 'all'] });
    },
  });

  const handleDelete = (id: PlaceId) => {
    mutate(id);
  };

  return {
    handleDelete,
    isPending,
  };
};
