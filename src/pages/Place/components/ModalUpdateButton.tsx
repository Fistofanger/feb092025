import Button from '../../../shared/ui/Button/Button';
import ModalWindow from '../../../shared/ui/ModalWindow/ModalWindow';
import { IPlaceDto } from '../type/type';

import { useForm } from 'react-hook-form';
import { PlaceWithoutId } from '../type/type';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useUpdatePlace } from '../hooks/useUpdatePlace';

type ModalUpdateButtonProps = {
  place: IPlaceDto;
  activeUpdateModal: boolean;
  setActiveUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalUpdateButton = ({
  place,
  activeUpdateModal,
  setActiveUpdateModal,
}: ModalUpdateButtonProps): JSX.Element => {
  const { handleUpdate } = useUpdatePlace();

  const schema = yup
    .object({
      name: yup.string().required('Это обязательное поле'),
      description: yup.string().required('Это обязательное поле'),
      latitude: yup.string().required('Это обязательное поле'),
      longitude: yup.string().required('Это обязательное поле'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PlaceWithoutId>({
    defaultValues: {
      name: place.name,
      description: place.description,
      latitude: place.latitude,
      longitude: place.longitude,
    },
    resolver: yupResolver(schema),
  });

  return (
    <ModalWindow active={activeUpdateModal} setActive={setActiveUpdateModal}>
      <form
        onSubmit={handleSubmit((data) => {
          if (
            !errors.name &&
            !errors.description &&
            !errors.latitude &&
            !errors.longitude
          ) {
            handleUpdate(data, place.id);
            setActiveUpdateModal((prev) => !prev);
          }
        })}
      >
        <label htmlFor="name">
          name
          <input {...register('name')} id="name" />
          {errors.name && <span>{errors.name.message}</span>}
        </label>
        <label htmlFor="description">
          description
          <input {...register('description')} id="description" />
          {errors.description && <span>{errors.description.message}</span>}
        </label>
        <label htmlFor="latitude">
          latitude
          <input {...register('latitude')} id="latitude" />
          {errors.latitude && <span>{errors.latitude.message}</span>}
        </label>
        <label htmlFor="longitude">
          longitude
          <input {...register('longitude')} id="longitude" />
          {errors.longitude && <span>{errors.longitude.message}</span>}
        </label>
        <div className="flex justify-center gap-10 m-5 ">
          <Button
            title="Отмена"
            type="button"
            onClick={() => setActiveUpdateModal((prev) => !prev)}
          />
          <Button title="Добавить" type="submit" />
        </div>
      </form>
    </ModalWindow>
  );
};

export default ModalUpdateButton;
