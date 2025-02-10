import { useMutation } from '@tanstack/react-query';
import { placesListApi } from '../api';
import { queryClient } from '../../../shared/api/queryClient';
import { IPlaceDto, PlaceId } from '../type/type';

export const useDeletePlaceById = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: placesListApi.deletePlace,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['places', 'all'] });
    },
    onSuccess: (_, id) => {
      const places: IPlaceDto[] | undefined = queryClient.getQueryData([
        'places',
        'all',
      ]);
      if (places) {
        queryClient.setQueryData(
          ['places', 'all'],
          places.filter((place) => place.id !== id)
        );
      }
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
