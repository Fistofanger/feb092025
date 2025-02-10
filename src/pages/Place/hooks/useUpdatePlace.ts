import { useMutation } from '@tanstack/react-query';
import { placesListApi } from '../api';
import { PlaceId, PlaceWithoutId } from '../type/type';
import { queryClient } from '../../../shared/api/queryClient';

export const useUpdatePlace = () => {
  const { mutate } = useMutation({
    mutationFn: placesListApi.updatePlace,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: ['places', 'all'] });
    },
  });

  const handleUpdate = (data: PlaceWithoutId, id: PlaceId) => {
    mutate({ id, ...data });
  };

  return {
    handleUpdate,
  };
};
