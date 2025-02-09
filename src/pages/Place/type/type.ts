export interface IPlaceDto {
  id: number;
  name: string;
  description: string;
  latitude: string;
  longitude: string;
}

export type PlaceId = IPlaceDto['id'];

export type PlaceWithoutId = Omit<IPlaceDto, 'id'>;
