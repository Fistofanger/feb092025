import { useState } from 'react';
import { IPlaceDto } from '../type/type';
import ModalDeleteButton from './ModalDeleteButton';
import Button from '../../../shared/ui/Button/Button';
import ModalUpdateButton from './ModalUpdateButton';

type PlaceCardProps = {
  place: IPlaceDto;
};

const PlaceCard = ({ place }: PlaceCardProps): JSX.Element => {
  const [activeDeleteModal, setActiveDeleteModal] = useState(false);
  const [activeUpdateModal, setActiveUpdateModal] = useState(false);
  console.log(`PostCard ${place.id}`);

  return (
    <div className="PlaceCard border-white border-2 rounded-[10px] w-[400px] p-2 mt-10 ">
      <div className="mb-5 mt-5">{place.id}</div>
      <div>{place.name}</div>
      <div>{place.description}</div>
      <div>{place.latitude}</div>
      <div>{place.longitude}</div>
      <div className="flex justify-center gap-10 m-5 ">
        <Button
          title="Удалить"
          onClick={() => setActiveDeleteModal(true)}
          className="rounded p-2 bg-[#45a049] disabled:opacity-50"
        />
        <Button
          title="Обновить"
          onClick={() => setActiveUpdateModal(true)}
          className="rounded p-2 bg-[#45a049] disabled:opacity-50"
        />
      </div>
      {activeDeleteModal && (
        <ModalDeleteButton
          place={place}
          activeDeleteModal={activeDeleteModal}
          setActiveDeleteModal={setActiveDeleteModal}
        />
      )}
      {activeUpdateModal && (
        <ModalUpdateButton
          place={place}
          activeUpdateModal={activeUpdateModal}
          setActiveUpdateModal={setActiveUpdateModal}
        />
      )}
    </div>
  );
};

export default PlaceCard;
