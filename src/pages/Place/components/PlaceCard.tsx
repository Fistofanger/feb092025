import { IPlaceDto } from '../type/type';

type PlaceCardProps = {
  place: IPlaceDto;
};

const PlaceCard = ({ place }: PlaceCardProps): JSX.Element => {
  return (
    <div className="PlaceCard">
      <div>{place.id}</div>
      <div>{place.name}</div>
      <div>{place.description}</div>
      <div>{place.latitude}</div>
      <div>{place.longitude}</div>
    </div>
  );
};

export default PlaceCard;
