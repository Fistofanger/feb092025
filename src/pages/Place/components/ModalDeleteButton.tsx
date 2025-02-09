import Button from '../../../shared/ui/Button/Button';
import ModalWindow from '../../../shared/ui/ModalWindow/ModalWindow';
import { useDeletePlaceById } from '../hooks/useDeletePlaceById';
import { IPlaceDto } from '../type/type';

type ModalDeleteButtonProps = {
  place: IPlaceDto;
  activeDeleteModal: boolean;
  setActiveDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalDeleteButton = ({
  place,
  activeDeleteModal,
  setActiveDeleteModal,
}: ModalDeleteButtonProps): JSX.Element => {
  const { handleDelete: deletePlace, isPending } = useDeletePlaceById();
  return (
    <ModalWindow active={activeDeleteModal} setActive={setActiveDeleteModal}>
      <p>Вы действительно хотите удалить?</p>
      <Button
        className="rounded p-2 bg-green-700 disabled:opacity-50 m-5"
        title="Отмена"
        type="button"
        onClick={() => setActiveDeleteModal((prev) => !prev)}
      />
      <Button
        className="rounded p-2 bg-green-700 disabled:opacity-50"
        title="Удалить"
        type="button"
        onClick={() => deletePlace(place.id)}
        disabled={isPending}
      />
    </ModalWindow>
  );
};

export default ModalDeleteButton;
