import { useMutation } from '@tanstack/react-query';
import { placesListApi } from '../api';
import { PlaceWithoutId } from '../type/type';
import { queryClient } from '../../../shared/api/queryClient';

export const useAddPlace = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: placesListApi.addPlace,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['places', 'all'] });
    },
  });

  const handleCreate = (data: PlaceWithoutId) => {
    

    mutate(data);

   
  };

  return {
    handleCreate,
    isPending,
  };
};
