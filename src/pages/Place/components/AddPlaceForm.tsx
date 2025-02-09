import { useForm } from 'react-hook-form';
import { PlaceWithoutId } from '../type/type';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './AddPlaceForm.css';
import { useAddPlace } from '../hooks/useAddPlace';
import Button from '../../../shared/ui/Button/Button';

const AddPlaceForm = (): JSX.Element => {
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
      name: '',
      description: '',
      latitude: '',
      longitude: '',
    },
    resolver: yupResolver(schema),
  });

  const { handleCreate, isPending } = useAddPlace();

  return (
    <form onSubmit={handleSubmit(handleCreate)}>
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
      <Button title="Добавить" type="submit" disabled={isPending} />
    </form>
  );
};

export default AddPlaceForm;
