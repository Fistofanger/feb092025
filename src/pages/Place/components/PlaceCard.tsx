import { useState } from 'react';
import { IPlaceDto } from '../type/type';
import ModalDeleteButton from './ModalDeleteButton';
import Button from '../../../shared/ui/Button/Button';

type PlaceCardProps = {
  place: IPlaceDto;
};

const PlaceCard = ({ place }: PlaceCardProps): JSX.Element => {
  const [activeDeleteModal, setActiveDeleteModal] = useState(false);

  return (
    <div className="PlaceCard">
      <div>{place.id}</div>
      <div>{place.name}</div>
      <div>{place.description}</div>
      <div>{place.latitude}</div>
      <div>{place.longitude}</div>
      <Button
        title="Удалить"
        onClick={() => setActiveDeleteModal(true)}
        className="rounded p-2 bg-green-700 disabled:opacity-50"
      />
      {activeDeleteModal && (
        <ModalDeleteButton
          place={place}
          activeDeleteModal={activeDeleteModal}
          setActiveDeleteModal={setActiveDeleteModal}
        />
      )}
    </div>
  );
};

export default PlaceCard;
