import { fetchApiInstance } from '../../shared/api/fetchApi';
import { IPlaceDto, PlaceId, PlaceWithoutId } from './type/type';

export const placesListApi = {
  getAllPlaces: async () => {
    const response = await fetchApiInstance<{
      places: IPlaceDto[];
      message: string;
    }>('/places');
    return response.places;
  },
  addPlace: async (place: PlaceWithoutId) => {
    const response = await fetchApiInstance<{
      place: IPlaceDto;
      message: string;
    }>('/places', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(place),
    });
    return response.place;
  },
  deletePlace: async (id: PlaceId) => {
    const response = await fetchApiInstance<{
      placeId: PlaceId;
      message: string;
    }>(`/places/${id}`, {
      method: 'DELETE',
    });
    return response.placeId;
  },
};
