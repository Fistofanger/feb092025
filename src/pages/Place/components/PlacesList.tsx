import ListComponent from '../../../shared/ui/ListComponent/ListComponent';
import { useGetAllPlacesQuery } from '../hooks/useGetAllPlacesQuery';
// import { useState } from 'react';
import PlaceCard from './PlaceCard';

const PlacesList = (): JSX.Element => {
  const { data: places } = useGetAllPlacesQuery();
  return (
    <>
      {places && (
        <ListComponent
          data={places}
          render={(item) => <PlaceCard key={item.id} place={item} />}
        />
      )}
    </>
  );
};

export default PlacesList;
