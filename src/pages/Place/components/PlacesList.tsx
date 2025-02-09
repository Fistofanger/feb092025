// import { useMemo } from 'react';
import ListComponent from '../../../shared/ui/ListComponent/ListComponent';
import { useGetAllPlacesQuery } from '../hooks/useGetAllPlacesQuery';
import { IPlaceDto } from '../type/type';
import PlaceCard from './PlaceCard';

const PlacesList = (): JSX.Element => {
  const { data: places } = useGetAllPlacesQuery();

  // useMemo(() => places, [places]);

  const handleRender = (item: IPlaceDto) => (
    <PlaceCard key={item.id} place={item} />
  );
  return <>{places && <ListComponent data={places} render={handleRender} />}</>;
};

export default PlacesList;
