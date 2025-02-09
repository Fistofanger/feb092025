import { useGetAllPlacesQuery } from '../hooks/useGetAllPlacesQuery';
// import { useState } from 'react';
import PlaceCard from './PlaceCard';

const PlacesList = (): JSX.Element => {
  const { data: places } = useGetAllPlacesQuery();
  return (
    <>
      {places?.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </>
  );
};

export default PlacesList;
