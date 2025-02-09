import Button from '../../../shared/ui/Button/Button';
import { useDeletePlaceById } from '../hooks/useDeletePlaceById';
import { IPlaceDto } from '../type/type';

type PlaceCardProps = {
  place: IPlaceDto;
};

const PlaceCard = ({ place }: PlaceCardProps): JSX.Element => {
  const { handleDelete: deletePlace, isPending } = useDeletePlaceById();

  return (
    <div className="PlaceCard">
      <div>{place.id}</div>
      <div>{place.name}</div>
      <div>{place.description}</div>
      <div>{place.latitude}</div>
      <div>{place.longitude}</div>
      <Button
        className="rounded p-2 border border-teal-500 disabled:opacity-50"
        title="Удалить"
        type="button"
        onClick={() => deletePlace(place.id)}
        disabled={isPending}
      />
    </div>
  );
};

export default PlaceCard;
