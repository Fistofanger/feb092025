import { fetchApiInstance } from '../../shared/api/fetchApi';
import { IPlaceDto } from './type/type';

export const placesListApi = {
  getAllPlaces: async () => {
    const response = await fetchApiInstance<{
      places: IPlaceDto[];
      message: string;
    }>('/places');
    return response.places;
  },
};
